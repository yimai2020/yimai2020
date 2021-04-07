// miniprogram/pages/language/word/word.js
const db = wx.cloud.database({
  env: 'fxy-onc8b'
}); 
let currentPage = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogue_unstudied:[],
    dialogue_studied:[],
    dialogue_collected:[],
    dialogue_knew:[],
    currentTab: 0,
    clientHeight:'',
    loadMore: false, 
    loadAll: false,

    currentOpenid: '',
    dialogue_unstudied_num: 0,
    dialogue_studied_num: 0,
    dialogue_knew_num: 0,
    dialogue_collected_num: 0 
  },

  //页面轮播功能函数
  swichNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  //页面轮播功能函数
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })

  },

  searchUnstudiedList: function (e) { //在dialogue_unstudied集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('dialogue_unstudied').where({
      openid:e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
          that.setData({ //设置本页面中dialogue_unstudied数组的数据，用于显示列表
            dialogue_unstudied: res.data
          })
        },
        fail(res) {
          console.log(res);
        }
      })
  },

  searchStudiedList: function (e) {//在dialogue_studied集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('dialogue_studied').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({//设置本页面中dialogue_studied数组的数据，用于显示列表
            dialogue_studied: res.data
            })
        }
      })
  },

  searchCollectedList: function (e) {//在dialogue_collected集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('dialogue_collected').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({//设置本页面中dialogue_collected数组的数据，用于显示列表
            dialogue_collected: res.data
            })
        }
      })
  },

  searchKnewList: function (e) {//在dialogue_knew集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('dialogue_knew').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({//设置本页面中dialogue_knew数组的数据，用于显示列表
              dialogue_knew: res.data
            })
        }
      })
  },

  navigateToDetail:function(e){//点击列表中的栏目，跳转到相应的详情页
    console.log(e);
    var openid = e.currentTarget.dataset.item.openid; 
    var sentence = e.currentTarget.dataset.item.sentence; 
    var explain = e.currentTarget.dataset.item.explain; 
    var structure = e.currentTarget.dataset.item.structure; 
    var illustration = e.currentTarget.dataset.item.illustration; 
    var pronunciation = e.currentTarget.dataset.item.pronunciation; 
    var isCollected = e.currentTarget.dataset.item.isCollected; 
    var isKnew = e.currentTarget.dataset.item.isKnew; 
    var audio_sentence = encodeURIComponent(e.currentTarget.dataset.item.audio_sentence); 
    var image = encodeURIComponent(e.currentTarget.dataset.item.image); 
    wx.navigateTo({ //带参数页面跳转
      url: "detailPage_dialogue/detailPage_dialogue?wordInfo=" + openid + "|" + sentence + "|" + explain + "|" + pronunciation + "|" + isCollected + "|" + isKnew + "|"  + audio_sentence + "|" + image+ "|"+ structure + "|"+illustration
    })
  },

  unstudied_studied:function(e){
    console.log(e.currentTarget.dataset.item._id);
    //删除未学词汇中被点击的词语
    db.collection('dialogue_unstudied')
      .doc(e.currentTarget.dataset.item._id)
      .remove()
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    
    //将被点击词汇加入到已学词汇
    db.collection('dialogue_studied').add({
      data: {
        openid: e.currentTarget.dataset.item.openid,
        sentence: e.currentTarget.dataset.item.sentence,
        explain: e.currentTarget.dataset.item.explain,
        structure: e.currentTarget.dataset.item.structure,
        illustration: e.currentTarget.dataset.item.illustration,
        pronunciation: e.currentTarget.dataset.item.pronunciation,
        isCollected: e.currentTarget.dataset.item.isCollected,
        isKnew: e.currentTarget.dataset.item.isKnew,
        audio_sentence: e.currentTarget.dataset.item.audio_sentence,
        image: e.currentTarget.dataset.item.image
      },
      success: res => {
        console.log(res);
      },
      fail: err => {
        console.log(err);
      }
    })
  },

  getOpenid: function () {
    let that = this;
    wx.cloud.callFunction({ //调用getOpenid云函数
      name: 'getOpenid',
      data:{},
      config:{env:"fxy-onc8b"}
    })
      .then(res => { //调用getOpenid成功进行以下操作
        console.log(res);
        that.setData({
          currentOpenid: res
        })
        that.searchUnstudiedList(res); //在dialogue_unstudied集合中查找openid为当前用户openid的数据
        that.searchStudiedList(res); //在dialogue_studied集合中查找openid为当前用户openid的数据
        that.searchCollectedList(res); //在dialogue_collected集合中查找openid为当前用户openid的数据
        that.searchKnewList(res); //在dialogue_knew集合中查找openid为当前用户openid的数据
      })
      .catch(err => { //调用getOpenid失败打印错误信息
        console.log(err);
      });
  },



  getAlldialogue_unstudied:function(e){
    let x = this.data.dialogue_unstudied_num + 20
    console.log(x)
    let old_data = this.data.dialogue_unstudied
    db.collection('dialogue_unstudied').skip(x) // 限制返回数量为 20 条
      .where({
        openid: e.result.openid
      })
      .get()
      .then(res => {
        // 这里是从数据库获取文字进行转换 变换显示（换行符转换） 
        res.data.forEach((item, i) => {
          res.data[i].content = res.data[i].content;
        })

        // 利用concat函数连接新数据与旧数据
        // 并更新num 
        this.setData({
          dialogue_unstudied: old_data.concat(res.data),
          dialogue_unstudied_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },
  //显示已学文章
  getAlldialogue_studied: function (e) {
    let x = this.data.dialogue_studied_num + 20
    console.log(x)
    let old_data = this.data.dialogue_studied
    db.collection('dialogue_studied').skip(x) // 限制返回数量为 20 条
      .where({
        openid: e.result.openid
      })
      .get()
      .then(res => {
        // 这里是从数据库获取文字进行转换 变换显示（换行符转换） 
        res.data.forEach((item, i) => {
          res.data[i].content = res.data[i].content;
        })

        // 利用concat函数连接新数据与旧数据
        // 并更新num 
        this.setData({
          dialogue_studied: old_data.concat(res.data),
          dialogue_studied_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },

  
  //显示已认识文章
  getAlldialogue_knew: function (e) {
    let x = this.data.dialogue_knew_num + 20
    console.log(x)
    let old_data = this.data.dialogue_knew
    db.collection('dialogue_knew').skip(x) // 限制返回数量为 20 条
      .where({
        openid: e.result.openid
      })
      .get()
      .then(res => {
        // 这里是从数据库获取文字进行转换 变换显示（换行符转换） 
        res.data.forEach((item, i) => {
          res.data[i].content = res.data[i].content;
        })

        // 利用concat函数连接新数据与旧数据
        // 并更新num 
        this.setData({
          dialogue_knew: old_data.concat(res.data),
          dialogue_knew_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },
  //显示已收藏文章
  getAlldialogue_collected: function (e) {
    let x = this.data.dialogue_collected_num + 20
    console.log(x)
    let old_data = this.data.dialogue_collected
    db.collection('dialogue_collected').skip(x) // 限制返回数量为 20 条
      .where({
        openid: e.result.openid
      })
      .get()
      .then(res => {
        // 这里是从数据库获取文字进行转换 变换显示（换行符转换） 
        res.data.forEach((item, i) => {
          res.data[i].content = res.data[i].content;
        })

        // 利用concat函数连接新数据与旧数据
        // 并更新num 
        this.setData({
          dialogue_collected: old_data.concat(res.data),
          dialogue_collected_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({//获取设备的宽高，用于轮播页面功能
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
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
    this.getOpenid()//获取用户的openid
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
    wx.showLoading({
      title: '刷新中！',
      duration: 1000
    })
    console.log(this.data);
    this.getAlldialogue_unstudied(this.data.currentOpenid);
    this.getAlldialogue_studied(this.data.currentOpenid);
    this.getAlldialogue_knew(this.data.currentOpenid);
    this.getAlldialogue_collected(this.data.currentOpenid);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})