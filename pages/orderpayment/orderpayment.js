var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../utils/api.js');
Page({
  data: {
    isradio: 1,
    ismodel: 0
  },
  //单选
  radioChange: function (e) {
    var that = this;
    console.log(e)
    that.setData({
      isradio: e.detail.value
    })

  },
  //关闭弹框
  closemodel: function () {
    var that = this;
    that.setData({
      ismodel: 0
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    var that = this;

  },
  onUnload:function(){
    console.log('返回或关闭')
    var that=this;
    that.setData({
      ismodel: 0
    })
    return;
  },
  onLoad: function () {
    var that = this;
    // util.post('api.HttpBannerImage', {
    //   openid: app.globalData.openid,
    //   entid: app.globalData.entid,
    // }, function (res) {
    //   that.setData({
    //     imglist: res.result
    //     })
    // }, function () {

    // })
  },
  onShareAppMessage: function () {
    return {
      title: app.globalData.shares,
      path: 'pages/index/index',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  }
})
