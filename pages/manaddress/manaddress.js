var app = getApp();
Page({
  data: {
    list: [],
    addlist: [],
    addresslength: 0,
    updateType: 0
  },
  //添加一个新地址
  goAddAddress: function () {
    var that = this;
    var updateType = that.data.updateType;
    console.log(updateType);
    wx.navigateTo({
      url: '../addaddress/addaddress?addType=2&updateType=' + updateType,
    })
  },
  //点击默认
  bindcheckbox: function (e) {
    var ind = e.currentTarget.dataset.ind;  //获取点击默认的下标
    var checks = this.data.list[ind].checkboxs;
    var aid = this.data.list[ind].aid;
    this.data.list[ind].checkboxs = !checks;
    var that = this;
    this.setData({
      list: this.data.list,
    })
    wx.request({
      url: 'https://pay.51byod.cn/TestPayWeiXinMobile/WechatApplet/AppletAddress/SetDefault',
      data: {
        entid: 368,
        openid: app.globalData.openid,
        aid: aid
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        // success
        if (res.data.code == 0) {
          that.loaddata();
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  //编辑
  toedit: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.indx;
    var editdatas = that.data.list[id];
    var editdata = JSON.stringify(editdatas);
    wx.redirectTo({
      url: '../editaddress/editaddress?todata=' + editdata,
      success: function (res) {
        that.loaddata();
      },
      fail: function () {
        wx.showToast({
          title: "加载中...",
          icon: 'loading',
          duration: 10000
        })
      },
      complete: function () {
        wx.hideToast();
      }
    })
  },
  //删除
  bindtapdelete: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.idx;
    var aid = that.data.list[id].aid;
    wx.showModal({
      // title: '提示',
      content: '确认删除这条地址吗',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: app.globalData.apiUrl.AppletRemoveAddressApi,
            data: {
              entid: 368,
              openid: app.globalData.openid,
              aid: aid
            },
            method: "POST",
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
              that.loaddata();
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })

  },
  //从购物车过来的请求
  backpage: function (e) {
    var that = this;
    var updateType = that.data.updateType;
    if (updateType == 2) {
      var ind = e.currentTarget.dataset.aindex;
      var addressData = that.data.list[ind];
      wx.setStorage({
        key: "addressdata",
        data: addressData,
        success: function () {
          wx.navigateBack({
          })
        }
      })
    }
  },
  //获取地址列表
  // loaddata: function () {
  //   var that = this;
  //   wx.request({
  //     url: app.globalData.apiUrl.AppletAddressListApi,
  //     data: {
  //       entid: 368,
  //       openid: app.globalData.openid,
  //       pageindex: 0,
  //       // pagesize:10
  //     },
  //     method: 'POST',
  //     header: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     success: function (res) {
  //       if (res.data.code == 0) {
  //         // wx.showToast({
  //         //   title: "删除成功",
  //         //   icon: 'success',
  //         //   duration: 2000
  //         // })
  //         var data = res.data.data.oderlist;
  //         var exphone = [];
  //         if (typeof (res.data.data.oderlist) != 'undefined') {
  //           for (var i = 0; i < data.length; i++) {
  //             exphone[i] = data[i].phone.replace(/(.{3}).*(.{4})/, "$1****$2");
  //             data[i].misphone = exphone[i];
  //             if (data[i].defult == 1) {
  //               data[i].checkboxs = true;
  //             } else {
  //               data[i].checkboxs = false;
  //             }
  //           }
  //           that.setData({
  //             list: [
  //               { name: '犬瘟热', misphone:'122412534342'}
  //             ]//res.data.data.oderlist,
  //           })
  //           console.log(res.data.data.oderlist);
  //         } else {
  //           that.setData({
  //             list: [],
  //           })
  //         }
  //       }
  //     },
  //     fail: function () {
  //       wx.showToast({
  //         title: "加载失败",
  //         icon: 'success',
  //         duration: 2000
  //       })
  //     },
  //     complete: function () {
  //       wx.hideToast();
  //     }
  //   })
  // },
  //初始化
  onLoad: function (e) {
    var that = this;
    var updateType = e.updateType;
    // console.log(e.updateType);
    that.setData({
      'updateType': e.updateType,
      list: [
        { name: '犬瘟热', misphone: '122412534342', address: '开始觉得好疯狂可是大家看法', checkboxs:true},
        { name: '犬瘟热', misphone: '122412534342', address: '开始觉得好疯狂可是大家看法' },
        { name: '犬瘟热', misphone: '122412534342', address: '开始觉得好疯狂可是大家看法' },
        { name: '犬瘟热', misphone: '122412534342', address:'开始觉得好疯狂可是大家看法'},
      ]//res.data.data.oderlist,
    })
    that.loaddata();
  }
})