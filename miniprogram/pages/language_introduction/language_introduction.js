// miniprogram/pages/language_introduction/language_introduction.js
Page({
  collapse_a(event) {
    this.setData({
      activeName: event.detail
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    zhankai1:false,
    zhankai2:false,
    zhankai3:false,
    zhankai4:false,
    zhankai5:false,
    zhankai6:false,
    shengmu:true,
    yunmu:false,
    shengtiao:false,
    shengmuColor:'#663300',
    shengmuSize:'35rpx',
    yunmuColor:'#000',
    yunmuSize:'30rpx',
    shendiaoColor:'#000',
    shendiaoSize:'30rpx',
  },

  showShengmu(){
    var that = this;
    that.setData({
      shengmu:true,
      shengmuColor:'#663300',
      shengmuSize:'35rpx',
      yunmu:false,
      yunmuColor:'#000',
      yunmuSize:'30rpx',
      shendiao:false,
      shendiaoColor:'#000',
      shendiaoSize:'30rpx',
    })
  },

  showYungmu(){
    var that = this;
    that.setData({
      shengmu:false,
      shengmuColor:'#000',
      shengmuSize:'30rpx',
      yunmu:true,
      yunmuColor:'#663300',
      yunmuSize:'35rpx',
      shendiao:false,
      shendiaoColor:'#000',
      shendiaoSize:'30rpx',
    })
  },

  showShengdiao(){
    var that = this;
    that.setData({
      shengmu:false,
      shengmuColor:'#000',
      shengmuSize:'30rpx',
      yunmu:false,
      yunmuColor:'#000',
      yunmuSize:'30rpx',
      shendiao:true,
      shendiaoColor:'#663300',
      shendiaoSize:'35rpx',
    })
  },
  
  zhankai1(){
    var that = this
    that.setData({zhankai1:true})
  },
  shouqi1(){
    var that = this
    that.setData({zhankai1:false})
  },

  zhankai2(){
    var that = this
    that.setData({zhankai2:true})
  },
  shouqi2(){
    var that = this
    that.setData({zhankai2:false})
  },

  zhankai3(){
    var that = this
    that.setData({zhankai3:true})
  },
  shouqi3(){
    var that = this
    that.setData({zhankai3:false})
  },

  zhankai4(){
    var that = this
    that.setData({zhankai4:true})
  },
  shouqi4(){
    var that = this
    that.setData({zhankai4:false})
  },

  zhankai5(){
    var that = this
    that.setData({zhankai5:true})
  },
  shouqi5(){
    var that = this
    that.setData({zhankai5:false})
  },

  zhankai6(){
    var that = this
    that.setData({zhankai6:true})
  },
  shouqi6(){
    var that = this
    that.setData({zhankai6:false})
  },

  navigateToVideo(){
    wx.redirectTo({
      url: '/pages/map/video/language/language',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.app = getApp()
    wx.cloud.downloadFile({
      fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline/yuandian5.png', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
        this.setData({
          yuandian: res.tempFilePath
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
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up1', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up3', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up4', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up5', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up6', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up7', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up8', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up9', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up10', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up11', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up12', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up13', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up14', -200, 1)
    }.bind(this), 200);



  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up1', 200, 0)
     }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', 200, 0)
     }.bind(this), 200);
     setTimeout(function () {
      this.app.slideupshow(this, 'slide_up3', 200, 0)
     }.bind(this), 200);
     setTimeout(function () {
      this.app.slideupshow(this, 'slide_up4', 200, 0)
     }.bind(this), 200);
     setTimeout(function () {
      this.app.slideupshow(this, 'slide_up5', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up6', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up7', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up8', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up9', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up10', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up11', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up12', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up13', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up14', 200, 0)
    }.bind(this), 200);
    
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