/**
 * 加载提示
 */
var isloading = false;
var loadInt;
function showLoading(obj){
  _show(obj);
  loadInt = setInterval(function(){
    if(!isloading){
      clearInterval(loadInt);
      return;
    }
    _show(obj);
  },8000)
}

function _show(obj){
  if (typeof obj != 'object') {
    return;
  }
  if (obj.title == '') {
    return;
  }
  var default_obj = {
    title: '',
    mask: false,
    success: function () { 
      console.log('显示成功' + new Date());
    },
    fail: function () { },
    complete: function () { }
  }
  obj = Object.assign(default_obj, obj);
  if (wx.showLoading) {
    if (!isloading){
      wx.showLoading(obj);
    }
  } else {
    wx.hideToast();
    obj.icon = 'loading';
    obj.duration = 10000;
    wx.showToast(obj)
  }
  isloading = true;
}

/**
 * 关闭加载
 */
function hideLoading(){
  isloading = false;
  if(wx.hideLoading){
    wx.hideLoading();
  }else{
    wx.hideToast();
  }
}

module.exports={
  showLoading: showLoading,
  hideLoading: hideLoading
}