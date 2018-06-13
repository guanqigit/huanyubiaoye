// pages/member-message/member-message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txSrc: '/image/toux.png',
    userName: '未命名',
    iSamend: false,
    amendName: '',
    iSman: true,
    userSex: '女',
    chosSex: false,
    date: '1999-07-05',
    iSphone: false,
    city: '武汉市-汉阳区',
    chosStyle: false,
    iSinvoice: false,
    stylecode:0,
    chosestylelist: [{
      name: 'a',
      isdeft: 1
    },
    {
      name: 'b',
      isdeft: 0
    },
    {
      name: 'c',
      isdeft: 0
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goChoosTx: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (e) {
        that.setData({
          txSrc: e.tempFilePaths["0"]
        })
      }
    })
  },
  //选择凤格
  chosestyle:function(e){
    var that=this;
    var s=e.currentTarget.dataset.id;
    var stylename='';
    var chosestylelist = that.data.chosestylelist;
    for (var i = 0; i < chosestylelist.length;i++){
      if(i==s){
        chosestylelist[i].isdeft=1
      }else{
        chosestylelist[i].isdeft = 0
      }
    }
    that.setData({
      chosestylelist: chosestylelist,
      chosStyle:false,
      stylecode:s
    })
  },
  goAmend: function () {
    this.setData({
      iSamend: true
    })
  },
  claerPop: function () {
    this.setData({
      iSamend: false,
      iSphone: false,
      iSinvoice: false
    })
  },
  inputName: function (e) {
    this.setData({
      amendName: e.detail.value
    })
  },
  amendFinish: function () {
    var that = this;
    this.setData({
      userName: that.data.amendName && that.data.amendName !== " " ? that.data.amendName : that.data.userName,
      iSamend: false
    })
  },
  chosSex: function () {
    this.setData({
      chosSex: true
    })
  },
  chosWoman: function () {
    this.setData({
      chosSex: false,
      iSman: true,
      userSex: '女'
    })
  },
  chosman: function () {
    this.setData({
      chosSex: false,
      iSman: false,
      userSex: '男'
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  goPhone: function () {
    this.setData({
      iSphone: true
    })
  },
  cityChange: function (e) {
    this.setData({
      city: e.detail.value.join("-")
    })
  },
  changeStyle: function () {
    this.setData({
      chosStyle: true
    })
  },
  goInvoice: function () {
    this.setData({
      iSinvoice: true
    })
  },
  goSite: function () {
    wx.navigateTo({
      url: '/pages/stie-manage/stie-manage'
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