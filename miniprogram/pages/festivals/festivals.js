// pages/festivals/festivals.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     festivals_swiper_images:[],
     yuandian:"",
     triangle_left:"",
     triangle_right:"",
     vertical_line:"",
     saizhuangjie:"",
     jishanjie:"",
     jilongjie:"",
     chahuajie:"",
     bunianjie:"",
     hulinjie:"",
     tiaogongjie:"",
     huobajie:"",
     yizunian:"",

  },

  
  navigateToVideo(){
    wx.redirectTo({
      url: '/pages/map/video/destivals/destivals',
    })
  },

  GetFestivalsSwiper: function(){
    wx.cloud.init({
      env:"fxy"
    })

  wx.cloud.getTempFileURL({
      fileList: ['cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals_swiper_images/pic1.jpg', 
      'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals_swiper_images/pic2.jpg',
      'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals_swiper_images/pic3.jpg'],
      success: res => {
    // get temp file URL
      console.log(res.fileList)
      this.setData({
        festivals_swiper_images:res.fileList
      })
     },
  fail: err => {
    // handle error
   }
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

  wx.cloud.downloadFile({
    fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline_image/saizhuangjie.png', // 文件 ID
    success: res => {
      // 返回临时文件路径
      console.log(res.tempFilePath)
      this.setData({
        saizhuangjie:res.tempFilePath
      })
    },
    fail: console.error
  })


  wx.cloud.downloadFile({
    fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline_image/jishanjie.jpg', // 文件 ID
    success: res => {
      // 返回临时文件路径
      console.log(res.tempFilePath)
      this.setData({
        jishanjie:res.tempFilePath
      })
    },
    fail: console.error
  })

  wx.cloud.downloadFile({
    fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline_image/jilongjie.png', // 文件 ID
    success: res => {
      // 返回临时文件路径
      console.log(res.tempFilePath)
      this.setData({
        jilongjie:res.tempFilePath
      })
    },
    fail: console.error
  })

  wx.cloud.downloadFile({
    fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline_image/chahuajie.png', // 文件 ID
    success: res => {
      // 返回临时文件路径
      console.log(res.tempFilePath)
      this.setData({
        chahuajie:res.tempFilePath
      })
    },
    fail: console.error
  })


  wx.cloud.downloadFile({
    fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline_image/bunianjie.png', // 文件 ID
    success: res => {
      // 返回临时文件路径
      console.log(res.tempFilePath)
      this.setData({
        bunianjie:res.tempFilePath
      })
    },
    fail: console.error
  })


  wx.cloud.downloadFile({
    fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline_image/hulinjie.jpg', // 文件 ID
    success: res => {
      // 返回临时文件路径
      console.log(res.tempFilePath)
      this.setData({
        hulinjie:res.tempFilePath
      })
    },
    fail: console.error
  })

  wx.cloud.downloadFile({
    fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline_image/tiaogongjie.png', // 文件 ID
    success: res => {
      // 返回临时文件路径
      console.log(res.tempFilePath)
      this.setData({
        tiaogongjie:res.tempFilePath
      })
    },
    fail: console.error
  })

  wx.cloud.downloadFile({
    fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline_image/huobajie.jpg', // 文件 ID
    success: res => {
      // 返回临时文件路径
      console.log(res.tempFilePath)
      this.setData({
        huobajie:res.tempFilePath
      })
    },
    fail: console.error
  })

  wx.cloud.downloadFile({
    fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/festivals/timeline_image/yizunian.jpg', // 文件 ID
    success: res => {
      // 返回临时文件路径
      console.log(res.tempFilePath)
      this.setData({
        yizunian:res.tempFilePath
      })
    },
    fail: console.error
  })

},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.GetFestivalsSwiper()
    

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

  },

  Gotomain:function(e){
    wx.switchTab({
      url: '../culture/culture'
    })
  },



  saizhuangjieTap:function (e){
    wx.navigateTo({
      url: 'saizhuangjie/saizhuangjie',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
},

  bunianjieTap :function (e){
    wx.navigateTo({
    url: 'bunianjie/bunianjie',
    success: (result) => {
      
    },
    fail: () => {},
    complete: () => {}
  });
    
},

chahuajieTap:function (e){
  wx.navigateTo({
    url: 'chahuajie/chahuajie',
    success: (result) => {
      
    },
    fail: () => {},
    complete: () => {}
  });
    
},

huobajieTap:function (e){
  wx.navigateTo({
    url: 'huobajie/huobajie',
    success: (result) => {
      
    },
    fail: () => {},
    complete: () => {}
  });
    
},

jilongjieTap:function (e){
  wx.navigateTo({
    url: 'jilongjie/jilongjie',
    success: (result) => {
      
    },
    fail: () => {},
    complete: () => {}
  });
    
},

jishanjieTap:function (e){
  wx.navigateTo({
    url: 'jishanjie/jishanjie',
    success: (result) => {
      
    },
    fail: () => {},
    complete: () => {}
  });
    
},

yizunianTap:function (e){
  wx.navigateTo({
    url: 'yizunian/yizunian',
    success: (result) => {
      
    },
    fail: () => {},
    complete: () => {}
  });
    
},

tiaogongjieTap:function (e){
  wx.navigateTo({
    url: 'tiaogongjie/tiaogongjie',
    success: (result) => {
      
    },
    fail: () => {},
    complete: () => {}
  });
    
},

hulinjieTap:function (e){
  wx.navigateTo({
    url: 'hulinjie/hulinjie',
    success: (result) => {
      
    },
    fail: () => {},
    complete: () => {}
  });
    
},


})
