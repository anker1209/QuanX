let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    const name = "\u0045\u006e\u0074\u0069\u0074\u006c\u0065\u006d\u0065\u006e\u0074\u002e\u0050\u0072\u006f";
    const appid = "\u0074\u0065\u0063\u0068\u002e\u006d\u0069\u0069\u0064\u0069\u0069\u002e\u004d\u0044\u0043\u006c\u006f\u0063\u006b\u002e\u0070\u0072\u006f";
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
    subscriber.entitlements[(name)].product_identifier = (appid);   
    obj.body = JSON.stringify(body);
  } 
}

$done(obj);
