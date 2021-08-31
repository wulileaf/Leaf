var tools = require('../../../utils/tools.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 弹出框
    isShow: false,
    titleName: '测试',
    content: '爱妃',
    sureOrfalse: [{
      text: '取消'
    }, {
      text: '确认'
    }],

    // 底部弹出框
    showActionsheet: false,
    actions: [{
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
    ],

    // Checkbox-group和Checkbox
    radioItems: [{
        name: 'cell standard',
        value: '0',
        checked: true
      },
      {
        name: 'cell standard',
        value: '1'
      }
    ],
    checkboxItems: [{
        name: 'standard is dealt for u.',
        value: '0',
        checked: true
      },
      {
        name: 'standard is dealicient for u.',
        value: '1'
      }
    ],


    // Gallery画廊
    // 用于多张图片展示，类似原生的wx.previewImage的展示。
    imgUrls: [
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
      'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg'
    ],
    isShowGallery: false,
    isHideOnClick: true,

    // 半屏幕弹框
    show: false,
    buttons: [{
        type: 'default',
        className: '',
        text: '辅助操作',
        value: 0
      },
      {
        type: 'primary',
        className: '',
        text: '主操作',
        value: 1
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

  // 弹出框的点击事件--------

  // button按钮点击事件
  // 测试结果OK
  btnTan(res) {
    // 弹出弹出框
    var that = this;
    this.setData({
      isShow: true
    })
  },

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
      tools.Toast('点击了确定', 'none')
    } else {
      console.log('点击了取消按钮')
      that.setData({
        isShow: false
      })
      tools.Toast('点击了取消', 'none')
    }
  },
  // 弹出框的点击事件--------

  //底部弹出框--------------

  // 弹出底部弹出框
  // 测试结果OK
  btnTanBottom(res) {
    var that = this
    that.setData({
      showActionsheet: true
    })
  },

  close: function() {
    this.setData({
      showActionsheet: false
    })
  },

  //   111----------{ "type": "actiontap", "timeStamp": 12393, "target": { "id": "", "dataset": {} }, "currentTarget": { "id": "", "dataset": {} }, "mark": {}, "detail": { "value": 1, "groupindex": 0, "index": 0 } }
  // animation.js ? [sm] : 148 111----------{ "type": "actiontap", "timeStamp": 15008, "target": { "id": "", "dataset": {} }, "currentTarget": { "id": "", "dataset": {} }, "mark": {}, "detail": { "value": 2, "groupindex": 0, "index": 1 } }
  // animation.js ? [sm] : 148 111----------{ "type": "actiontap", "timeStamp": 19079, "target": { "id": "", "dataset": {} }, "currentTarget": { "id": "", "dataset": {} }, "mark": {}, "detail": { "value": 3, "groupindex": 0, "index": 2 } }
  tapCtionSheet(res) {
    console.log("111----------" + JSON.stringify(res))
    this.close()
  },
  //底部弹出框--------------

  // Checkbox-group和Checkbox----------------------------
  // 测试OK
  radioChange: function(e) {
    console.log(JSON.stringify(e))
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      // 这句话的意思是
      // 如果radioItems[i].checked为真，那么
      // console.log("-----" + radioItems[i].checked)
      console.log(radioItems[i].checked = radioItems[i].value == e.detail.value); // 这样返回的值false/true
      console.log(radioItems[i].value == e.detail.value); // 这个的返回值是false/true
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }
    console.log(JSON.stringify(this.data.radioItems))
    this.setData({
      radioItems: radioItems,
      ['formData.radio']: e.detail.value
    });
  },


  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.checkboxItems,
      values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }
    this.setData({
      checkboxItems: checkboxItems,
      [`formData.checkbox`]: e.detail.value
    });
  },
  // Checkbox-group和Checkbox----------------------------


  // Gallery画廊------------------------------
  // 开启画廊
  btnGallery(res) {
    // var grallyUrl = '/pages/functionList/gallery/gallery'
    // tools.NavigateTo(grallyUrl)
    this.setData({
      isShowGallery: true
    })
    console.log(this.data.isShowGallery)
  },

  // 关闭画廊
  // bindPhoto() {
  //   console.log("change")
  //   this.setData({
  //     isHideOnClick: true
  //   })
  // },

  // Gallery画廊------------------------------

  // 半屏幕弹框-------------------------------

  open: function() {
    this.setData({
      show: true
    })
  },

  buttontap(e) {
    console.log(JSON.stringify(e))
    console.log("点击了辅助操作按钮" + e.detail)
  },

  // 半屏幕弹框-----------------------------
})