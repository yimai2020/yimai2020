// pages/map/map.js



Page({

  /**
   * 页面的初始数据
   */
  

 

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

  


  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.downloadFile({
      fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/map/pic3.jpg', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
        this.setData({
          pic:res.tempFilePath
        })
      },
      fail: console.error
    })
    

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