// pages/people/people.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  shexiangfurenTap:function (e){
    wx.navigateTo({
      url: 'shexiangfuren/shexiangfuren',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  longyunTap:function (e){
    wx.navigateTo({
      url: 'longyun/longyun',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  xiaoyedanTap:function (e){
    wx.navigateTo({
      url: 'xiaoyedan/xiaoyedan',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  luhanTap:function (e){
    wx.navigateTo({
      url: 'luhan/luhan',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  chutunanTap:function (e){
    wx.navigateTo({
      url: 'chutunan/chutunan',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  lujunquanTap:function (e){
    wx.navigateTo({
      url: 'lujunquan/lujunquan',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  zhangchongTap:function (e){
    wx.navigateTo({
      url: 'zhangchong/zhangchong',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  longzehuiTap:function (e){
    wx.navigateTo({
      url: 'longzehui/longzehui',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  yangguoxiangTap:function (e){
    wx.navigateTo({
      url: 'yangguoxiang/yangguoxiang',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  yanglikunTap:function (e){
    wx.navigateTo({
      url: 'yanglikun/yanglikun',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
  },

  Gotomain:function(e){
    wx.switchTab({
      url: '../culture/culture'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.init({
      env:"fxy"
    })
    wx.showLoading({
      title: '加载中',})
    setTimeout(function () {
        wx.hideLoading()
      }, 2000)


      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/yanglikun.png', // 文件 ID
       success: res => {
         // 返回临时文件路径
       console.log(res.tempFilePath)
               this.setData({
             yanglikun:res.tempFilePath
           })
         },
         fail: console.error
       })


      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/yangguoxiang.png', // 文件 ID
       success: res => {
         // 返回临时文件路径
       console.log(res.tempFilePath)
               this.setData({
             yangguoxiang:res.tempFilePath
           })
         },
         fail: console.error
       })


      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/longzehui.jpg', // 文件 ID
       success: res => {
         // 返回临时文件路径
       console.log(res.tempFilePath)
               this.setData({
             longzehui:res.tempFilePath
           })
         },
         fail: console.error
       })

      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/zhangchong.jpg', // 文件 ID
       success: res => {
         // 返回临时文件路径
       console.log(res.tempFilePath)
               this.setData({
             zhangchong:res.tempFilePath
           })
         },
         fail: console.error
       })

      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/lujunquan.jpg', // 文件 ID
       success: res => {
         // 返回临时文件路径
       console.log(res.tempFilePath)
               this.setData({
             lujunquan:res.tempFilePath
           })
         },
         fail: console.error
       })

      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/chutunan.jpg', // 文件 ID
       success: res => {
         // 返回临时文件路径
       console.log(res.tempFilePath)
               this.setData({
             chutunan:res.tempFilePath
           })
         },
         fail: console.error
       })

      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/luhan.jpg', // 文件 ID
       success: res => {
         // 返回临时文件路径
       console.log(res.tempFilePath)
               this.setData({
             luhan:res.tempFilePath
           })
         },
         fail: console.error
       })

      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/xiaoyedan.jpg', // 文件 ID
       success: res => {
         // 返回临时文件路径
       console.log(res.tempFilePath)
               this.setData({
             xiaoyedan:res.tempFilePath
           })
         },
         fail: console.error
       })

      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/longyun.jpg', // 文件 ID
       success: res => {
         // 返回临时文件路径
       console.log(res.tempFilePath)
               this.setData({
             longyun:res.tempFilePath
           })
         },
         fail: console.error
       })



    wx.cloud.downloadFile({
       fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/people/shexiangfuren.jpg', // 文件 ID
      success: res => {
        // 返回临时文件路径
      console.log(res.tempFilePath)
              this.setData({
            shexiangfuren:res.tempFilePath
          })
        },
        fail: console.error
      })
      

      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline/yuandian5.png', // 文件 ID
        success: res => {
          // 返回临时文件路径
          console.log(res.tempFilePath)
          this.setData({
            yuandian:res.tempFilePath
          })
        },
        fail: console.error
      })
    
      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline/vertical_line.jpg', // 文件 ID
        success: res => {
          // 返回临时文件路径
          console.log(res.tempFilePath)
          this.setData({
            vertical_line:res.tempFilePath
          })
        },
        fail: console.error
      })
    
    
      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline/triangle-right.png', // 文件 ID
        success: res => {
          // 返回临时文件路径
          console.log(res.tempFilePath)
          this.setData({
            triangle_right:res.tempFilePath
          })
        },
        fail: console.error
      })
    
      wx.cloud.downloadFile({
        fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline/triangle-left.png', // 文件 ID
        success: res => {
          // 返回临时文件路径
          console.log(res.tempFilePath)
          this.setData({
            triangle_left:res.tempFilePath
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