var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../utils/api.js');
Page({
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navtype: 1,
    ismodel:true,
    page:0,
    scrollTop: 0,
    isbottom:0,
  },
  //进入详情
  detail: function () {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  //镜片详情
  lensdetail: function () {
    wx.navigateTo({
      url: '../detaillens/detaillens',
    })
  },
  //进入搜索页
  searchpage: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  //切换列表
  navtab: function (e) {
    var that = this;
    if (e.currentTarget.dataset.nav == 1) {
      that.setData({
        navtype: 1,
        isbottom:0,
        isbottom: 0,
      })
      that.getNewFrameProductList();
    } else {
      that.setData({
        navtype: 2,
        scrollTop: 0,
        isbottom: 0,
      })
    }
  },
  //跳转数据标定
  demarcateddata: function () {
    wx.navigateTo({
      url: '../calibration/calibration',
    })
  },
  //获取用户信息
  onGotUserInfo: function (e) {
    var that = this;
    var data=JSON.parse(e.detail.rawData)
    if (e.detail.errMsg == 'getUserInfo:ok') {
      var postdata={
        openid: app.globalData.openid ,
        nickName: data.nickName,
        gender: data.gender,
        avatarUrl: data.avatarUrl,
        country: data.country,
        province: data.province,
        city: data.city,
        language: data.language,

      }
      util.post(api.saveCustomerInfo, postdata, function (res) {
console.log(res)
      }, function () {

      })
      that.setData({
        ismodel: true
      })
    }
  },
  //监听页面滚动
  onPageScroll: function (e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  //返回顶部
  totop:function(){
    var that=this;
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    var that = this;

  },
  onLoad: function () {
    var that = this;
    util.post(api.getHomeBanner, '', function (res) {
       that.setData({
         imglist: res.homeBannerList,

         })
     }, function () {

     })
     setTimeout(function(){
       console.log(app.globalData.openid)
       util.post(api.getCustomerInfo, { openid: app.globalData.openid }, function (res) {
         console.log(console.log(app.globalData.userinfo))
         if (res.customerInfo!==null){
           app.globalData.userinfo = res.customerInfo
           if (res.customerInfo.faceWidth == null && res.customerInfo.faceLenth == null){
             that.setData({
               ismodel: true,
               isdata:1
             })
           }else{
             if (res.customerInfo.faceWidth != null){
               that.setData({
                 ismodel: true,
                 isdata: 0,
                 Widthdata: res.customerInfo.faceWidth
               })
             }else{
               that.setData({
                 ismodel: true,
                 isdata: 0,
                 Widthdata: res.customerInfo.faceLenth
               })
             }
             
           }
           that.setData({
             ismodel:true
           })
         }else{
           that.setData({
             ismodel: false
           })
         }
         
       }, function () {

       })
     },1000)
    util.post(api.getArticleInfoList, '', function (res) {
      console.log(res.homeBannerList)
      that.setData({
        Articlelist: res.articleInfoList
      })
    }, function () {

    })
    that.getNewFrameProductList();
    that.getSpecialLensProductList();
    
  },
//获取最新镜架
  getNewFrameProductList:function(){
    var that=this;
    var producFrametList=[];
    util.post(api.getNewFrameProductList, { page: that.data.page, rowNum: 20 }, function (res) {
      if(that.data.page==0){
        producFrametList = res.productFrameSpus
      }else{
        producFrametList = that.data.producFrametList;
        for (var i = 0; i < res.productFrameSpus.length;i++){
          producFrametList.push(res.productFrameSpus[i])
        }
        console.log(typeof res.productFrameSpus, res.productFrameSpus)
        if (res.productFrameSpus.length==0){
          that.setData({
            isbottom:1
          })
        }
      }
      that.setData({
        producFrametList: producFrametList
      })
    }, function () {

    })
  },
  //获取特价镜片
  getSpecialLensProductList: function () {
    var that = this;
    var getSpecialLensProductList = [];
    util.post(api.getSpecialLensProductList, { page: that.data.page, rowNum: 20 }, function (res) {
      if (that.data.page == 0) {
        getSpecialLensProductList = res.productLensSpus
      } else {
        getSpecialLensProductList = that.data.getSpecialLensProductList;
        for (var i = 0; i < res.productLensSpus.length; i++) {
          getSpecialLensProductList.push(res.productLensSpus[i])
        }
        if (res.productLensSpus.length == 0) {
          that.setData({
            isbottom: 1
          })
        }
      }
      that.setData({
        getSpecialLensProductList: getSpecialLensProductList
      })
    }, function () {

    })
  },
  onReachBottom:function(){
    var that=this;
    that.setData({
      page:that.data.page+1
    })
    that.getNewFrameProductList();
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
