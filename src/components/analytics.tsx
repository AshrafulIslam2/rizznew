import { Suspense } from "react";
import { SiteTracking } from "@/components/site-tracking";

export const GTM_ID = "GTM-5JWD43TK";

// Render the standard bootstrap in <head>; the downloaded GTM script is async.
export function GoogleTagManager() {
  return <script id="gtm-init" dangerouslySetInnerHTML={{ __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');` }} />;
}

// GTM owns browser tags; don't initialize GA or Meta a second time here.
export function Analytics() {
  return <Suspense fallback={null}><SiteTracking /></Suspense>;
}
