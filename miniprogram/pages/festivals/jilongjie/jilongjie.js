
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intro:"",
    picList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.cloud.init({
      env:"fxy"
    })

  wx.cloud.getTempFileURL({
      fileList: ['cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/jilongjie/pic3.jpg', 
      'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/jilongjie/pic2.jpg',
      'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/jilongjie/pic1.jpg'],
      success: res => {
    // get temp file URL
      console.log(res.fileList)
      this.setData({
        picList:res.fileList
      })
     },
  fail: err => {
    // handle error
   }
   })

    wx.cloud.downloadFile({
      fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/jilongjie/intro.jpg', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
        this.setData({
          intro:res.tempFilePath
        })
      },
      fail: console.error
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})