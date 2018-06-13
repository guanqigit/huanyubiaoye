
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../image/marker.png",
      id: 0,
      latitude: 29.62124,
      longitude: 106.491337,
      width: 35,
      height: 45
    },
      {
        iconPath: "../../image/maeker1.png",
        id: 1,
        latitude: 29.62524,
        longitude: 106.491337,
        width: 35,
        height: 45
      }],
    controls: [{
      id: 1,
      iconPath: '../../image/marker0.png',
      position: {
        left: 300,
        top: 400,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
//监听视野变化
  bindregionchange:function(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that=this;
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
        that.mapCtx = wx.createMapContext('myMap');
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
