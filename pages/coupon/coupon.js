var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../utils/api.js');
Page({
  data: {
    tabar: 0
  },
  //标签切换
  tabar:function(e){
    var that=this;
    that.setData({
      tabar:e.currentTarget.dataset.bar
    })
  },
  //单选
  radioChange:function(){
    
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
