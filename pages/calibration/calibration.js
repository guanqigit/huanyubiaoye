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
    selectPerson: true,
    firstPerson: '136 mm',
    first1code: true,
    first2code:false,
    selectArea: false,
    selectPerson1: true,
    firstPerson1: '136 mm',
    selectArea1: false,
    checked1: true,
    checked2: false,
  },
  //单选
  checked: function (e) {
    var that = this;
    if (e.currentTarget.dataset.programme == 1) {
      that.setData({
        checked1: true,
        checked2: false,
        first1code: true,
        first2code: false,
      })
    } else {
      that.setData({
        checked2: true,
        checked1: false,
        first1code: false,
        first2code: true,
      })
    }

  },
  //创建眼光数据
  creatdata:function(){
    wx.navigateTo({
      url: '../user-defined-data/user-defined-data',
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    var that = this;

  },
  //点击选择类型1
  clickPerson: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  //点击切换1
  mySelect: function (e) {
    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: true,
      selectArea: false,
    })
  },
  //点击选择类型2
  clickPerson1: function () {
    var selectPerson1 = this.data.selectPerson1;
    if (selectPerson1 == true) {
      this.setData({
        selectArea1: true,
        selectPerson1: false,
      })
    } else {
      this.setData({
        selectArea1: false,
        selectPerson1: true,
      })
    }
  },
  //点击切换2
  mySelect1: function (e) {
    this.setData({
      firstPerson1: e.target.dataset.me,
      selectPerson1: true,
      selectArea1: false,
    })
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
