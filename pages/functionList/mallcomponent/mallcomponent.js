Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesurl: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573919960528&di=14ff7c5d89eedbc6237b0372526d3c42&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fim%2Frc%2FQJ6900929898.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069583&di=c5cd4bf5c939be2139da029faf5b7db6&imgtype=0&src=http%3A%2F%2Fhuafans.dbankcloud.com%2Fpic%2F2017%2F11%2F09%2F5e73598b6db356c260d5093de507ae75_IMG_20171109_075558.jpg%3Fmode%3Ddownload',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg'
    ],
    slider: [{
        picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg'
      },
      {
        picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971678420&di=1ff9e74800a43e066028f3cba6298377&imgtype=0&src=http%3A%2F%2Fstatic.chinacaipu.com%2Fd%2Ffile%2Fmenu%2Fjiankangyinshi%2F2016-04-19%2F934514d3e97a91c2bd75360d051e0900.jpg'
      },
      {
        picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971633385&di=12bf23a17257c69b65b70a0fe3d57dbf&imgtype=0&src=http%3A%2F%2Fsh.sinaimg.cn%2F2015%2F0506%2FU10201P18DT20150506172427.jpg'
      },
    ],
    swiperCurrent: 0,

    fourData: [{
      imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg'
    }, {
      imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg'
    }, {
      imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg'
    }, {
      imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg'
    }],
    fourOtherData: [{
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg',
      iden: '0'
    }, {
      rowImg: [{
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg'
      }, {
        imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg'
      }],
      iden: '1'
    }, {
      rowImg: [{
        imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg'
      }, {
        imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg'
      }],
      iden: '2'
    }, {
      imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg',
      iden: '0'
    }],
    a: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg'
    ],
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

  // 监听swiper横滑
  swiperChange: function(e) {

    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  tapS(res) {
    console.log(JSON.stringify(res))
  }
})