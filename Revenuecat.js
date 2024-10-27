/*************************************

下载地址：星锤日记 https://is.gd/R5KqD4
下载地址：倒数鸭  https://is.gd/rETAhp
下载地址：星垂专注 https://is.gd/rEG9H5
下载地址：Context https://is.gd/splCnF
下载地址： Vision-个人OKR目标管理 https://t.cn/A6OxXNxK
下载地址：Structured-每日计划 https://t.cn/A6cWhz4X
下载地址：cookie记账 
下载地址：倒数鸭 
下载地址：HTTPBOT 2022.2.1 作者zoo
下载地址：Mypianist 2.08
下载地址：TouchRetouch 5.1.12
下载地址：Appspree https://t.cn/A6otfeAc 3.1
下载地址：Persona 1.824
下载地址：WordSwag 4.56
下载地址：AnkiPro 1.22.1
下载地址：SmartAI 
下载地址：AI Chat 
下载地址：‎AI Type
下载地址：TextMask
下载地址：muse 同作者2个软件
下载地址：Funexpected 
下载地址：中国法律

**************************************

[rewrite_local]
#修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/anker1209/QuanX/main/Revenuecat.js
#清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/anker1209/QuanX/main/Revenuecat.js

[mitm] 
hostname = api.revenuecat.com

************************************/

