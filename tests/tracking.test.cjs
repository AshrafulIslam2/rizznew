const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function load(file, globals = {}, imports = {}) {
  const module = { exports: {} };
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020,
  } }).outputText;
  vm.runInNewContext(js, { module, exports: module.exports, URLSearchParams,
    require: id => id in imports ? imports[id] : require(id), ...globals }, { filename: file });
  return module.exports;
}
function setup() {
  const window = {};
  const tracking = load('src/lib/tracking.ts', { window });
  const pixel = load('src/lib/pixel.ts', {}, { './tracking': tracking });
  return { window, tracking, pixel };
}
const cart = [{ slug: 'loafer', name: 'Loafer', price: 1000, quantity: 2, size: '42', color: 'Black' }];

test('events queue without loaded GTM and clear stale ecommerce/Meta data', () => {
  const { window, tracking, pixel } = setup();
  pixel.pixelTrack('AddToCart', { items: tracking.cartTrackingItems(cart), value: 2000, currency: 'BDT' });
  tracking.trackEvent('scroll_depth', { percent_scrolled: 50 });
  assert.equal(window.dataLayer[1].event, 'add_to_cart');
  assert.equal(window.dataLayer[1].ecommerce.items[0].item_variant, '42 / Black');
  assert.equal(window.dataLayer[2].ecommerce, null);
  assert.equal(window.dataLayer[2].meta, null);
  assert.equal(window.dataLayer[3].event, 'scroll_depth');
});
test('purchase separates GA merchandise value and Meta total, preserves dedup ID', () => {
  const { window, tracking, pixel } = setup();
  pixel.pixelTrack('Purchase', { items: tracking.cartTrackingItems(cart), transaction_id: 'ORDER-1',
    value: 1960, ecommerce_value: 1900, shipping: 60, currency: 'BDT' }, { eventID: 'purchase-1' });
  const event = window.dataLayer[1];
  assert.equal(event.ecommerce.value, 1900);
  assert.equal(event.ecommerce.transaction_id, 'ORDER-1');
  assert.equal(event.meta.parameters.value, 1960);
  assert.equal(event.meta.event_id, 'purchase-1');
  assert.equal(event.meta.parameters.items, undefined);
});
test('browser absence and blocked dataLayer do not break shopping', () => {
  const tracking = load('src/lib/tracking.ts');
  assert.doesNotThrow(() => tracking.trackEvent('purchase'));
  const blocked = load('src/lib/tracking.ts', { window: { dataLayer: { push() { throw Error('blocked'); } } } });
  assert.doesNotThrow(() => blocked.trackEvent('purchase'));
});
test('analytics paths exclude arbitrary query data', () => {
  const { tracking } = setup();
  assert.equal(tracking.trackingPath('/brand/checkout', 'email=secret&phone=017'), '/brand/checkout');
  assert.equal(tracking.trackingPath('/brand/catalog', 'category=shoes&email=secret'), '/brand/catalog?category=shoes');
});

function checkout(ok) {
  const setupResult = setup();
  const requests = [], routes = [];
  const component = load('src/app/brand/checkout/page.tsx', {
    document: { cookie: '' },
    fetch: async (url, options) => {
      requests.push({ url, ...options });
      return { ok, json: async () => ({ id: 'REAL-ORDER-1' }), text: async () => 'Failed' };
    },
    process: { env: {} },
  }, {
    react: { useEffect() {}, useRef: value => ({ current: value }),
      useState: initial => [initial && typeof initial === 'object' && 'agreed' in initial
        ? { ...initial, name: 'Test', phone: '01712345678', address: 'Test address', agreed: true } : initial, () => {}] },
    'next/link': { default: () => null },
    'next/navigation': { useRouter: () => ({ push: url => routes.push(url) }) },
    '@/lib/cart-context': { useCart: () => ({ items: cart, total: 2000, clear() {} }) },
    '@/lib/pixel': setupResult.pixel,
    '@/lib/tracking': setupResult.tracking,
    '@/lib/image': { cldUrl: x => x },
    uuid: { v4: () => 'test-event-id' },
  }).default;
  function findForm(element) {
    if (!element) return;
    if (element.type === 'form') return element;
    for (const child of [element.props?.children].flat()) {
      const form = findForm(child); if (form) return form;
    }
  }
  return { ...setupResult, requests, routes, submit: findForm(component()).props.onSubmit };
}
test('successful COD order emits one purchase with same browser/CAPI event ID', async () => {
  const result = checkout(true);
  await Promise.all([result.submit({ preventDefault() {} }), result.submit({ preventDefault() {} })]);
  const purchases = result.window.dataLayer.filter(e => e.event === 'purchase');
  assert.equal(purchases.length, 1);
  assert.equal(purchases[0].ecommerce.transaction_id, 'REAL-ORDER-1');
  assert.equal(result.requests.filter(r => r.url.endsWith('/orders')).length, 1);
  const capi = result.requests.find(r => r.url === '/api/track/purchase');
  assert.equal(JSON.parse(capi.body).eventId, purchases[0].meta.event_id);
  assert.equal(capi.keepalive, true);
  assert.equal(result.routes[0], '/brand/thank-you');
  assert.ok(!JSON.stringify(purchases).includes('01712345678'));
});
test('failed order emits no purchase or CAPI conversion', async () => {
  const result = checkout(false);
  await result.submit({ preventDefault() {} });
  assert.equal(result.window.dataLayer.filter(e => e.event === 'purchase').length, 0);
  assert.equal(result.requests.length, 1);
  assert.equal(result.routes.length, 0);
  assert.ok(result.window.dataLayer.some(e => e.event === 'checkout_error'));
});
test('GTM import initializes Pixel once and passes event ID on repeated events', () => {
  const config = JSON.parse(fs.readFileSync('tracking/gtm-meta-import.json', 'utf8'));
  const html = config.containerVersion.tag[0].parameter[0].value;
  const code = html.replace('<script>', '').replace('</script>', '').replace('{{RIZZ - Meta Event}}', 'gtmEvent');
  const calls = [];
  const fbq = (...args) => calls.push(args);
  const context = { window: { fbq }, document: {}, fbq, gtmEvent: {
    event_name: 'Purchase', parameters: { value: 2000 }, event_id: 'same-capi-id',
  } };
  vm.runInNewContext(code, context);
  vm.runInNewContext(code, context);
  assert.equal(calls.filter(c => c[0] === 'init').length, 1);
  assert.equal(calls[1][4].eventID, 'same-capi-id');
  assert.equal(calls[1][1], '2121296785934066');
});


test('custom events have distinct Meta names and a custom delivery flag', () => {
  const { window, tracking } = setup();
  tracking.trackEcommerce('remove_from_cart', tracking.cartTrackingItems(cart));
  const event = window.dataLayer[1];
  assert.equal(event.meta.custom, true);
  assert.equal(event.meta.event_name, 'RemoveFromCart');
  assert.equal(event.meta.parameters.contents[0].quantity, 2);
  assert.equal(event.meta.parameters.value, 2000);
});
