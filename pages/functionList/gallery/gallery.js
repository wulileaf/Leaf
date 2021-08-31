var tools = require('../../../utils/tools.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips: '请稍后',
    show: true,
    animated: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // sort排序问题
    var data = [{
      "distance": "2.16"
    }, {
      "distance": "2.43"
    }, {
      "distance": "2.1"
    }, {
      "distance": "1.16"
    }, {
      "distance": "100.16"
    }, {
      "distance": "20.16"
    }]
    console.log("正常的sort方法" + data.sort());
    console.log("自定义的sort方法" + data.sort(function(a, b) {
      return a.distance - b.distance;
    }))
    console.log(JSON.stringify(data))

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
    this.timer = setInterval(() => {
      this.setData({
        show: !this.data.show
      })
    }, 2000)
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
    // 在卸载页面的时候关闭这个定时器
    clearInterval(this.timer)
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

  // 隐藏掉画廊
  hideOnClick() {
    wx.navigateBack({
      delta: 1
    })
  },
  
})