// pages/functionList/loop/loop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemData: [{
      name: "门店1"
    }, {
      name: "门店2"
    }, {
      name: "门店3"
    }, {
      name: "门店4"
    }, {
      name: "门店5"
    }, {
      name: "门店6"
    }, {
      name: "门店7"
    }, ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  bindItem(res) {
    console.log(JSON.stringify(res))
  }
})