const fs = require('node:fs');
const metaHtml = `<script>
(function () {
  var event = {{RIZZ - Meta Event}};
  if (!event || !event.event_name) return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  if (!window.__rizzMetaInitialized) {
    fbq('init', '2121296785934066');
    window.__rizzMetaInitialized = true;
  }
  fbq(event.custom ? 'trackSingleCustom' : 'trackSingle', '2121296785934066', event.event_name, event.parameters || {},
    event.event_id ? {eventID: event.event_id} : {});
})();
</script>`;
const container = {
  exportFormatVersion: 2,
  containerVersion: {
    container: { publicId: 'GTM-5JWD43TK', name: 'RIZZ', usageContext: ['WEB'] },
    builtInVariable: [
      { name: 'Event', type: 'EVENT' },
      { name: 'Page Hostname', type: 'PAGE_HOSTNAME' },
      { name: 'Page Path', type: 'PAGE_PATH' },
      { name: 'Page URL', type: 'PAGE_URL' },
      { name: 'Referrer', type: 'REFERRER' },
    ],
    variable: [{ variableId: '1', name: 'RIZZ - Meta Event', type: 'v', parameter: [
      { type: 'INTEGER', key: 'dataLayerVersion', value: '2' },
      { type: 'BOOLEAN', key: 'setDefaultValue', value: 'false' },
      { type: 'TEMPLATE', key: 'name', value: 'meta' },
    ] }],
    trigger: [{ triggerId: '1', name: 'RIZZ - Meta Events', type: 'CUSTOM_EVENT', customEventFilter: [{
      type: 'MATCH_REGEX', parameter: [
        { type: 'TEMPLATE', key: 'arg0', value: '{{_event}}' },
        { type: 'TEMPLATE', key: 'arg1', value: '^(page_view|view_item|add_to_cart|begin_checkout|add_payment_info|purchase|generate_lead|contact_click|view_cart|view_item_list|select_item|remove_from_cart|add_shipping_info|catalog_filter|select_variant|coupon_apply|coupon_remove|checkout_error|form_start|catalog_download|scroll_depth|outbound_click|video_start|video_complete)$' },
      ]
    }] }],
    tag: [{ tagId: '1', name: 'RIZZ - Meta Pixel and Events', type: 'html',
      parameter: [{ type: 'TEMPLATE', key: 'html', value: metaHtml },
        { type: 'BOOLEAN', key: 'supportDocumentWrite', value: 'false' }],
      firingTriggerId: ['1'], tagFiringOption: 'ONCE_PER_EVENT',
    }],
  },
};
fs.writeFileSync('tracking/gtm-meta-import.json', JSON.stringify(container, null, 2) + '\n');
