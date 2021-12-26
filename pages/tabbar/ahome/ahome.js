var tools = require('../../../utils/tools.js')
var pageUrl = require('../../../utils/pageUrl.js')
var animation = "pages/functionList/animation/animation"

import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
      name: '业务指标',
      type: 'gauge',
      detail: {
        formatter: '{value}%'
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 30,
          shadowBlur: 0,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      data: [{
        value: 40,
        name: '完成率',
      }]

    }]
  };

  chart.setOption(option, true);

  return chart;
}

Page({


  // {
  //   "code": 200,
  //   "msg": "获取成功",
  //   "data": {
  //     "programmeId": 1,
  // "programmeImage": [
  //   "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg",
  //   "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069583&di=c5cd4bf5c939be2139da029faf5b7db6&imgtype=0&src=http%3A%2F%2Fhuafans.dbankcloud.com%2Fpic%2F2017%2F11%2F09%2F5e73598b6db356c260d5093de507ae75_IMG_20171109_075558.jpg%3Fmode%3Ddownload"
  // ],
  //     "programmeIndex": 1,
  //     "programmeName": "韭菜",
  //     "programmeSeason": "春季、夏季、秋季",
  //     "programmeTime": "20-50天",
  //     "programmeMode": "苗栽",
  //     "programmeErection": "不需要",
  //     "programmeDescribe": "暂无",
  //     "programmeState": 1,
  //     "createTime": "19-11-17 上午11:34",
  //     "createUpdataTime": "19-11-17 上午11:34"
  //   }
  // }

  // {
  //   icon: '/images/p1.jpg',
  //   text: '新人福利专享,全场5折起,快来抢购吧！',
  //   price: '12'
  // }, {
  //   icon: '/images/p2.jpg',
  //   text: '【甄好曲奇饼干】买一送一不容错过!',
  //   price: '56'
  // }, {
  //   icon: '/images/p3.jpg',
  //   text: '【甄好曲奇饼干】全场5折起！',
  //   price: '67'
  // }, {
  //   icon: '/images/p4.jpg',
  //   text: '【甄好曲奇饼干】买一送一不容错过!',
  //   price: '70'
  // }, {
  //   icon: '/images/p5.jpg',
  //   text: '【甄好曲奇饼干】精品礼盒',
  //   price: '120'
  // }, {
  //   icon: '/images/p6.jpg',
  //   text: '薯片还是上好佳',
  //   price: '45'
  // }, {
  //   icon: '/images/p7.jpg',
  //   text: '',
  //   price: '58'
  // }, {
  //   icon: '/images/p8.jpg',
  //   text: '大波浪薯片',
  //   price: '90'
  // }


  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
    tabTitle: "数据分析",
    imageUrl: "componentBg.png",
    // https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640
    imagesurl: [
      'https://t7.baidu.com/it/u=631924955,996383527&fm=193&f=GIF',
      'https://t7.baidu.com/it/u=3399334306,3391085092&fm=193&f=GIF',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fdc%2Fd2%2Fe3%2Fdcd2e350f4fcae5d336b04756417c6dd.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634955691&t=a4e8e1df8c9cd0da7e283dea491a5a12'
    ],
    current: '0',
    funct: [{
      "icon": "icon-zhuangzhang",
      "name": "WeUi", // 动画
      "color": "1296db"
    }, {
      "icon": "icon-youxi",
      "name": "加载", // 游戏
      "color": "E3973F"
    }, {
      "icon": "icon-haikuang",
      "name": "eCharts",
      "color": "40AF6C"
    }, {
      "icon": "icon-meiqi",
      "name": "商城组件",
      "color": "1296db"
    }, {
      "icon": "icon-huafeizhongzhi",
      "name": "话费",
      "color": "1296db"
    }, {
      "icon": "icon-feixing",
      "name": "出行",
      "color": "DE6868"
    }, {
      "icon": "icon-duihuang",
      "name": "兑换",
      "color": "DE6868"
    }, {
      "icon": "icon-dianyingpiao",
      "name": "电影票",
      "color": "40AF6C"
    }, {
      "icon": "icon-dazhongdianping",
      "name": "大众点评",
      "color": "DE6868"
    }, {
      "icon": "icon-jiayouzhang",
      "name": "加油卡",
      "color": "E3973F"
    }],
    pingou: [{
      "programmeId": 1,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069583&di=c5cd4bf5c939be2139da029faf5b7db6&imgtype=0&src=http%3A%2F%2Fhuafans.dbankcloud.com%2Fpic%2F2017%2F11%2F09%2F5e73598b6db356c260d5093de507ae75_IMG_20171109_075558.jpg%3Fmode%3Ddownload"],
      "programmeName": "韭菜"
    }, {
      "programmeId": 2,
      "programmeImage": ["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2615645149,859447379&fm=26&gp=0.jpg"],
      "programmeName": "大叶菠菜"
    }, {
      "programmeId": 3,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971527647&di=551566c45f7300d2d777740aee67f99e&imgtype=0&src=http%3A%2F%2Fpic70.nipic.com%2Ffile%2F20150628%2F20578453_004635190000_2.jpg"],
      "programmeName": "小香葱"
    }, {
      "programmeId": 4,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971569682&di=3f9ccb1c55bcdc647f3c8fa8dd890434&imgtype=0&src=http%3A%2F%2Fimages.zon100.com%2Fimg%2F10001284%2F1100155314%2F1100208411_1000.jpg"],
      "programmeName": "生菜"
    }, {
      "programmeId": 5,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971601472&di=69609d188237fd91f20d44b9a9482eda&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F22%2F08%2F16pic_2208648_b.jpg"],
      "programmeName": "油菜"
    }, {
      "programmeId": 6,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971633385&di=12bf23a17257c69b65b70a0fe3d57dbf&imgtype=0&src=http%3A%2F%2Fsh.sinaimg.cn%2F2015%2F0506%2FU10201P18DT20150506172427.jpg"],
      "programmeName": "尖辣椒"
    }, {
      "programmeId": 7,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971678420&di=1ff9e74800a43e066028f3cba6298377&imgtype=0&src=http%3A%2F%2Fstatic.chinacaipu.com%2Fd%2Ffile%2Fmenu%2Fjiankangyinshi%2F2016-04-19%2F934514d3e97a91c2bd75360d051e0900.jpg"],
      "programmeName": "西红柿"
    }, {
      "programmeId": 8,
      "programmeImage": ["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg"],
      "programmeName": "冬瓜"
    }],
    cainixihuan: [{
      "name": "2019款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p1.jpg",
      "store": "自营",
      "price": "2600",
      "appraise": "2.6"
    }, {
      "name": "Apple XS Max", // 2018款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色
      "img": "/images/p2.jpg",
      "store": "自营",
      "price": "6499",
      "appraise": "0.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p3.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2019款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p1.jpg",
      "store": "自营",
      "price": "2600",
      "appraise": "2.6"
    }, {
      "name": "Apple XS Max", // 2018款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色
      "img": "/images/p2.jpg",
      "store": "自营",
      "price": "6499",
      "appraise": "0.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p3.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2019款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p1.jpg",
      "store": "自营",
      "price": "2600",
      "appraise": "2.6"
    }, {
      "name": "Apple XS Max", // 2018款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色
      "img": "/images/p2.jpg",
      "store": "自营",
      "price": "6499",
      "appraise": "0.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p3.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2019款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p1.jpg",
      "store": "自营",
      "price": "2600",
      "appraise": "2.6"
    }, {
      "name": "Apple XS Max", // 2018款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色
      "img": "/images/p2.jpg",
      "store": "自营",
      "price": "6499",
      "appraise": "0.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p3.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }],
    screenHeight: 0, // 获取的高度默认为0
    iconHeight: '', // 下降的高度默认为空
    // isture: 0,// 
    showBottom: true, // 底部的显示
    goTop: true, // 显示返回页面顶部按钮
    moreData: [{
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p4.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p5.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p6.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }],
    // programmeImage: [
    //   "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg",
    //   "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069583&di=c5cd4bf5c939be2139da029faf5b7db6&imgtype=0&src=http%3A%2F%2Fhuafans.dbankcloud.com%2Fpic%2F2017%2F11%2F09%2F5e73598b6db356c260d5093de507ae75_IMG_20171109_075558.jpg%3Fmode%3Ddownload"
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this
    // 获取用户手机高度
    wx.getSystemInfo({
      success: function (res) {
        // console.log("-----" + res.windowHeight + "------" + res.screenHeight)
        that.setData({
          screenHeight: res.screenHeight
        })
      },
      fail: function (res) { },
      complete: function (res) { },
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
    var that = this
    // console.log("onReachBottom方法-----------------")
    tools.Toast("onReachBottom方法", "none")
    // var that = this
    // that.setData({
    //   isture: 1
    // })

    tools.Dialog("正在加载更多数据...");
    // 接口或者本地加载
    // 1，有数据就直接合并到助数组里面显示
    // 2，没有数据就直接显示底部我也是有底线的提示框
    that.setData({
      showBottom: false
    })
    wx.hideLoading();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 动画等功能的点击事件
  check(res) {
    var that = this
    // console.log(res.currentTarget.dataset.index)
    that.functionList(res.currentTarget.dataset.index);
  },

  // 点击事件响应功能列表
  functionList(index) {
    switch (index) {
      case 0:
        tools.NavigateTo(pageUrl.Animation)
        break;
      case 1:
        tools.NavigateTo(pageUrl.Gallery)
        break;
      case 2:
        tools.NavigateTo(pageUrl.Echarts)
        break;
      case 3:
        tools.NavigateTo(pageUrl.MallComponent)
        break
      case 4:
        tools.NavigateTo(pageUrl.Loop)
        break
      default:
        break
    }
  },

  // 微信小程序自带的页面滚动监听事件onPageScroll
  // e.scrollTop获取下滑的具体高度
  onPageScroll: function (e) {
    var that = this
    // console.log(e.scrollTop)
    if (that.data.screenHeight == 0) {
      tools.Toast("获取手机屏幕高度失败", 'none')
    } else if (e.scrollTop > that.data.screenHeight) {
      // 显示强制回到页面顶部的按钮
      // 显示页面底部没有更多数据提示面
      var heg = that.data.screenHeight - e.scrollTop;
      that.setData({
        // iconHeight: heg - 150,
        showBottom: false, // 
        goTop: false
      })
    } else {
      that.setData({
        // iconHeight: heg - 150,
        showBottom: true,
        goTop: true
      })
    }

  },

  // 猜你喜欢功能点击事件
  bindCNXH(res) {
    var that = this
    var index = res.currentTarget.dataset.index
    tools.Toast("你点击了" + that.data.cainixihuan[index].name, 'none')
  },

  // 返回页面顶部
  bindGoTop(res) {
    tools.Toast("点击了返回页面顶部按钮", "none")
    wx.pageScrollTo({
      scrollTop: 0
    })
    // 隐藏返回顶部按钮
    this.setData({
      showBottom: true,
      goTop: true
    })
  },

  // 扫一扫
  sunBtnSaoMa(res) {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        var result = res.result;
        // console.log("result----------" + JSON.stringify(result))
        tools.Toast('扫描的结果为---' + result, 'none')
      }
    })
  },

  // 会员
  sunBtnVip(res) {

  }

})