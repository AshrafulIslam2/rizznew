# RIZZ tracking setup

Frontend container: `GTM-5JWD43TK`
Meta Pixel: `2121296785934066` (found in the existing local environment)

## Activate before deploying this frontend

The frontend now sends dataLayer events; GTM owns the browser Meta/GA tags. The previous direct Meta and GA loaders were removed to prevent double counting. **Do not deploy this change with an empty/unpublished GTM container: browser Pixel events would stop.**

1. Open the intended GTM container and export its existing version as a backup.
2. Admin > Import Container > choose `tracking/gtm-meta-import.json`.
3. Select a workspace and **Merge**, not a full-container overwrite. On first import rename conflicts; inspect the preview for one RIZZ tag, one trigger and one variable. On subsequent imports update the existing RIZZ components rather than keeping duplicate copies.
4. Inspect any existing Meta tags. Only one implementation should send these events for Pixel `2121296785934066`. The supplied tag initializes the Pixel on its first event and sends both standard and custom events. It does not send a second automatic PageView.
5. Use GTM Preview against a running frontend with these changes. Check Data Layer, Tags Fired, and Meta Events Manager > Test Events. This JSON has been checked locally; acceptance by the GTM importer and live delivery still need verification.
6. Publish the reviewed GTM version, then deploy the frontend. The imported custom-event trigger is inactive on old frontend code that does not emit these events, allowing GTM to be published first.

Google import instructions: https://support.google.com/tagmanager/answer/6106997

## Events available

| Frontend event | When | Meta event |
| --- | --- | --- |
| page_view | Initial visit and client navigation; catalog filter/page changes | PageView |
| view_item | Product detail displayed | ViewContent |
| add_to_cart | Successful add or positive quantity difference | AddToCart |
| begin_checkout | Non-empty hydrated checkout displayed | InitiateCheckout |
| add_payment_info | Valid checkout submitted with COD | AddPaymentInfo |
| purchase | Orders API returns success | Purchase |
| generate_lead | Catalog lead API accepts the submission | Lead |
| contact_click | WhatsApp, phone or email link clicked | Contact |
| view_item_list | Catalog result list changes | ViewItemList (custom) |
| select_item | Product link clicked | SelectItem (custom) |
| view_cart | Non-empty cart displayed or cart contents change | ViewCart (custom) |
| remove_from_cart | Removal or negative quantity difference | RemoveFromCart (custom) |
| add_shipping_info | Valid checkout submitted | AddShippingInfo (custom) |
| catalog_filter | Filter/sort choice selected | CatalogFilter (custom) |
| select_variant | Size/color selected | SelectVariant (custom) |
| coupon_apply / coupon_remove | Coupon requested/removed; not proof of acceptance | CouponApply / CouponRemove (custom) |
| form_start | First checkout input focus per page visit | CheckoutFormStart (custom) |
| checkout_error | Validation/order request fails; no customer input sent | CheckoutError (custom) |
| catalog_download | Catalog opening requested, not download completion | CatalogDownload (custom) |
| scroll_depth | 25/50/75/90 percent, once per page visit | ScrollDepth (custom) |
| outbound_click | External HTTP link clicked, domain only | OutboundClick (custom) |
| video_start / video_complete | Native HTML video play/end; play includes resume | VideoStart / VideoComplete (custom) |

Custom events are available for analysis but are not all sales conversions. There is no working site search, account registration, wishlist, or refund action in this frontend, so none is fabricated. Newsletter submission currently has no confirmed success integration and is not counted as a lead.

## Data and purchase semantics

- BDT currency. Product slug is the item ID, matching the existing Meta implementation. Meta catalog feed IDs must match those slugs.
- Ecommerce items contain product name, price, quantity and selected size/color where available.
- GA purchase `value` excludes shipping; Meta Purchase value includes shipping to match the existing CAPI endpoint. Discount is reflected in the order-level GA value; item prices remain the selected storefront prices, without per-item discount allocation.
- Purchase means the API accepted a COD order, not delivered/paid revenue. Refunds, cancellations and delivered orders require backend events.
- The order response ID is the transaction ID; if absent, the event UUID is a fallback. An in-flight guard prevents double-click submissions within this page instance. Full retry/cross-tab idempotency requires the order backend.
- Browser Purchase and the existing CAPI request share the same event ID. This is preserved by the import file. CAPI remains dependent on deployment environment credentials and the existing endpoint; it has not been verified with Meta here. That existing endpoint accepts client-supplied order details and should be moved to a verified order-created backend flow for authoritative server reporting.
- No new analytics payload contains checkout names, phones, emails, addresses or notes. Page URLs exclude arbitrary query parameters; contact events exclude destination phone/email and WhatsApp message text. This does not change the existing checkout-lead/CAPI business integrations or third-party SDK automatic collection.
- Cookie/consent handling follows the existing site's setup; no new consent manager is introduced.

## Optional Google Analytics

No real GA4 Measurement ID was found locally. `.env.example` has a placeholder only. The Meta import does not install GA4.

Once a real G- ID is available:

1. Add a Google tag in GTM and set `send_page_view` to false.
2. Add a GA4 Event tag triggered by the explicit event allowlist in `gtm-meta-import.json`, with Event Name set to GTM's built-in Event variable. Enable Send Ecommerce Data from Data Layer.
3. Add Data Layer variables for `page_path`, `page_location`, `page_referrer` to the page_view tag, and the relevant custom parameters to other tags (e.g. `percent_scrolled`, `contact_channel`, `filter_name`, `filter_value`, `variant_type`, `variant_value`). Avoid sending stale parameters from unrelated events: separate tags by event or map only that event's parameters.
4. Disable automatic browser-history page views, scroll, outbound-click and form measurement when sending equivalent manual events, to avoid duplicates. Leave only one page_view sender.
5. Verify in Preview and GA4 DebugView before publishing.

GA4 ecommerce specification: https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtm

## Verification

- `node --test tests/tracking.test.cjs`: local event queue, payload isolation, privacy, checkout success/failure/double-click behavior and import script tests. Checkout tests mock the API and do not place real orders.
- `npx tsc --noEmit --incremental false`: type checking.
- `npm run build`: production compilation. The local backend was unavailable, so static generation used existing product fallbacks.
- Live acceptance: one PageView per navigation, one AddToCart per action, correct quantity deltas, no Purchase on failure or thank-you refresh, matching browser/server Purchase IDs, and correct currency/value. Real order verification should use a staging/test order.
