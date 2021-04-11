//app.js
App({
  globalData : {
  },
  //渐入，渐出实现 
 show : function(that,param,opacity){
  var animation = wx.createAnimation({
   //持续时间800ms
   duration: 800,
   timingFunction: 'ease',
  });
  //var animation = this.animation
  animation.opacity(opacity).step()
  //将param转换为key
  var json = '{"' + param + '":""}'
  json = JSON.parse(json);
  json[param] = animation.export()
  //设置动画
  that.setData(json)
 },
 
 //滑动渐入渐出
 slideupshow:function(that,param,px,opacity){
  var animation = wx.createAnimation({
   duration: 800,
   timingFunction: 'ease',
  });
  animation.translateY(px).opacity(opacity).step()
  //将param转换为key
  var json = '{"' + param + '":""}'
  json = JSON.parse(json);
  json[param] = animation.export()
  //设置动画
  that.setData(json)
 },
 
 //向右滑动渐入渐出
 sliderightshow: function (that, param, px, opacity) {
  var animation = wx.createAnimation({
   duration: 800,
   timingFunction: 'ease',
  });
  animation.translateX(px).opacity(opacity).step()
  //将param转换为key
  var json = '{"' + param + '":""}'
  json = JSON.parse(json);
  json[param] = animation.export()
  //设置动画
  that.setData(json)
 },
 
  onLaunch: function () {
    var that = this
    wx.getSystemInfo({
      success: res => {
        console.log(res.model)
        let modelmes = res.model;
        let iphoneArr = ['iPhone X','iPhone 11','iPhone 11 Pro Max']
        iphoneArr.forEach(function(item){
          if(modelmes.search(item)!=-1)
          {
            that.globalData.isIphoneX = true
          }
        })
        // 得到安全区域高度
        
      }, fail(err) {
        console.log(err);
      }
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env:'fxy-onc8b',
        traceUser: true,
      })
    }

    this.globalData = {}

    this.loadFont()
  },

  loadFont() {
    wx.loadFontFace({
      family: 'lishu',
      source: 'url("https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/font/%E5%AD%97%E9%AD%8271%E5%8F%B7-%E6%B4%AA%E4%BA%AE%E6%AF%9B%E7%AC%94%E9%9A%B6%E4%B9%A6%E7%AE%80%E4%BD%93.ttf?sign=dd5664253ab16fbc5597ad51c1c6e1bb&t=1617952208")',
      success(res){
       
      },
      fail(err){
       
      },
      complete(res){
        
      }
    })
  }
  
})
