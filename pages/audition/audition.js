var app = getApp();
var util = require('../../utils/util.js');
var api = require('../../utils/api.js');
Page({
  data: {
    tryicon: '../../image/footprint-ac.png',
    goodsinfo: {
      name: 'SUOFEIA-3267-C115',
      issh: '宽出',
      pic: '50',
      yhpic: '20',
      class: [{
        color: '琥珀色'
      },
      {
        color: '自然棕'
      },
      {
        color: '透明灰'
      },
      {
        color: '天使蓝'
      },
      {
        color: '天使蓝'
      }],
    },
    sjcstate: -1,
    classstate: 0,
    auditionstate: 0,
    cupboardcode: 0,
    cupboard: 0,
    tabinfo: {
      txt: '加入试镜橱'
    },
    auditionrecordstoy: [
      { id: 0, img: '../../image/routineicon.png', isadd: 0 },
      { id: 1, img: '../../image/routineicon.png', isadd: 0 },
      { id: 2, img: '../../image/routineicon.png', isadd: 0 },
      { id: 3, img: '../../image/routineicon.png', isadd: 0 },
      { id: 4, img: '../../image/routineicon.png', isadd: 0 },
      { id: 5, img: '../../image/routineicon.png', isadd: 0 },
      { id: 6, img: '../../image/routineicon.png', isadd: 0 },
      { id: 7, img: '../../image/routineicon.png', isadd: 0 }
    ],
    auditioncupboard: [
      { id: 8, img: '../../image/auditionbg.png', isadd: 0 },
      { id: 9, img: '../../image/auditionbg.png', isadd: 0 },
      { id: 10, img: '../../image/auditionbg.png', isadd: 0 },
      { id: 11, img: '../../image/auditionbg.png', isadd: 0 }
    ],
    animationData2: {},
    animationData1: {},
    animationData: {},
    lock: false,
    mainheight: '462rpx',
    toview: '',
  },
  //选择颜色
  calssstate: function (e) {
    var that = this;
    that.setData({
      classstate: e.currentTarget.dataset.id
    })
  },
  //选择眼镜
  choseglasses: function (e) {
    var that = this;
    that.setData({
      glassesindex: e.currentTarget.dataset.ids
    })
  },
  //选择试镜内记录
  auditionstate: function (e) {
    var that = this;
    that.setData({
      auditionstate: e.currentTarget.dataset.id,
      toview: 'toview' + e.currentTarget.dataset.id,
    })
  },
  //选择试镜橱
  sjcstate: function (e) {
    var that = this;
    that.setData({
      sjcstate: e.currentTarget.dataset.id,
    })
  },
  //试镜橱
  cupboard: function () {
    var that = this;
    if (that.data.cupboardcode == 0) {
      that.setData({
        tryicon: '../../image/footprint.png',
      })
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      that.animation = animation
      animation.right('0').step()
      that.setData({
        animationData: animation.export()
      })
      setTimeout(function () {
        that.setData({
          animationData: animation.export(),
          cupboardcode: 1,
        })
      }.bind(that), 1000)
    } else {
      that.setData({
        tryicon: '../../image/footprint-ac.png',
      })
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })
      that.animation = animation
      animation.right('-79%').step()
      that.setData({
        animationData: animation.export()
      })
      setTimeout(function () {
        that.setData({
          animationData: animation.export(),
          cupboardcode: 0,
          tabinfo: {
            txt: '加入试镜橱',
          },
        })
      }.bind(that), 1000)
    }

  },
  //加入or移出试镜橱
  addcupboard: function () {
    var that = this;
    var list = that.data.auditioncupboard;//试镜橱
    var data = that.data.auditionrecordstoy;//试戴历史
    console.log(that.data.sjcstate)
    if (that.data.cupboardcode == 0) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].id == data[that.data.auditionstate].id) {
          wx.showToast({
            title: '请勿重复添加',
            
          })
          return;
        }
      }
      list.unshift(data[that.data.auditionstate]);
      data[that.data.auditionstate].isadd = 1;
      console.log(list, data)
      that.setData({
        tabinfo: {
          txt: '移出试镜橱',
        },
        auditioncupboard: list,
        sjcstate: 0,
        sjctoview: 'toview' + 0,
        auditionrecordstoy: data
      })
      that.cupboard();
    } else {
      if (that.data.sjcstate != -1) {
        list.splice(that.data.sjcstate, 1);
        data[that.data.auditionstate].isadd = 1;
        console.log(list, data)
        that.setData({
          tabinfo: {
            txt: '移出试镜橱',
          },
          auditioncupboard: list,
          sjcstate: -1,
          auditionrecordstoy: data
        })
      }
    }

  },
  //选择照片或拍照
  chosephoto: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
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
  // share:function(){
  //   wx.showShareMenu({
  //     withShareTicket: true
  //   })
  // }
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
