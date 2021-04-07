// miniprogram/pages/language/word/word.js
const db = wx.cloud.database({
  env: 'fxy-onc8b'
});  //用db代替数据库
let currentPage = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordlist_unstudied:[],
    wordlist_studied:[],
    wordlist_collected:[],
    wordlist_knew:[],
    currentTab: 0,
    clientHeight:'',
    loadMore: false, 
    loadAll: false ,

    currentOpenid:'',
    word_unstudied_num: 0,
    word_studied_num: 0,
    word_knew_num: 0,
    word_collected_num: 0
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

  searchUnstudiedList: function (e) { //在wordlist_unstudied集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('wordlist_unstudied').where({
      openid:e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
          that.setData({ //设置本页面中wordlist_unstudied数组的数据，用于显示列表
            wordlist_unstudied: res.data
          })
        },
        fail(res) {
          console.log(res);
        }
      })
  },

  searchStudiedList: function (e) {//在wordlist_studied集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('wordlist_studied').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({//设置本页面中wordlist_studied数组的数据，用于显示列表
            wordlist_studied: res.data
            })
        }
      })
  },

  searchCollectedList: function (e) {//在wordlist_collected集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('wordlist_collected').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({//设置本页面中wordlist_collected数组的数据，用于显示列表
            wordlist_collected: res.data
            })
        }
      })
  },

  searchKnewList: function (e) {//在wordlist_knew集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('wordlist_knew').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({//设置本页面中wordlist_knew数组的数据，用于显示列表
              wordlist_knew: res.data
            })
        }
      })
  },

  //显示未学文章
  getAllword_unstudied: function (e) {
    let x = this.data.word_unstudied_num + 20
    console.log(e)
    let old_data = this.data.wordlist_unstudied
    db.collection('wordlist_unstudied').skip(x) // 限制返回数量为 20 条
      .where({
        openid: e.result.openid
      })
      .get()
      .then(res => {
        // 这里是从数据库获取文字进行转换 变换显示（换行符转换） 
        res.data.forEach((item, i) => {
          console.log(item);
          res.data[i].content = res.data[i].content;
        })

        // 利用concat函数连接新数据与旧数据
        // 并更新num 
        this.setData({
          wordlist_unstudied: old_data.concat(res.data),
          word_unstudied_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },
  //显示已学文章
  getAllword_studied: function (e) {
    let x = this.data.word_studied_num + 20
    console.log(x)
    let old_data = this.data.wordlist_studied
    db.collection('wordlist_studied').skip(x) // 限制返回数量为 20 条
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
          wordlist_studied: old_data.concat(res.data),
          word_studied_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },


  //显示已认识文章
  getAllword_knew: function (e) {
    let x = this.data.word_knew_num + 20
    console.log(x)
    let old_data = this.data.wordlist_knew
    db.collection('wordlist_knew').skip(x) // 限制返回数量为 20 条
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
          wordlist_knew: old_data.concat(res.data),
          word_knew_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },
  //显示已收藏文章
  getAllword_collected: function (e) {
    let x = this.data.word_collected_num + 20
    console.log(x)
    let old_data = this.data.wordlist_collected
    db.collection('wordlist_collected').skip(x) // 限制返回数量为 20 条
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
          wordlist_collected: old_data.concat(res.data),
          word_collected_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },

  navigateToDetail:function(e){//点击列表中的栏目，跳转到相应的详情页
    console.log(e);
    var openid = e.currentTarget.dataset.item.openid; 
    var letter = e.currentTarget.dataset.item.letter; 
    var explain = e.currentTarget.dataset.item.explain; 
    var pronunciation = e.currentTarget.dataset.item.pronunciation; 
    var sentence_yi = e.currentTarget.dataset.item.sentence_yi; 
    var sentence_zhong = e.currentTarget.dataset.item.sentence_zhong; 
    var isCollected = e.currentTarget.dataset.item.isCollected; 
    var isKnew = e.currentTarget.dataset.item.isKnew; 
    var audio_word = encodeURIComponent(e.currentTarget.dataset.item.audio_word); 
    var audio_sentence = encodeURIComponent(e.currentTarget.dataset.item.audio_sentence); 
    var image = encodeURIComponent(e.currentTarget.dataset.item.image); 
    wx.navigateTo({ //带参数页面跳转
      url: "detailPage_word/detailPage_word?wordInfo=" + openid + "|" + letter + "|" + explain + "|" + pronunciation + "|" + sentence_yi + "|" + sentence_zhong + "|" + isCollected + "|" + isKnew + "|" + audio_word + "|" + audio_sentence + "|" + image 
    })
  },

  unstudied_studied:function(e){
    console.log(e.currentTarget.dataset.item._id);
    //删除未学词汇中被点击的词语
    db.collection('wordlist_unstudied')
      .doc(e.currentTarget.dataset.item._id)
      .remove()
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    
    //将被点击词汇加入到已学词汇
    db.collection('wordlist_studied').add({
      data: {
        openid: e.currentTarget.dataset.item.openid,
        letter: e.currentTarget.dataset.item.letter,
        explain: e.currentTarget.dataset.item.explain,
        pronunciation: e.currentTarget.dataset.item.pronunciation,
        sentence_yi: e.currentTarget.dataset.item.sentence_yi,
        sentence_zhong: e.currentTarget.dataset.item.sentence_zhong,
        isCollected: e.currentTarget.dataset.item.isCollected,
        isKnew: e.currentTarget.dataset.item.isKnew,
        audio_word: e.currentTarget.dataset.item.audio_word,
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
          currentOpenid:res
        })
        that.searchUnstudiedList(res); //在wordlist_unstudied集合中查找openid为当前用户openid的数据
        that.searchStudiedList(res); //在wordlist_studied集合中查找openid为当前用户openid的数据
        that.searchCollectedList(res); //在wordlist_collected集合中查找openid为当前用户openid的数据
        that.searchKnewList(res); //在wordlist_knew集合中查找openid为当前用户openid的数据
      })
      .catch(err => { //调用getOpenid失败打印错误信息
        console.log(err);
      });
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
    this.getAllword_unstudied(this.data.currentOpenid);
    this.getAllword_studied(this.data.currentOpenid);
    this.getAllword_knew(this.data.currentOpenid);
    this.getAllword_collected(this.data.currentOpenid);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})