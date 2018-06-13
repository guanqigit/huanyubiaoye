var util = require('./utils/util.js');
var api = require('./utils/api.js');
App({
  globalData: {
    userinfo:{},
    openid:''
  },
  appLogin: function () {
    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          var code = res.code;
            wx.request({
              url: 'https://www.huanyubiaoye.com/frontend/login/getWechatOpenid',
              data: {
                code: res.code
              },
              success: function (result) {
                if (result.statusCode === 200) {
                  //获取用户Code用于获取Openid
                  that.globalData.openid = result.data.openid;
                  console.log(that.globalData.openid);
                }
              }
            })
        }
      },
      fail: function (res) {
        wx.showToast({
          title: '登录失败',
        })
      }
    })
  },
  onLaunch: function () {
    var that = this;
    that.appLogin();
  },
})