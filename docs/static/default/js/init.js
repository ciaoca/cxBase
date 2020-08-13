/**
 * 全局配置
 * ------------------------------ */
window.GLOBAL = {
  version: '1.0.0',
  prefix: '',
  platform: {
    isHttps: !!('https:' === document.location.protocol)
  },
  timestamp: new Date().getTime(),
  template: {},
  url: {
    base: ''
  },
  wechat: {}
};

window.APP = new WebApp({
  prefix: GLOBAL.prefix
});

/**
 * 保存系统信息
 * system           系统
 * version          系统版本
 * browser          浏览器
 * browserVersion   浏览器版本
 */
(function() {
  var ua = navigator.userAgent.toLowerCase();
  var _version;

  if(/(iphone|ipad|ipod|ios)/i.test(ua)){
    _version = ua.match(/os\s([\d\.\_]+)/i);
    GLOBAL.platform.system = 'ios';

  } else if(/android/i.test(ua)){
    _version = ua.match(/android\s([\d\.]+)/i);
    GLOBAL.platform.system = 'android';

  } else if(/windows nt/i.test(ua)){
    _version = ua.match(/windows nt\s([\d\.]+)/i);
    GLOBAL.platform.system = 'windows';

  } else if(/mac os x/i.test(ua)){
    _version = ua.match(/mac os x\s([\d\.]+)/i);
    GLOBAL.platform.system = 'mac';
  };

  if (Array.isArray(_version) && _version.length > 1) {
    GLOBAL.platform.version = parseFloat(_version[1].replace(/[\-\_]/g, '.'));
  };

  if(/micromessenger/i.test(ua)){
    GLOBAL.platform.browser = 'wechat';
    _version = ua.match(/micromessenger\/([\d\.]+)/i);

  } else if (/msie/i.test(ua)) {
    GLOBAL.platform.browser = 'ie';
    _version = ua.match(/msie\s([\d\.]+)/i);

  } else if (/trident/i.test(ua)) {
    GLOBAL.platform.browser = 'ie';
    _version = ua.match(/rv:([\d\.]+)/);

  } else if (/chrome/i.test(ua)) {
    GLOBAL.platform.browser = 'chrome';
    _version = ua.match(/chrome\/([\d\.]+)/i);

  } else if (/safari/i.test(ua)) {
    _version = ua.match(/version\/([\d\.]+)/i);
    GLOBAL.platform.browser = 'safari';
  };

  if (Array.isArray(_version) && _version.length > 1) {
    GLOBAL.platform.browserVersion = parseFloat(_version[1].replace(/[\-\_]/g, '.'));
  };
})();


/**
 * artTemplate 模板引擎添加方法
 */
template.defaults.imports.tfEncodeURIComponent = function(string) {
  return encodeURIComponent(string);
};

template.defaults.imports.tfReplace = function(string, regexp, replacement) {
  if (typeof string === 'string' && string.length) {
    string = string.replace(new RegExp(regexp, 'gi'), replacement);
  };
  return string;
};

template.defaults.imports.tfReplaceEnter = function() {
  return APP.replaceEnter.apply(APP, arguments);
};

template.defaults.imports.tfNumberFormat = function() {
  return APP.numberFormat.apply(APP, arguments);
};

template.defaults.imports.tfDate = function(time, style) {
  return cxDate(style, time);
};
