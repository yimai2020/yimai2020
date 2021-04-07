// pages/map/map.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    btemp: [0, 0, 0],
    atemp: [0, 0, 0],
    isShow: [1, 0, 0]

  },

  Gotoar:function (e){
    wx.navigateTo({
      url: '../video/architecture/architecture',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
  });},
  backtomain:function (e){
   
wx.switchTab({
  url: '../video/culture/culture'
  });
  },

  Gotomus:function (e){
    wx.navigateTo({
      url: '../video/music/music',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
  });}, 

  Goin:function (e){
    wx.navigateTo({
      url: 'indoor/indoor',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
  });},
  Gotolife:function (e){
    wx.navigateTo({
      url: 'life/life',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
  });},

  backtomap:function (e){
    wx.navigateTo({
      url: '../../map/map',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
  });},

    Gotoalife:function (e){
      wx.navigateTo({
        url: '../alife/alife',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
    });},

    Gotodis:function (e){
      wx.navigateTo({
        url: '../video/distribution/distribution',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
    });},

    Gotofes:function (e){
      wx.navigateTo({
        url: '../video/festivals/festivals',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
    });}, 

    Gotoclo:function (e){
      wx.navigateTo({
        url: '../video/clothes/clothes',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
    });}, 

    Gotocus:function (e){
      wx.navigateTo({
        url: '../video/custom/custom',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
    });}, 

  backTap: function () {
    this.setData({
      'btemp[0]': this.data.isShow[0]
    })
    this.setData({
      'btemp[1]': this.data.isShow[1]
    })
    this.setData({
      'btemp[2]': this.data.isShow[2]
    })
    this.setData({
      'isShow[0]': this.data.btemp[1]
    })
    this.setData({
      'isShow[1]': this.data.btemp[2]
    })
    this.setData({
      'isShow[2]': this.data.btemp[0]
    })


  },
  awardTap: function () {
    this.setData({
      'atemp[0]': this.data.isShow[0]
    })
    this.setData({
      'atemp[1]': this.data.isShow[1]
    })
    this.setData({
      'atemp[2]': this.data.isShow[2]
    })
    this.setData({
      'isShow[0]': this.data.atemp[2]
    })
    this.setData({
      'isShow[1]': this.data.atemp[0]
    })
    this.setData({
      'isShow[2]': this.data.atemp[1]
    })


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    

    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let height = clientHeight * ratio;
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