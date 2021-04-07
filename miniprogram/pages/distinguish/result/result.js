// pages/distinguish/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      pic:"",
     description:"",
     keyword:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接收distinguish界面传来的参数，将传来的字符串分解，并赋值给当前界面的数据data
    console.log(options);
    if(options.description=="undefined")
   {
    this.setData({
      pic: options.pic,
      description:"暂未有具体描述",
      keyword:options.keyword
    })
   }
   else{
    this.setData({
      pic: options.pic,
      description:options.description,
     keyword:options.keyword
    })
   }
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