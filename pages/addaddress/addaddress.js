var tcity = require("../../utils/citys.js");
var app = getApp();
Page({
  data: {
    switch1Checked: true,
    nowAddress:{},
    provinces: [],
    province: "请选择收货地区",
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    addressArea: "",
    addType: 0,
    updateType: 0,
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  //地区层数据变化
  bindChange: function (e) {
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;
    if (val[0] != t[0]) {
      const citys = [];
      const countys = [];
      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }
      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys: citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })
      return;
    }
    if (val[1] != t[1]) {
      const countys = [];
      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }
      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }
  },
  //地区获取焦点,弹出选择层
  openCityPicker: function (e) {
    this.setData({
      condition: !this.data.condition
    })
  },
  switch1Change: function (e) {
    this.data.switch1Checked = e.detail.value;
  },
  //添加地址,提交数据
  formBindsubmit: function (e) {
    var that = this;
    var username = e.detail.value.username;
    var phone = e.detail.value.phone;
    var city = e.detail.value.city;
    var address = e.detail.value.address;
    var switch1Checked = that.data.switch1Checked;
    var aid = 0;
    var defult = switch1Checked ? 1 : 0;
    var updateType = that.data.updateType;
    console.log(updateType);
    //先判断是否为空,在验证手机号
    if ((username.length > 0) && (phone.length > 0) && (city.length > 0) && (address.length > 0)) {
      if (!(/^1[34578]\d{9}$/.test(phone))) {
        wx.showModal({
          title: "提示",
          content: "请输入正确的手机号码！",
          showCancel: false,
          confirmText: "确定"
        })
      } else {
        
        wx.request({
          url: app.globalData.apiUrl.AddEditAddressApi,
          data: {
            aid: aid,
            defult: defult,
            name: username,
            area: city,
            phone: phone,
            address: address,
            entid: 368,
            openid: app.globalData.openid
          },
          method: 'POST',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: function (res) {
            if (res.data.code == 0)
              wx.showToast({
                title: "保存成功",
                icon: 'success',
                duration: 2000
              })
            if (updateType == 1) {
              wx.redirectTo({
                url: '../manaddress/manaddress',
              })
            } else {
              that.data.nowAddress.name = username;
              that.data.nowAddress.phone = phone;
              that.data.nowAddress.city = city;
              that.data.nowAddress.address =city+" "+address;
              wx.setStorage({
                key: "addressdata",
                data: that.data.nowAddress,
                success: function () {
                  wx.navigateBack({
                    delta: 2
                  })
                }
              })
            }
            wx.showToast({
              title: "保存失败",
              icon: 'success',
              duration: 2000
            })
          },
          fail: function () {
            wx.showToast({
              title: "保存中...",
              icon: 'loading',
              duration: 10000
            })
          },
          complete: function () {
            wx.hideToast();
          }
        })
      }

    } else {
      wx.showModal({
        title: "提示",
        content: "请检查信息是否输入完整！",
        showCancel: false,
        confirmText: "确定"
      })
    }

  },
  //页面渲染前,准备好省市区信息
  onReady: function (options) {
    var that = this;

    tcity.init(that);

    var cityData = that.data.cityData;


    const provinces = [];
    const citys = [];
    const countys = [];

    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }

    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      'province': that.data.province,
      'city': that.data.city,
      'county': that.data.county
    })
  },
  onLoad: function (e) {
    var that = this;
    that.setData({
      'addType': e.addType,
      'updateType': e.updateType
    })
  }
})