let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    const name = "\u0061\u0070\u0070\u002e\u0073\u0074\u0065\u0070\u0073\u002e\u0073\u0074\u0065\u0070\u0073\u0061\u0070\u0070\u002e\u0070\u0072\u0065\u006d\u0069\u0075\u006d\u002e\u006d\u006f\u006e\u0074\u0068\u006c\u0079\u0054\u0072\u0069\u0061\u006c\u002e\u0074\u0069\u0065\u0072\u0031";
    const appid = "\u0073\u0074\u0065\u0070\u0073\u0061\u0070\u0070\u005f\u0070\u0065\u0064\u006f\u006d\u0065\u0074\u0065\u0072\u005f\u0070\u0072\u0065\u006d\u0069\u0075\u006d\u005f\u0031\u005f\u006d\u006f\u006e\u0074\u0068";
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
