// pages/distinguish/distinguish.js
const db = wx.cloud.database({
  env: 'fxy-onc8b'
});  //用db代替数据库
const app = getApp();
const fileManager = wx.getFileSystemManager();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background_1: [
    'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distinguish/%E6%BC%86%E5%99%A8.png?sign=5f90fc28de634cafb73ed70ef2780ece&t=1603282156',
    'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distinguish/%E5%BD%9D%E7%BB%A3.png?sign=f1699335fc0b7a44a63d54b359bc396f&t=1603281891',  
    'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distinguish/%E6%9C%A8%E9%9B%95.png?sign=d4c260ae9e0bc4a1782e2e92f27bebc6&t=1603283464',
     ],
     token:"",//
     base64:"",
     pic:"",
     description:"",//
     keyword:"",//
     result: '',
     baiduai:{
      apiKey: "FjzunDxNUxBo2PRtTSFXFyhi",
      secretKey: "pWESSUi5aTYG5WBOKsAcTuKlqZQ801OP",
      url: "https://aip.baidubce.com/oauth/2.0/token"
    },
    searchJiheSuccess:false

   
  },

  gotoResult:function(){//点击列表中的栏目，跳转到相应的详情页
    wx.hideLoading();
    var that = this;
    console.log(that.data.result)
    
      if(that.data.result == '无'){
        wx.navigateTo({ //带参数页面跳转
          url: "result/result?pic=" + that.data.pic + "&description=" + '' + "&keyword="  + '无法识别(≥﹏≤)请用我拍彝族物件哦~'
        })
      }
      else{
        db.collection('distinguish').where({
          name:that.data.result
        })
        .get({
          success: function (res) {
            that.setData({
              searchJiheSuccess:true
            })
            console.log(res.data[0].description),
            that.setData({ 
              description: res.data[0].description
            })
            console.log("goto "+that.data.result)
            console.log("goto "+that.data.description)
            wx.navigateTo({ //带参数页面跳转
              url: "result/result?pic=" + that.data.pic + "&description=" + that.data.description + "&keyword="  + that.data.result
            })
          },
          fail: console.error
        })
      }
    
    
  },  

  pic:function(e){
    var that = this;
    wx.showActionSheet({
      itemList: ['拍照','从相册中选择'],
      success(res) {
        console.log(res.tapIndex)
        if(res.tapIndex==0){ //0是拍照
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['camera'],
            success: function (res) {
                let base64 = fileManager.readFileSync(res.tempFilePaths[0],'base64');
                that.setData({
                  base64: base64,
                  pic:res.tempFilePaths[0]
                })
                
                console.log(base64)
                console.log(that.data.pic) //这个是图片
                wx.showLoading({
                  title: '识别中',
                })
                that.reqBaiduAi(base64)
                setTimeout(function () {
                  that.gotoResult()
                  //要延时执行的代码
                 }, 2000)
             },
          })
        } else if(res.tapIndex==1){
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album'],
            success: function(res) {
              let base64 = fileManager.readFileSync(res.tempFilePaths[0],'base64');
                that.setData({
                  base64: base64,
                  pic:res.tempFilePaths[0]
                })
              console.log(res.tempFilePaths[0])// 这个是图片
              wx.showLoading({
                title: '识别中',
              })
              that.reqBaiduAi(base64)
              //that.check()
              setTimeout(function () {
                that.gotoResult()
                //要延时执行的代码
               }, 2000)
              
              
            },
          })
        }
      }
    })
   
     
    },

    //调用百度AI接口
    reqBaiduAi: function (image) {
      var that = this;
      var baiduBccessToken = wx.getStorageSync("baidu_ai_access_token");
      var url = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/classification/wujian_1?access_token=" + baiduBccessToken;
      wx.request({
        url: url,
        data: {
          image: image
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/json'
        },
        success(res) {
          console.log(res);
          console.log(res.data.results);
          var list = res.data.results;
          var result = '';
          if(list[0].score > 0.9){
            result = list[0].name,
            console.log(result);
            that.setData({
              result: result
            });
          }
          else{
            that.setData({
              result: '无'
            });
          }
        }
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
    var circleCount = 0;
    // 心跳的外框动画 
    this.animationMiddleHeaderItem = wx.createAnimation({
      duration: 1000, // 以毫秒为单位 
      timingFunction: 'linear',
      delay: 200,
      transformOrigin: '50% 50%',
      success: function (res) {
      } 
    });
    setInterval(function () {
      if (circleCount % 2 == 0) {
        this.animationMiddleHeaderItem.scale(1.2).step();
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

  getBaiduAiAccessToken: function () {
    var that = this;
    var baiduai = that.data.baiduai;
    wx.request({
      url: baiduai.url + "?grant_type=client_credentials&client_id="+ that.data.baiduai.apiKey + "&client_secret=" + that.data.baiduai.secretKey,
      data: { },
      method: 'POST',
      header: {
        'Content-type': 'application/json'
      },
      success(res) {
        console.log(res);
        wx.setStorageSync("baidu_ai_access_token", res.data.access_token);
        wx.setStorageSync("baidu_ai_time", new Date().getTime());
      },
      fail(err){
        console.log(err);
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    var that = this;
    that.getBaiduAiAccessToken();
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