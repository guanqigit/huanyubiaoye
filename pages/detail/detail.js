var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../utils/api.js');
Page({
  data: {
    navtype: 0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  //镜片详情
  detail: function () {
    wx.navigateTo({
      url: '../lensdetail/lensdetail',
    })
  },
  //评论详情
  commentdetail: function () {
    wx.navigateTo({
      url: '../commentdetail/commentdetail',
    })
  },
  //切换列表
  navtab: function (e) {
    var that = this;
    if (e.currentTarget.dataset.nav == 0) {
      that.setData({
        navtype: 0
      })
    } else if (e.currentTarget.dataset.nav == 1) {
      that.setData({
        navtype: 1
      })
    } else {
      that.setData({
        navtype: 2
      })
    }
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
