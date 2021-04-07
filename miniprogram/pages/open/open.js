"use strict";
Page({
    data: {
        title: "ddemo",
        currentIndex: 0,
        oldIndex: 0,
        view: [{
            in: "",
            out: ""
        }, {
            in: "",
            out: ""
        }]
    },
    touchStart: function (t) {
        this.setData({
            startX: t.changedTouches[0].clientX
        })
    },
    touchEnd: function (t) {
        var e = this,
            n = this.data.view;
        this.setData({
            endX: t.changedTouches[0].clientX
        });
        var a = t.changedTouches[0].clientX - this.data.startX;
        if (a < -100) {
            if (this.data.currentIndex >= 1) return;
            this.setData({
                oldIndex: e.data.currentIndex,
                currentIndex: ++e.data.currentIndex
            }), n[this.data.oldIndex].out = "animated fadeOutLeft", n[this.data.oldIndex].in = "", n[this.data.currentIndex].in = "animated fadeInRight", n[this.data.currentIndex].out = "", this.setData({
                view: n
            }), this.cleanAnimated(), this.showAnimated()
        } else if (a > 100) {
            if (this.data.currentIndex <= 0) return;
            this.setData({
                oldIndex: e.data.currentIndex,
                currentIndex: --e.data.currentIndex
            }), n[this.data.oldIndex].out = "animated fadeOutRight", n[this.data.oldIndex].in = "", n[this.data.currentIndex].in = "animated fadeInLeft", n[this.data.currentIndex].out = "", this.setData({
                view: n
            }), this.cleanAnimated(), this.showAnimated()
        }
    },
    showAnimated: function () {
        var t = this;
        0 === this.data.currentIndex ? (setTimeout(function () {
            t.setData({
                one_one: "animated fadeIn",
                one_two: "animated bounceIn"
            })
        }, 1e3), setTimeout(function () {
            t.setData({
                one_three: "animated bounceIn"
            })
        }, 1500), setTimeout(function () {
            t.setData({
                one_four: "animated bounceIn"
            })
        }, 1800), setTimeout(function () {
            t.setData({
                one_five: "animated lightSpeedIn"
            })
        }, 1900)) : 1 === this.data.currentIndex && (setTimeout(function () {
            t.setData({
                two_one: "animated fadeInDown",
                two_two: "animated fadeInUp"
            })
        }, 1e3), setTimeout(function () {
            t.setData({
                two_three: "animated zoomIn",
                two_four: "animated zoomIn"
            })
        }, 1200), setTimeout(function () {
            t.setData({
                two_three: "two-music-one",
                two_four: "two-music-two"
            })
        }, 2200))
    },
    cleanAnimated: function () {
        0 === this.data.oldIndex ? this.setData({
            one_one: "animated fadeOut",
            one_two: "animated fadeOut",
            one_three: "animated fadeOut",
            one_four: "animated fadeOut",
            one_five: "animated fadeOut"
        }) : 1 === this.data.oldIndex && this.setData({
            two_one: "animated fadeOut",
            two_two: "animated fadeOut",
            two_three: "animated fadeOut",
            two_four: "animated fadeOut",
            two_five: "animated fadeOut"
        })
    },
    onLoad: function () {
        wx.cloud.init({
            env:"fxy"
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/1.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_1:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/2.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_2:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/3.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_3:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/4.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_4:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/5.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_5:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/6.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_6:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/7.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_7:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/8.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_8:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/9.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_9:res.tempFilePath
              })
            },
            fail: console.error
          })
         wx.cloud.downloadFile({
          fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/10.png', // 文件 ID
          success: res => {
            // 返回临时文件路径
            console.log(res.tempFilePath)
            this.setData({
              p_10:res.tempFilePath
            })
          },
          fail: console.error
        })
        wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/11.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_11:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/12.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_12:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/13.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_13:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/14.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_14:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/15.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_15:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/16.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_16:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/17.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_17:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/18.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_18:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/19.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_19:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/20.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_20:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/zhishi.png', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                zhishi:res.tempFilePath
              })
            },
            fail: console.error
          })
          wx.cloud.downloadFile({
            fileID: 'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/open/12.jpg', // 文件 ID
            success: res => {
              // 返回临时文件路径
              console.log(res.tempFilePath)
              this.setData({
                p_12_j:res.tempFilePath
              })
            },
            fail: console.error
          })
    },
    onReady: function () {},
    onShow: function () {
        this.showAnimated();
        var t = this;
        setTimeout(function () {
            t.setData({
                bottom: "animated slideInUp"
            })
        }, 2e3), setTimeout(function () {
            t.setData({
                bottom_one: "animated slideInUp"
            })
        }, 2100), setTimeout(function () {
            t.setData({
                bottom_two: "animated slideInUp"
            })
        }, 2200), setTimeout(function () {
            t.setData({
                bottom_three: "animated slideInUp"
            })
        }, 2300), setTimeout(function () {
            t.setData({
                bottom_four: "animated slideInUp"
            })
        }, 2400), setTimeout(function () {
            t.setData({
                bottom_one: "bottom-4s-move"
            })
        }, 3100), setTimeout(function () {
            t.setData({
                bottom_two: "bottom-3s-move"
            })
        }, 3200), setTimeout(function () {
            t.setData({
                bottom_three: "bottom-2s-move"
            })
        }, 3300), setTimeout(function () {
            t.setData({
                bottom_four: "bottom-1s-move"
            })
        }, 3400)
    },
    onHide: function () {
        this.cleanAnimated(), this.setData({
            bottom: "",
            bottom_one: "",
            bottom_two: "",
            bottom_three: "",
            bottom_four: ""
        })
    },
    onUnload: function () {},
    onPullDownRefresh: function () {},
    Gotoculture:function(){
        wx.switchTab({
            url: '../culture/culture'
          })
    },
    Gotodistinguish:function(){
      wx.switchTab({
          url: '../distinguish/distinguish'
        })
  },
    Gotostudy:function(){
      wx.switchTab({
          url: '../language/language'
        })
    }
});
//# sourceMappingURL=ddemo.js.map