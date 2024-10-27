/*************************************

自用app解锁

**************************************

[rewrite_local]
#修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/anker1209/QuanX/main/Revenuecat.js
#清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/anker1209/QuanX/main/Revenuecat.js

[mitm] 
hostname = api.revenuecat.com

************************************/

let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {

    const mdname = "Entitlement.Pro";
    const mdappid = "tech.miidii.MDClock.pro";

    const name = "stepsapp_pedometer_premium_1_month";
    const appid = "app.steps.stepsapp.premium.monthlyTrial.tier1";

    const lake_product_id = "com.lake.coloring.sub.all1.promo2.yearly2";
    const lake_entitlement = "standard";

    const gentler_entitlement = "premium";
    const gentler_product_id = "app.gentler.activity.subscription.yearly1.add30off_1stYear";

    const PDFViewer_entitlement = "sub.pro";
    const PDFViewer_product_id = "com.pspdfkit.viewer.sub.pro.yearly";

    let data = {
      "expires_date": "2999-01-01T00:00:00Z",
      "original_purchase_date":  "2021-01-01T00:00:00Z",
      "purchase_date": "2021-01-01T00:00:00Z",
      "ownership_type": "PURCHASED",
      "store": "app_store"
    };
    let subscriber = body.subscriber;
    subscriber.subscriptions[(appid)] = data;
    subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));

    subscriber.subscriptions[(mdappid)] = data;
    subscriber.entitlements[(mdname)] = JSON.parse(JSON.stringify(data));

    subscriber.subscriptions[(gentler_product_id)] = data;
    subscriber.entitlements[(gentler_entitlement)] = JSON.parse(JSON.stringify(data));

    subscriber.entitlements[(name)].product_identifier = (appid);
    subscriber.entitlements[(mdname)].product_identifier = (mdappid);
    subscriber.entitlements[(gentler_entitlement)].product_identifier = (gentler_product_id);

    subscriber.entitlements[(lake_entitlement)] = subscriber.subscriptions[(lake_product_id)] = data;        
    subscriber.entitlements[(lake_entitlement)].product_identifier = lake_product_id;

    subscriber.entitlements[(PDFViewer_entitlement)] = subscriber.subscriptions[(PDFViewer_product_id)] = data;        
    subscriber.entitlements[(PDFViewer_entitlement)].product_identifier = PDFViewer_product_id;

    obj.body = JSON.stringify(body);
  } 
}

$done(obj);
