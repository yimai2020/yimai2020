// miniprogram/pages/map/bookshelf/bookshelf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:0
  },
  
  gotoLishi:function(){
    wx.navigateTo({
      url: '../video/history/history',
    })
  },
  backtoindoor:function(){
    wx.navigateTo({
      url: '/pages/map/indoor/indoor',
    })
  },


  gotoWenxue: function () {
    wx.navigateTo({
      url: '../video/literature/literature_video',
    })
  },

  gotoRenwu: function () {
    wx.navigateTo({
      url: '../video/people/people',
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let  that = this;
    wx.getSystemInfo({
      success: function (res) {
        let  clientHeight = res.windowHeight;
        let  clientWidth = res.windowWidth;
        let  ratio = 750 / clientWidth;
        let  height = clientHeight * ratio;
        that.setData({
          height: height
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var circleCount = 0;
    // 心跳的外框动画 
    this.animationMiddleHeaderItem = wx.createAnimation({
      duration: 1000, // 以毫秒为单位 
      timingFunction: 'linear',
      delay: 100,
      transformOrigin: '50% 50%',
      success: function (res) {
      } 
    });
    setInterval(function () {
      if (circleCount % 2 == 0) {
        this.animationMiddleHeaderItem.scale(1.5).step();
      } else {
        this.animationMiddleHeaderItem.scale(1.0).step();
      }
      this.setData({
        animationMiddleHeaderItem: this.animationMiddleHeaderItem.export()
      });
      circleCount++;
      if (circleCount == 1000) {
        circleCount = 0;
      }
    }.bind(this), 1000);
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