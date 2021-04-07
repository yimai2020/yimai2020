// pages/culture/culture.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    clientHeight: '',
    active: 1,
    scorll_1: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/distribution-1-1.jpg?sign=257c2e200f949068344ad5ae8e5a58cf&t=1583034047', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/distribution-1-2.jpg?sign=5f2aae5cb2c3019d63250cf1f3b9273d&t=1583034071','https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/distribution-1-3.jpg?sign=333fb35b1b3b6815683dd29b0daabd5a&t=1583034081'],
    scorll_2: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/distribution-2-1.jpg?sign=a4c9e1120143ba079d280a2ade71bea2&t=1583034090', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/distribution-2-2.jpg?sign=a74267403680a3a102e30971771ca343&t=1583034097','https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/distribution-2-3.jpg?sign=62ce3c8861ec34f06f3b9dd603219213&t=1583034105'],
    scorll_3: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/distribution-3-1.jpg?sign=7b49c219c0e70420fd9227e7ea438de2&t=1583034115', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/distribution-3-2.jpg?sign=67991de07a1547710ce9468cb40dee28&t=1583034122', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/distribution-3-3.jpg?sign=3677ea164f6f02634d4540c6f1e41724&t=1583034130'],
  },

  //页面轮播功能函数
  swichNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  //页面轮播功能函数
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
  },

  gotoPopulation:function(){
    wx.navigateTo({
      url: '/pages/distribution/population/population',
    })
  },
  
  gotoZhixi: function () {
    wx.navigateTo({
      url: '/pages/distribution/Zhixi/Zhixi',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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