// pages/member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iSlogin:true,
    goZhuce:false,
    iSlingqu:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  goMessage:function(){
    if (this.data.iSlogin){
      wx.navigateTo({
        url:'../member-message/member-message'
      })
    }
  },
  //优惠券
  coupon:function(){
    wx.navigateTo({
      url: '../coupon/coupon',
    })
  },
  //收货服务
  afterale:function(){
    wx.navigateTo({
      url: '../afterSale/afterSale',
    })
  },
  //我的消息
  message:function(){
    wx.navigateTo({
      url: '../my-message/my-message',
    })
  },
  goZhuce:function(){
    this.setData({
      goZhuce: true
    })
  },
  claerPop:function(){
    this.setData({
      goZhuce: false,
      iSlingqu:false
    })
  },
  goLingqu:function(){
    this.setData({
      iSlingqu: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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