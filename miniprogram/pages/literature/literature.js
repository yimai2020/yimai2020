// pages/literature/literature.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    literature: [{
      id: 1,
      title: "早来的春天",
      tempFileURL: "",
      name: "李乔"
    }, {
      id: 2,
      title: "逃婚的姑娘",
      tempFileURL: "",
      name: "钟呜搜集"
    }, {
      id: 3,
      title: "赛玻嫫",
      tempFileURL: "",
      name: "云南省民族民间文学楚雄调查队搜集"
    }, {
      id: 4,
      title: "破晓的山野",
      tempFileURL: "",
      name: "李乔"
    }, {
      id: 5,
      title: "末代土司",
      tempFileURL: "",
      name: "金满"
    }, {
      id: 6,
      title: "猎村的孩子",
      tempFileURL: "",
      name: "普飞"
    }, {
      id: 7,
      title: "勒俄特依",
      tempFileURL: "",
      name: "群众"
    }, {
      id: 8,
      title: "欢笑的金沙江",
      tempFileURL: "",
      name: "李乔"
    }, {
      id: 9,
      title: "阿细的先基",
      tempFileURL: "",
      name: "云南省民族民间文学红河调查队搜集翻译"
    }, {
      id: 10,
      title: "阿诗玛",
      tempFileURL: "",
      name: "群众"
    }]
  },

  
  navigateToVideo(){
    wx.redirectTo({
      url: '/pages/map/video/literature/literature_video',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showLoading({
    //   title: '加载中',
    // })

    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)
    wx.cloud.init({
      env: "fxy"
    })
    //this.app = getApp()
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
    wx.cloud.getTempFileURL({
      fileList: ['cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/zaolaidechuntian.jpg',
        'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/taohundeguniang.jpg',
        'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/saibomo.jpg',
        'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/poxiaodeshanye.jpg',
        'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/modaitusi.jpg',
        'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/liecundehaizi.jpg',
        'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/leeteyi.jpg',
        'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/huanxiaodejinshajiang.jpg',
        'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/axidexianji.jpg',
        'cloud://fxy-onc8b.6678-fxy-onc8b-1300849435/literature/ashima.jpg'
      ],
      success: res => {
        console.log(res.fileList)
        for (var i = 0; i < 10; i++) {
          this.data.literature[i].tempFileURL = res.fileList[i].tempFileURL;
          console.log(this.data.literature[i].tempFileURL)
        }
      },
      fail: err => {
        // handle error
      }
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

  },


  zaolaidechuntianTap: function (e) {
    wx.navigateTo({
      url: 'zaolaidechuntian/zaolaidechuntian',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });
  },

  taohundeguniangTap: function (e) {
    wx.navigateTo({
      url: 'taohundeguniang/taohundeguniang',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });
  },

  saibomoTap: function (e) {
    wx.navigateTo({
      url: 'saibomo/saibomo',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });
  },


  poxiaodeshanyeTap: function (e) {
    wx.navigateTo({
      url: 'poxiaodeshanye/poxiaodeshanye',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });
  },


  modaitusiTap: function (e) {
    wx.navigateTo({
      url: 'modaitusi/modaitusi',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });
  },

  liecundehaiziTap: function (e) {
    wx.navigateTo({
      url: 'liecundehaizi/liecundehaizi',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });

  },

  leeteyiTap: function (e) {
    wx.navigateTo({
      url: 'leeteyi/leeteyi',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });

  },

  huanxiaodejinshajiangTap: function (e) {
    wx.navigateTo({
      url: 'huanxiaodejinshajiang/huanxiaodejinshajiang',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });

  },

  axidexianjiTap: function (e) {
    wx.navigateTo({
      url: 'axidexianji/axidexianji',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });

  },

  ashimaTap: function (e) {
    wx.navigateTo({
      url: 'ashima/ashima',
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });

  },

  collapse_a(event) {
    this.setData({
      activeName: event.detail
    });
  },


})