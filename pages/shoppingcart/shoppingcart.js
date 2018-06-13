var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../utils/api.js');
Page({
  data: {
    allchecked: ''
  },
  //全选
  allchecked: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  //全选
  listchecked: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  //镜片搭配
  lenscollocation: function () {
    wx.navigateTo({
      url: '../lenscollocation/lenscollocation',
    })
  },
  //去结算
  gotopay:function(){
  wx.navigateTo({
    url: '../confirmorder/confirmorder',
  })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    var that = this;

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
