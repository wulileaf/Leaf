Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    titleName: '测试',
    content: '爱妃',
    sureOrfalse: [{
      text: '取消'
    }, {
      text: '确认'
    }],

    showActionsheet: false,
    groups: [{
        text: '示例菜单',
        value: 1
      },
      {
        text: '示例菜单',
        value: 2
      },
      {
        text: '负向菜单',
        type: 'warn',
        value: 3
      }
    ]

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

  // button按钮点击事件
  btnTan(res) {
    // 弹出弹出框
    var that = this;
    this.setData({
      isShow: true
    })
  },

  btnTanBottom(res){
    console.log(11)
    var that = this
    that.setData({
      showActionsheet: true
    })
  },

  // 弹出框的点击事件
  // 数据返回
  //   { "type": "buttontap", "timeStamp": 10217, "target": { "id": "", "dataset": {} }, "currentTarget": { "id": "", "dataset": {} }, "mark": {}, "detail": { "index": 1, "item": { "text": "确认", "className": "weui-dialog__btn_primary" } } }
  // bhome.js ? [sm] : 68 { "type": "buttontap", "timeStamp": 16455, "target": { "id": "", "dataset": {} }, "currentTarget": { "id": "", "dataset": {} }, "mark": {}, "detail": { "index": 0, "item": { "text": "取消", "className": "weui-dialog__btn_default" } } }
  tapDialogButton(res) {
    var that = this
    console.log(JSON.stringify(res))
    var index = res.detail.index;
    var text = res.detail.item.text
    if (index == 1) {
      console.log('点击了确定按钮')
      that.setData({
        isShow: false
      })
    } else {
      console.log('点击了取消按钮')
      that.setData({
        isShow: false
      })
    }
  },

  close: function() {
    this.setData({
      showActionsheet: false
    })
  },
  btnClick(e) {
    console.log(e)
    this.close()
  }

})