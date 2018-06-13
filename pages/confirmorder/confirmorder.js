var app = getApp();
Page({
  data: {
    shoppingdata: [],
    datas: [],
    sumnumber: 0,
    trade: ''
  },
  //当没有收货地址的时候,跳转到添加页面
  addaddress: function () {
    wx.navigateTo({
      url: '../addaddress/addaddress?addType=1',
    })
  },
  //停止下拉刷新
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  //去支付
  gopay:function(){
    wx.navigateTo({
      url: '../orderpayment/orderpayment'
    })
  },
  //在确认订单页面,修改收货地址
  updateAddress: function () {
    // console.log("sd");
    wx.navigateTo({
      url: '../manaddress/manaddress?updateType=2'
    })
  },
  //点击支付
  payment: function () {
    var that = this;
    var postdata = [];
    for (var i = 0; i < that.data.shoppingdata.length; i++) {
      console.info(that.data.shoppingdata[i].carid)
      postdata.push({ carid: that.data.shoppingdata[i].carid, number: that.data.shoppingdata[i].ProductNum });
    }
    console.info(that.data.datas)
    if ((that.data.datas.name == '' || that.data.datas.name == null) && (that.data.datas.address == null || that.data.datas.address == '')) {
      wx.showToast({
        title: "收货地址为空",
        icon: 'success',
        duration: 2000
      })
    }
    else {
      wx.request({
        url: app.globalData.apiUrl.paymentbtnApi,
        data: {
          addressID: that.data.datas.aid,
          carid: JSON.stringify(postdata),
          openid: app.globalData.openid,
          entid: 368,
        },
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.info(res)
          var data = res.data.data;
          console.info(res.data, data, data.trade_no);
          that.data.trade = data.trade_no;
          wx.requestPayment({
            "appId": "wx51229fd9773f80a0",
            "timeStamp": data.timeStamp,
            "nonceStr": data.nonceStr,
            "package": data.package,
            "signType": "MD5",
            "paySign": data.paySign,
            "success": function (res) {
              console.info(that.data.trade, res)
              var wradid = that.data.trade;
              wx.showToast({
                title: "支付成功",
                icon: 'success',
                duration: 2000
              })
              wx.navigateTo({
                url: '../paymentsuccess/paymentsuccess?wraid=' + wradid,
              })
            },
            "fail": function (res) {
              wx.showToast({
                title: "支付失败",
                icon: 'success',
                duration: 2000
              })
            }
          })
        },
        fail: function () {
          wx.showToast({
            title: "支付失败",
            icon: 'success',
            duration: 2000
          })
        },
        complete: function () {
          wx.hideToast();
        }
      })
    }
  },
  //获取去下单页面
  onLoad: function (options) {
    var that = this;
    var shoppingdata = {
      name: '小明',
      phone: '13241242342',
      address: '回复啦婚纱礼服金黄色的理解'
    };
    that.setData({
      datas: shoppingdata,
    });
  },
  //
  onShow: function () {
    var nowaddress = wx.getStorageSync("addressdata");
    if (nowaddress != '') {
      this.setData({
        datas: nowaddress
      });
    }
  }
})

