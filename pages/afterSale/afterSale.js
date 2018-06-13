// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notRodio: false,
    typecode:0,
    typebox:true
  },
  upImg: function () {
    wx.chooseImage({
      count: 1,
      success: function (e) {
        console.log(e)
      }
    })
  },
  //选择类型
  chosetype:function(){
    var that=this;
    that.setData({
      typebox:false
    })
  },
  //选择售后服务
  typecode: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.id)
    that.setData({
      typecode: e.currentTarget.dataset.id,
      typebox:true
    })
  },
  //售后详情
  afterdetail: function () {
    wx.navigateTo({
      url: '../afterSale-messag/afterSale-messag',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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