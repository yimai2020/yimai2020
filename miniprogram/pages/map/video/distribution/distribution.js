// miniprogram/pages/map/video/architecture/architecture_video.js
const db = wx.cloud.database({
  env: 'fxy-onc8b'
}); //用db代替数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    videoList:[],
    currentVideoId:'',
  },

  navigateToWenzi:function(){
    wx.redirectTo({
      url: '../../../distribution/distribution',
    })
  },

  searchList: function () { 
    var that = this;
    db.collection('distribution_video')
      .get({
        success(res) {
          console.log(res.data),
          that.setData({ //设置本页面中wordlist_unstudied数组的数据，用于显示列表
            videoList: res.data
          })
        },
        fail(res) {
          console.log(res);
        }
      })
  },

  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  bindPlay:function (e) {
    console.log(e)
    var id = e.currentTarget.dataset.item._id
    console.log(id)
    var videoContext = wx.createVideoContext(id)
    if (!this.data.currentVideoId || this.data.currentVideoId===id) { // 没有播放时播放视频
      this.setData({
        currentVideoId: id
      })
    } else {                    // 有播放时先将prev暂停到0s，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext(this.data.currentVideoId)
      videoContextPrev.pause()
      this.setData({
        currentVideoId: id
      })
      var videoContextCurrent = wx.createVideoContext(this.data.currentVideoId)
    }
  },
  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.searchList()
    
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