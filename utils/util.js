var tools = require('tools.js');
var api = require('api.js');
var config = {
  home_url: (false ? 'https://www.huanyubiaoye.com/frontend' : 'https://www.huanyubiaoye.com/frontend')
}

/**
 * request请求服务器
 */
function post(url, data, success, error, complete) {
  if (url.indexOf('http://') != 0 && url.indexOf('https://') != 0) {
    url = config.home_url + url;
  }
  wx.request({
    url: url,
    data: data,
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    success: function (res) {
      typeof success == "function" && success(res.data);
    },
    fail: function (res) {
      typeof error == "function" && error(res);
    },
    complete: function (res) {
      typeof complete == "function" && complete(res);
    }
  })
}

Date.prototype.format = function (format) {
  var date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1
        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;
}
function getsystemconfig(data, success, error) {
  post('/api/user/getsystemconfig', 'form', data, function (res) {
    if (res && res.code == 0) {
      typeof success == 'function' && success(res);
    } else {
      typeof error == 'function' && error(res);
    }
  }, function (res) {
    typeof error == 'function' && error(res);
  })
}
module.exports = {
  config: config,
  post: post,
  getsystemconfig: getsystemconfig,
}

