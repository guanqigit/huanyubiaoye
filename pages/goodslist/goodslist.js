var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../utils/api.js');
Page({
  data: {
    searchnav: [
      { id: 0, txt: '镜片列表' },
      { id: 1, txt: '镜框列表' },
    ],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
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
    placeholder: '搜多镜片',
    srarchlist: ['全金属镜框', '修脸神器', '黑框眼镜', '镜片', '粉嫩镜框', '近视太阳镜'],
    selectPerson: true,
    firstPerson: '综合排序',
    selectArea: false,
    animationData: {

    },
    animationData1: {

    },
    ismodel1: true,
    isearchhistory: true,
    sortimg: '../../image/sort2.png',
    sortcode: 0,
    isscreen: true,
    sortlist: [
      {
        value: '综合排序', img: '../../image/nice-white.png'
      },
      { value: '销量排序', img: '../../image/nice-white.png' },
      { value: '好评排序', img: '../../image/nice-white.png' },
      { value: '价格降序', img: '../../image/nice-white.png' },
      { value: '价格升序', img: '../../image/nice-white.png' },
    ]
  },
  //选择列表样式
  clicksort: function () {
    if (this.data.sortimg == '../../image/sort2.png') {
      this.setData({
        sortimg: '../../image/sort1.png',
        sortcode: 1
      })
    } else {
      this.setData({
        sortimg: '../../image/sort2.png',
        sortcode: 0
      })
    }
  },
  //筛选选中
  select: function () {

  },
  //筛选
  screen: function () {
    this.setData({
      ismodel1: false,
      isscreen: false
    })
    this.animationData();
  },
  //搜索框聚焦
  searchfocus: function () {
    this.setData({
      ismodel1: false,
      isearchhistory: false,
      isscreen: true
    })
    this.animationData();
    this.animationData1();
  },
  animationData: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.opacity(1).step()
    this.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  animationData1: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.height('auto').opacity(1).step()
    this.setData({
      animationData1: animation.export()
    })
    setTimeout(function () {
      this.setData({
        animationData1: animation.export()
      })
    }.bind(this), 1000)
  },
  //动画还原
  animationDat1aback: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.opacity(0).height(0).step()
    this.setData({
      animationData1: animation.export()
    })
    setTimeout(function () {
      this.setData({
        animationData1: animation.export()
      })
    }.bind(this), 1000)
  },
  animationDataback: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.opacity(0).step()
    this.setData({
      animationData: animation.export()
    })
    this.animationData1();
    setTimeout(function () {
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
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
  //点击model1
  model1: function () {
    this.animationDataback();
    this.animationDat1aback();
  },
  //点击切换1
  mySelect: function (e) {
    console.log(e.currentTarget.dataset.me)
    var ids = e.currentTarget.dataset.ids;
    var sortlist = this.data.sortlist;
    for (var i = 0; i < sortlist.length;i++){
      if(ids==i){
        sortlist[i].img = '../../image/nice.png'
      }else{
        sortlist[i].img = '../../image/nice-white.png'
      }
    }
    this.setData({
      sortlist: sortlist,
      firstPerson: e.currentTarget.dataset.me,
      selectPerson: true,
      selectArea: false,

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