const Q = {};
const Q1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Q.headers = $request.headers;
} else if (Q1 && Q1.subscriber) {
  Q1.subscriber.subscriptions = Q1.subscriber.subscriptions || {};
  Q1.subscriber.entitlements = Q1.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = '1';
  const UAMappings = {
    'dtdVibe':{name:'pro',id:'com.dtd.aroundu.year'},//9.26
    'DtdVibe':{name:'pro',id:'com.dtd.playlist.premium.subscription.yearr'},
    'stepsApp':{name:'\u0073\u0074\u0065\u0070\u0073\u0061\u0070\u0070\u005f\u0070\u0065\u0064\u006f\u006d\u0065\u0074\u0065\u0072\u005f\u0070\u0072\u0065\u006d\u0069\u0075\u006d\u005f\u0031\u005f\u006d\u006f\u006e\u0074\u0068',id:'\u0061\u0070\u0070\u002e\u0073\u0074\u0065\u0070\u0073\u002e\u0073\u0074\u0065\u0070\u0073\u0061\u0070\u0070\u002e\u0070\u0072\u0065\u006d\u0069\u0075\u006d\u002e\u006d\u006f\u006e\u0074\u0068\u006c\u0079\u0054\u0072\u0069\u0061\u006c\u002e\u0074\u0069\u0065\u0072\u0031'},
    'midiClock':{name:'Entitlement.Pro',id:'tech.miidii.MDClock.pro'},
    'gentler':{name:'premium',id:'app.gentler.activity.subscription.yearly1.add30off_1stYear'},
    'lake':{name:'standard',id:'com.lake.coloring.sub.all1.promo2.yearly2'},
    'Structured':{name:'pro',id:'today.structured.pro'},
    'Scanner':{name:'plus',id:'com.readdle.Scanner.subscription.year25'},
    'Chatme':{name:'premium',id:'chatme_premium_year_discount'},//9.24
    'Alpenglow':{ name: 'newPro', id: 'ProLifetime'},//9.23
    'Opal':{ name: 'premium_tier_2', id: 'com.withopal.opal.premiumtier2lifetime'},
    'Boring':{ name: 'pro', id: 'month'},//8.29lifelog
    'Super%20AI%20Chat':{ name: 'premium', id: 'chatbot_v4_1999_1y'},
    'Linearity':{ name: 'pro', id: 'linearity_curve_pro_yearly_special_offer_trial'},
    'XBListeningEnglish':{ name: 'enPro', id: 'com.shenming.newconceptvip.year'},
    'FretTrainer':{ name: 'pro', id: 'frettrainer.sub.yearly.pro'},//5.7
    '%E9%B2%B8%E8%90%BD%E6%96%87%E6%A1%88':{ name: 'vip', id: 'jl_year'},//2024.5.6
    'PeachTree':{ name: 'GoldMember', id: 'LifetimeGoldMembership'},//2024.5.5
    'No%20Fusion':{ name: 'LivePhoto', id: 'com.grey.livephoto.reference.price'},//2024.5.5
    'mark_cup':{ name: 'premiun', id: '202403180021'},//20.24.5.4
    'VOX':{ name: 'VOX Premium', id: 'com.coppertino.VoxMobile.AU.Loop1_v8'},//20.24.4.22
    'PDF%20Viewer':{ name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'},//2024.3.21
    'Text%20Workflow':{ name: 'pro', id: 'tw_99_1m'},//2024.3.2
    'ShellBoxKit':{ name: 'pro', id: 'ShellBoxKit.Lifetime'},//2024.4.9
    'PicSeedClient':{ name: 'Pro', id: 'com.picseed.sub.pro.monthly'},//7.6
    'StarDiary':{ name: 'pro', id: 'com.gsdyx.StarDiary.nonConsumable.forever'},
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'Vision':{ name: 'promo_3.0', id: 'vis_lifetime_3.0_promo'},
    'Structured':{ name: 'pro', id: 'today.structured.pro'},
    'Cookie':{ name: 'allaccess', id: 'app.ft.Bookkeeping.lifetime'},
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'HTTPBot':{ name: 'Pro', id: 'httpbot_1499_1y_1w0'},
    'MyPianist':{ name: 'pro', id: 'com.collaparte.mypianist.pro.gift.twelve'},
    'TouchRetouchBasic':{ name: 'premium', id: 'tr5_yearlysubsc_30_and_20_dlrs'},//年底订阅
    'Free':{ name: 'pro', id: 'appspree_pro_lifetime'},
    'Version':{ name: 'pro', id: 'httpbot_1499_1y_1w0'},
    'wordswag':{ name: 'pro', id: 'Pro_Launch_Monthly'},
    'BlackBox':{ name: 'plus', id: 'app.filmnoir.appstore.purchases.lifetime'},
    'LongmaoApp':{ name: 'pro', id: 'douyina_forever_01'},
    'AnkiPro':{ name: 'Premium', id: 'com.ankipro.app.lifetime'},
    'AIChat':{ name: 'AI Plus', id: 'aiplus_yearly'},
    'SmartAIChat':{ name: 'Premium', id: 'sc_3999_1y'},
    'TextMask':{ name: 'pro', id: 'tm_lifetime'},
    'ImagineAI':{ name: 'pro', id: 'artistai.yearly.1'},
    'VoiceAI':{ name: 'Special Offer', id: 'voiceannualspecial'},
    'Langster':{ name: 'Premium', id: 'com.langster.universal.lifetime'},
    'Chat%E7%BB%83%E5%8F%A3%E8%AF%AD':{ name: 'Premium', id: 'com.tech.AiSpeak.All'},
    'Readle':{ name: 'Premium', id: 'com.hello.german.yearly'},
    'image_upscaler':{ name: 'pro', id: 'yearly_sub_pro'},
    'Funexpected%20Math':{ name: 'plus', id: 'Plus6Months14DaysTrial'},
    'cdiary':{ name: 'Premium', id: 'pub.kiya.daymoment.lifetime'},
    'Sex%20Actions':{ name: 'Premium Plus', id: 'ru.sexactions.subscriptionPlusWeek1'},
    'Emoji+%20%F0%9F%98%9':{ name: 'premium', id: 'com.emoji.freemium.subscription.premium'},
    'universal':{ name: 'Premium', id: 'remotetv.yearly.01'},
    'HabitKit':{ name: 'Pro', id: 'habitkit_1799_lt'},
    'windiary':{ name: 'Pro', id: 'windiary_1799_lt'},
    'Liftbear':{ name: 'Pro', id: 'liftbear_2399_1y'},
    'Currency':{ name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.pro.crossgrade'},

    'VSCO':{name:'pro',id:'vscopro_global_5999_annual_7D_free'},
    'Pillow':{name:'premium',id:'com.neybox.pillow.premium.yearly'}
    
    
    
    };

  const data = {
    "expires_date": "2099-12-31T12:00:00Z",
    "original_purchase_date": "2023-09-01T11:00:00Z",
    "purchase_date": "2023-09-01T11:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      Q1.subscriber.subscriptions = {};
      Q1.subscriber.subscriptions[id] = data;
      Q1.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      Q1.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  Q.body = JSON.stringify(Q1);
}
$done(Q);
