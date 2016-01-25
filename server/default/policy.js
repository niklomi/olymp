BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

var trusted = [
  '*.google-analytics.com',
];

_.each(trusted, function(origin) {
  origin = "https://" + origin;
  BrowserPolicy.content.allowOriginForAll(origin);
});

BrowserPolicy.content.allowOriginForAll('*.gstatic.com');
BrowserPolicy.content.allowOriginForAll('*.googleapis.com');

BrowserPolicy.content.allowOriginForAll('*.facebook.net');
BrowserPolicy.content.allowOriginForAll('*.twitter.com');
BrowserPolicy.content.allowInlineScripts('*.twitter.com');
BrowserPolicy.content.allowInlineScripts('*.facebook.net');
BrowserPolicy.content.allowEval('*.facebook.com');
BrowserPolicy.content.allowEval('*.twitter.com');
BrowserPolicy.content.allowOriginForAll('*.facebook.com');

var rootUrl = __meteor_runtime_config__.ROOT_URL;
BrowserPolicy.content.allowConnectOrigin(rootUrl);
BrowserPolicy.content.allowConnectOrigin(rootUrl.replace('http', 'ws'));
