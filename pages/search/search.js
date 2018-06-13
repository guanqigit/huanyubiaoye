var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../utils/api.js');
Page({
  data: {
    searchnav: [
      { id: 0, txt: '镜片' },
      { id: 1, txt: '镜框' }
    ],
    producFrametList: [
      {
        outWidth: 312,
        praiseRate: 11111,
        isPinkage: 0,
        minPrice: 10011,
        name: "123",
        icon: "http://localhost:8010/ed4494ba-5ec5-4819-8d12-72685e01fdf8.jpg",
        brandModel: "12321",
        isCoupons: 0,
        id: 12,
        isNew: 1,
        isTry: 1
      },
      {
        outWidth: 312,
        praiseRate: 11111,
        isPinkage: 0,
        minPrice: 10011,
        name: "123",
        icon: "http://localhost:8010/ed4494ba-5ec5-4819-8d12-72685e01fdf8.jpg",
        brandModel: "12321",
        isCoupons: 0,
        id: 12,
        isNew: 1,
        isTry: 1
      },
      {
        outWidth: 312,
        praiseRate: 11111,
        isPinkage: 0,
        minPrice: 10011,
        name: "123",
        icon: "http://localhost:8010/ed4494ba-5ec5-4819-8d12-72685e01fdf8.jpg",
        brandModel: "12321",
        isCoupons: 0,
        id: 12,
        isNew: 1,
        isTry: 1
      },
      {
        outWidth: 312,
        praiseRate: 11111,
        isPinkage: 0,
        minPrice: 10011,
        name: "123",
        icon: "http://localhost:8010/ed4494ba-5ec5-4819-8d12-72685e01fdf8.jpg",
        brandModel: "12321",
        isCoupons: 0,
        id: 12,
        isNew: 1,
        isTry: 1
      }
    ],
    scrollTop: 0,
    current: 0,
    placeholder:'搜多镜片',
    srarchlist: ['全金属镜框', '修脸神器', '黑框眼镜', '镜片', '粉嫩镜框','近视太阳镜']
  },
  //进入商品列表页
  searchlist:function(){
    wx.navigateTo({
      url: '../goodslist/goodslist',
    })
  },
  //搜索切换 
  searchbtn: function () {
    console.log(123)
    var that = this;
    if (that.data.current == 0) {
      that.setData({
        current: 1,
        placeholder: '超清记忆金属镜框'
      })
    } else {
      that.setData({
        current: 0,
        placeholder: '搜多镜片'
      })
    }
  },
  //监听页面滚动
  onPageScroll: function (e) {
    this.setData({
      scrollTop: e.scrollTop
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
