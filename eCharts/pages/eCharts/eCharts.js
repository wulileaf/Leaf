// eCharts/pages/eCharts/eCharts.js

var tool = require('../../../utils/tools.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    charts: [{
      id: 'bar',
      name: '柱状图'
    }, {
      id: 'scatter',
      name: '散点图'
    }, {
      id: 'pie',
      name: '饼图'
    }, {
      id: 'line',
      name: '折线图'
    }, {
      id: 'funnel',
      name: '漏斗图'
    }, {
      id: 'gauge',
      name: '仪表盘'
    }, {
      id: 'k',
      name: 'K 线图'
    }, {
      id: 'radar',
      name: '雷达图'
    }, {
      id: 'heatmap',
      name: '热力图'
    }, {
      id: 'tree',
      name: '树图'
    }, {
      id: 'treemap',
      name: '矩形树图'
    }, {
      id: 'sunburst',
      name: '旭日图'
    }, {
      id: 'map',
      name: '地图'
    }, {
      id: 'graph',
      name: '关系图'
    }, {
      id: 'boxplot',
      name: '箱型图'
    }, {
      id: 'parallel',
      name: '平行坐标图'
    }, {
      id: 'sankey',
      name: '桑基图'
    }, {
      id: 'themeRiver',
      name: '主题河流图'
    }],
    chartsWithoutImg: [{
      id: 'lazyLoad',
      name: '延迟加载图表'
    }, {
      id: 'multiCharts',
      name: '一个页面中多个图表'
    }, {
      id: 'move',
      name: '页面不阻塞滚动'
    }, {
      id: 'saveCanvas',
      name: '保存 Canvas 到本地文件'
    }]
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

  // 点击跳转到其他地方
  checkYou(res) {
    console.log(JSON.stringify(res))

    tool.NavigateTo('/eCharts/pages/' + this.data.charts[res.target.dataset.index].id + '/index?titleName=' + this.data.charts[res.target.dataset.index].name)
  }
})