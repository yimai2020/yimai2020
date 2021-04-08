// pages/culture/culture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设备宽高
    windowHeight:'',
    windowWidth:'',
    active: 1
  },

  
  getsize(){
    let that=this;
    wx.getSystemInfo({
      success(res) {
        console.log(res)
        that.setData({
          windowHeight:res.windowHeight,
          windowWidth:res.windowWidth
        })
      },
    })
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none'
    });
  },

  gotoMusic:function(){
    wx.navigateTo({
      url: '/pages/music/music',
    })
  },

  gotoDance:function(){
    wx.navigateTo({
      url: '/pages/dance/dance',
    })
  },

  gotoHistory:function(){
    wx.navigateTo({
      url: '/pages/history/history',
    })
  },

  gotoDistribution:function(){
    wx.navigateTo({
      url: '/pages/distribution/distribution',
    })
  },

  gotoClothes:function(){
    wx.navigateTo({
      url: '/pages/clothes/clothes',
    })
  },

  gotoDiet: function () {
    wx.navigateTo({
      url: '/pages/diet/diet',
    })
  },

  gotoArchitecture: function () {
    wx.navigateTo({
      url: '/pages/architecture/architecture',
    })
  },

  gotoCustom: function () {
    wx.navigateTo({
      url: '/pages/custom/custom',
    })
  },

  gotoFestivals: function () {
    wx.navigateTo({
      url: '/pages/festivals/festivals',
    })
  },

  gotoLiterature: function () {
    wx.navigateTo({
      url: '/pages/literature/literature',
    })
  },

  gotoPeople: function () {
    wx.navigateTo({
      url: '/pages/people/people',
    })
  },

  gotoLanguage_introduction: function () {
    wx.navigateTo({
      url: '/pages/language_introduction/language_introduction',
    })
  },

  gotoMap:function(){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },

  navigateshengmin: function () {
    wx.navigateTo({
      url: '/pages/shengmin/shengmin',
    })
  },

  showRule: function () { 
    this.setData({ 
      isRuleTrue: true 
      }) 
  },  //关闭透明层  

  hideRule: function () {    
    this.setData({      
      isRuleTrue: false    
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.app = getApp()
    var that = this
    that.getsize();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var circleCount = 0;
    // 心跳的外框动画 
    this.animationMiddleHeaderItem = wx.createAnimation({
      duration: 1000, // 以毫秒为单位 
      timingFunction: 'linear',
      delay: 100,
      transformOrigin: '50% 50%',
      success: function (res) {
      }
    });
    setInterval(function () {
      if (circleCount % 2 == 0) {
        this.animationMiddleHeaderItem.scale(1.15).step();
      } else {
        this.animationMiddleHeaderItem.scale(1.0).step();
      }
      this.setData({
        animationMiddleHeaderItem: this.animationMiddleHeaderItem.export()
      });
      circleCount++;
      if (circleCount == 1000) {
        circleCount = 0;
      }
    }.bind(this), 1000);
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