// pages/map/map.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    btemp: [0, 0, 0],
    atemp: [0, 0, 0],
    isShow: [1, 0, 0],
    backgroundPic:'',
    height:0,
    width:''

  },

 

    Gotocus:function (e){
      wx.navigateTo({
        url: '../video/custom/custom',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
    });}, 

    backtolife:function (e){
      wx.navigateTo({
        url: '../life/life',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
    });}, 

    Gotodance:function (e){
      wx.navigateTo({
        url: '../video/dance/dance',
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
    });}, 

  
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
              backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/alife/alife1242_2208.png'
            })
          }
          else if((that.data.width / that.data.height).toFixed(2) > 0.51 && (that.data.width / that.data.height).toFixed(2) < 0.53){
            that.setData({
              backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/alife/alife1080_2040.png'
            })
          }
          else if((that.data.width / that.data.height).toFixed(2) > 0.45 && (that.data.width / that.data.height).toFixed(2) < 0.47){
            that.setData({
              backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/alife/alife1242_2688.png'
            })
          }
          else if((that.data.width / that.data.height).toFixed(2) > 0.48 && (that.data.width / that.data.height).toFixed(2) < 0.50){
            that.setData({
              backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/alife/alife1440_2960.png'
            })
          }
          else{
            that.setData({
              backgroundPic:'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/alife/alife1440_2960.png'
            })
          }
        },
      })
    },

  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
      })
      
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)

    let that = this;
    that.getSize()

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