// pages/map/indoor/indoor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backgroundPic:'',
    height:0,
    width:''

  },
  gotoLiterature: function () {
    wx.navigateTo({
      url: '/pages/map/bookshelf/bookshelf',
    })
  },

  gotoClothes: function () {
    wx.navigateTo({
      url: '../video/clothes/clothes',
    })
  },
  gotoDiet: function () {
    wx.navigateTo({
      url: '../video/diet/diet',
    })
  },
  gotoLanguage: function () {
    wx.navigateTo({
      url: '../video/language/language',
    })
  },
  backtomap: function () {
    wx.switchTab({
      url: '../../../pages/map/map',
    })
  },


  getSize(){
    var that = this
    wx.getSystemInfo({
      success(res) {
        console.log(res)
        that.setData({
          height:res.windowHeight,
          width:res.windowWidth
        })
        if((that.data.width / that.data.height).toFixed(2) > 0.55 && (that.data.width / that.data.height).toFixed(2) < 0.57){
          that.setData({
            backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/indoor/indoor1242_2208.png'
          })
        }
        else if((that.data.width / that.data.height).toFixed(2) > 0.51 && (that.data.width / that.data.height).toFixed(2) < 0.53){
          that.setData({
            backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/indoor/indoor1080_2040.png'
          })
        }
        else if((that.data.width / that.data.height).toFixed(2) > 0.45 && (that.data.width / that.data.height).toFixed(2) < 0.47){
          that.setData({
            backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/indoor/indoor1242_2688.png'
          })
        }
        else if((that.data.width / that.data.height).toFixed(2) > 0.48 && (that.data.width / that.data.height).toFixed(2) < 0.50){
          that.setData({
            backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/indoor/indoor1440_2960.png'
          })
        }
        else{
          that.setData({
            backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/indoor/indoor1440_2960.png'
          })
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.showLoading({
      title: '加载中',
      })
      
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    that.getSize()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var circleCount = 0;
    // // 心跳的外框动画 
    // this.animationMiddleHeaderItem = wx.createAnimation({
    //   duration: 1000, // 以毫秒为单位 
    //   timingFunction: 'linear',
    //   delay: 100,
    //   transformOrigin: '50% 50%',
    //   success: function (res) {
    //   }
    // });
    // setInterval(function () {
    //   if (circleCount % 2 == 0) {
    //     this.animationMiddleHeaderItem.scale(1.5).step();
    //   } else {
    //     this.animationMiddleHeaderItem.scale(1.0).step();
    //   }
    //   this.setData({
    //     animationMiddleHeaderItem: this.animationMiddleHeaderItem.export()
    //   });
    //   circleCount++;
    //   if (circleCount == 1000) {
    //     circleCount = 0;
    //   }
    // }.bind(this), 1000);

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