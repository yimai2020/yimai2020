Page({

  /**
   * 页面的初始数据
   */
  data: {
    background_1: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-1-1.jpg?sign=5aafd697b3f754bd267f2bcfeb52e2c9&t=1582348850', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-1-2.jpg?sign=caf5d6b3dcb0e24e69839ed0517018ff&t=1582348867', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-1-3.jpg?sign=1c805393976349ede4b6234e4e27bfe2&t=1582348880', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-1-4.jpg?sign=c06f20b8e3acda0d4f19e4fe9a734121&t=1582348891', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-1-5.jpg?sign=6d4551c8efe6fc5d455c97e560b210b0&t=1582348903', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-1-6.jpg?sign=344a0d85d53fe2404d14b82652b9238f&t=1582348914'],
    background_2: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-2-1.jpg?sign=cadc5ae68db56eff0189a1b6187501da&t=1582348925', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-2-2.jpg?sign=6c64f3994d6ef9f47d6d16e89f490811&t=1582348937', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-2-3.jpg?sign=1ff59967257db6a61eaf70460030ee25&t=1582348947', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-2-4.jpg?sign=8dd12f84500e2e50818c9aeeb909125c&t=1582348956', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-2-5.jpg?sign=445f378e6e9058058af9f618cca210d4&t=1582348964', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/clothes-2-6.jpg?sign=33e19112b2c7f133580e0316dcb1a524&t=1582348974'],
    active: 1,
    activeNames: ['1'],
    activeName:'1',
    liangshan: [{
      image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/liangshan-1.jpg?sign=515ca87b11552a0f6d0269e09ccb4b71&t=1582970212',
      text: '凉山田女上衣均为右衽大襟衣。妇女着初，戴头帕，育后戴帽或缠帕。双耳佩银、珊瑚、玉、贝等耳饰，重劲部修饰，戴银领牌。'
    },{
      image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/liangshan-2.jpg?sign=a597fc896dcc0acd042c058b30fdf4f7&t=1582346081',
      text: '男子发式为传统的天菩萨，头饰为英雄结，左耳戴蜜腊珠、银耳圈等饰物。下着长裤，并因语言、地域不同而有大、中、小裤脚之分。'
    }],
    liangshan_new: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/liangshan-1_new.png?sign=8de8eb677ca960d2f158f47b9e757270&t=1582970235', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/liangshan-2_new.png?sign=93dec3c7425539fc118ec02f97fcc9bb&t=1582970253'],

    wumengshan: [{
      image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/wumenshan-1.jpg?sign=da3c02a1399584f6e524db59c3dc9cd6&t=1582367431'
    }, {
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/wumengshan-2.jpg?sign=eb662db6aa8cc88beea57e3e14d70f6a&t=1582367446'
    }],
    wumengshan_new: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/wumenshan-1.jpg?sign=da3c02a1399584f6e524db59c3dc9cd6&t=1582367431', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/wumengshan-2.jpg?sign=eb662db6aa8cc88beea57e3e14d70f6a&t=1582367446'],

    honghe: [{
      image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/honghe-1.jpg?sign=c48a71f94356655f51424f201125c741&t=1582371810',
      text: '女装多姿多彩，其款式既有长衫，也有长衣和短装，大多衣外套坎肩，普通着长裤，系围裙。头饰琳琅满目，尤喜以银泡或绒线作装饰。'
    }, {
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/honghe-2.jpg?sign=666aa2aaeeef1f210fb7288f9d4e35dc&t=1582371829',
        text: '本型男装各地基本上致，多为立领对襟短衣、宽裆裤；'
    }],
    honghe_new: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/honghe-1_new.png?sign=ebe86549b1915bb26f7c7f1a82aa4d27&t=1582979437', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/honghe-2_new.png?sign=d516cde6e7646943bf22b3c1e901355f&t=1582979455'],
    
    diandong: [{
      image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/diandong-1.jpg?sign=dc5406c55c908351f0abf35cc8001d33&t=1582372546',
      text: '女装以右襟、对襟上衣及长裤为主要款式，个别地区着裙'
    }, {
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/diandong-2.png?sign=47a4218eed58d041493ae315a793050c&t=1582372558',
        text: '男装上为对襟，外套坎肩，下穿宽裆裤。'
    }],
    diandong_new: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/diandong-1_new.png?sign=7038e6b569744fb37be3820ba352c0f3&t=1582981811', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/diandong-2_new.png?sign=c986a44d2ff5d1a16ae19be3ae52206c&t=1582981824'],

    dianxi: [{
      image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/dianxi-1.jpg?sign=4d19cf972d8d0bcc34f250a623b5f238&t=1582373814',
      text: '据《皇清职贡图》载，清初，滇西大理、蒙化（今巍山一带）的部分彝放，装束为：妇女皂布裹头，短衣长裙，跣足；亦习射猎。'
    }, {
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/dianxi-2.jpg?sign=43d0c223231b1e9ffcae6f0b791224d0&t=1582373826',
        text: '男子束发裹头……披毯衫，佩短九，以木弓药矢射鸟兽为食。'
    }],
    dianxi_new: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/dianxi-1_new.png?sign=42e2a2cf9c8e8fb1e0ea35996dff2d1d&t=1582983355', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/dianxi-2_new.png?sign=463bd135d9eda7da1c01363dd67a10fe&t=1582983378'],

    chuxiong: [{
      image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/chuxiong-1.jpg?sign=186447f8314c68553b591393ca7925cf&t=1582374541',
      text: '本型女装上衣稍短，花饰繁多，色彩艳丽。工艺以挑花、镶补、平绣为普遍，图案以花卉为主，二方连续纹样应用广泛；传统云纹、马樱花等，多装饰在上衣的胸前、盘肩等特写部位。妇女头饰繁多，大体可分为包帕、缠头、绣花帽之类，若细分却有40余种，而每种头饰又各具其鲜明的地域特点，成为某地彝族的标识。'
    }, {
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/chuxiong-2.jpg?sign=0b1e1984812e284c33e24e2da650ec4a&t=1582374556',
        text: '男子着短衣长裤，服饰日趋时装化。'
    }],
    chuxiong_new: ['https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/chuxiong-1_new.png?sign=872ac3fef5a9553fdf60898e7d4700d1&t=1582984863', 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/clothes/chuxiong-2_new.png?sign=520c568036c706875edf820065fc9e4a&t=1582984876'],
  },

  
  navigateToVideo(){
    wx.redirectTo({
      url: '/pages/map/video/clothes/clothes',
    })
  },


  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none'
    });
  },

  collapse(event) {
    this.setData({
      activeNames: event.detail
    });
  },

  collapse_a(event) {
    this.setData({
      activeName: event.detail
    });
  },

  preview(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.liangshan_new // 需要预览的图片http链接列表
    })
  },

  preview_1(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.wumengshan_new // 需要预览的图片http链接列表
    })
  },

  preview_2(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.honghe_new // 需要预览的图片http链接列表
    })
  },

  preview_3(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.diandong_new // 需要预览的图片http链接列表
    })
  },

  preview_4(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.dianxi_new // 需要预览的图片http链接列表
    })
  },

  preview_5(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.chuxiong_new // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
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