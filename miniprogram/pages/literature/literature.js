// pages/literature/literature.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhankai1:false,
    zhankai2:false,
    zhankai3:false,
    xiaoshuo:[{
      title: "破晓的山野",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/poxiaodeshanye.jpg?sign=47f4f5dd4736b5456acafe59f5b3ab86&t=1618045157",
      navigt:'poxiaodeshanyeTap'
    },{
      title: "末代土司",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/modaitusi.jpg?sign=76eb00cfbff184d790e7d9f2d60e4db4&t=1618044745",
      navigt:'modaitusiTap'
    },{
      title: "欢笑的金沙江",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/huanxiaodejinshajiang.jpg?sign=93df6b4e161006f6e85344e28ed12a6e&t=1618044762",
      navigt:'huanxiaodejinshajiangTap'
    },{
      title: "猎村的孩子",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/liecundehaizi.jpg?sign=700162ead6b70f3e6f339bc4d538e274&t=1618044753",
      navigt:'liecundehaiziTap'
    },{
      title: "早来的春天",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/zaolaidechuntian.jpg?sign=ade77bf6f3da4a573e14d58b9b2082eb&t=1618044729",
      navigt:'zaolaidechuntianTap'
    }],

    xushichangshi:[{
      title: "逃婚的姑娘",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/taohundeguniang.jpg?sign=10df99f5a2e136d448f8dd8b0d387774&t=1618044772",
      navigt:'taohundeguniangTap'
    },{
      title: "赛玻嫫",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/saibomo.jpg?sign=f79293b194f44f8b8d48dcd03bcb54f4&t=1618044781",
      navigt:'saibomoTap'
    }],

    shishi:[{
      title: "勒俄特依",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/leeteyi.jpg?sign=99bff4e0896d9990770d8602844833a9&t=1618044790",
      navigt:'leeteyiTap'
    },{
      title: "阿细的先基",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/axidexianji.jpg?sign=703330d323ac9da295a1a2f0842dc7ef&t=1618044798",
      navigt:'axidexianjiTap'
    }],

    minjianshige:[{
      title: "阿诗玛",
      pic: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/literature/ashima.jpg?sign=1afbcaa30418bccb20fed4bb71061355&t=1618044804",
      navigt:'ashimaTap'
    }],
  },

  zhankai1(){
    var that = this
    that.setData({
      zhankai1:true
    })
  },

  shouqi1(){
    var that = this
    that.setData({
      zhankai1:false
    })
  },

  zhankai2(){
    var that = this
    that.setData({
      zhankai2:true
    })
  },

  zhankai3(){
    var that = this
    that.setData({
      zhankai3:true
    })
  },

  shouqi3(){
    var that = this
    that.setData({
      zhankai3:false
    })
  },

  shouqi2(){
    var that = this
    that.setData({
      zhankai2:false
    })
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
    getApp().loadFont()
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