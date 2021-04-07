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