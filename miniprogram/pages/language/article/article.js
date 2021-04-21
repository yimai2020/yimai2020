// miniprogram/pages/language/article/article.js
const db = wx.cloud.database({
  env: 'fxy-onc8b'
}); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article_unstudied: [],
    article_studied: [],
    article_collected: [],
    article_knew: [],
    currentTab: 0,
    currentOpenid: '',
    article_unstudied_num:0,
    article_studied_num: 0,
    article_knew_num: 0,
    article_collected_num: 0

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
  navigateToDetail: function (e) {//点击列表中的栏目，跳转到相应的详情页
    console.log(e.currentTarget.dataset.item);
    var openid = e.currentTarget.dataset.item.openid;
    var title = e.currentTarget.dataset.item.title;
    var num = e.currentTarget.dataset.item.num;
    var letter = e.currentTarget.dataset.item.letter;
    var explain = e.currentTarget.dataset.item.explain;
    var pronunciation = e.currentTarget.dataset.item.pronunciation;
    var meaning = e.currentTarget.dataset.item.meaning;
    var isCollected = e.currentTarget.dataset.item.isCollected;
    var isKnew = e.currentTarget.dataset.item.isKnew;
    console.log(meaning);
    wx.navigateTo({ //带参数页面跳转
      url: "detailPage_article/detailPage_article?articleInfo=" + openid + "|" + title + "|" + num + "|" + letter + "|" + explain + "|" + meaning + "|" + isCollected + "|" + isKnew + "|" + pronunciation 
    })
  },

  unstudied_studied: function (e) {//删除未学文章中被点击的文章
    db.collection('article_unstudied')
      .doc(e.currentTarget.dataset.item._id)
      .remove()
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })

    //将被点击文章加入到已学
    db.collection('article_studied').add({
      data: {
        openid: e.currentTarget.dataset.item.openid,
        title:e.currentTarget.dataset.item.title,
        num:e.currentTarget.dataset.item.num,
        letter: e.currentTarget.dataset.item.letter,
        explain: e.currentTarget.dataset.item.explain,
        pronunciation: e.currentTarget.dataset.item.pronunciation,
        meaning:e.currentTarget.dataset.item.meaning,
        isCollected: e.currentTarget.dataset.item.isCollected,
        isKnew: e.currentTarget.dataset.item.isKnew
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
        that.searchUnstudied(res); //在article_unstudied集合中查找openid为当前用户openid的数据
        that.searchStudied(res); //在article_studied集合中查找openid为当前用户openid的数据
        that.searchCollected(res); //在article_collected集合中查找openid为当前用户openid的数据
        that.searchKnew(res); //在article_knew集合中查找openid为当前用户openid的数据
      })
      .catch(err => { //调用getOpenid失败打印错误信息
        console.log(err);
      });
  },

  searchUnstudied: function (e) { //在article_unstudied集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('article_unstudied').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({ //设置本页面中article_unstudied数组的数据，用于显示列表
              article_unstudied: res.data
            })
        }
      })
  },

  searchStudied: function (e) {//在article_studied集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('article_studied').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({//设置本页面中article_studied数组的数据，用于显示列表
              article_studied: res.data
            })
        }
      })
  },

  searchCollected: function (e) {//在article_collected集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('article_collected').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({//设置本页面中article_collected数组的数据，用于显示列表
              article_collected: res.data
            })
        }
      })
  },

  searchKnew: function (e) {//在article_knew集合中查找openid为当前用户openid的数据
    var that = this;
    db.collection('article_knew').where({
      openid: e.result.openid
    })
      .get({
        success(res) {
          console.log(res.data),
            that.setData({//设置本页面中article_knew数组的数据，用于显示列表
              article_knew: res.data
            })
        }
      })
  },
  //显示未学文章
  getAllarticle_unstudied:function(e){
    let x = this.data.article_unstudied_num + 20
    console.log(x)
    let old_data = this.data.article_unstudied
    db.collection('article_unstudied').skip(x) // 限制返回数量为 20 条
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
          article_unstudied: old_data.concat(res.data),
          article_unstudied_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },
  //显示已学文章
  getAllarticle_studied: function (e) {
    let x = this.data.article_studied_num + 20
    console.log(x)
    let old_data = this.data.article_studied
    db.collection('article_studied').skip(x) // 限制返回数量为 20 条
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
          article_studied: old_data.concat(res.data),
          article_studied_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },

  
  //显示已认识文章
  getAllarticle_knew: function (e) {
    let x = this.data.article_knew_num + 20
    console.log(x)
    let old_data = this.data.article_knew
    db.collection('article_knew').skip(x) // 限制返回数量为 20 条
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
          article_knew: old_data.concat(res.data),
          article_knew_num: x
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
    console.log('circle 下一页');
  },
  //显示已收藏文章
  getAllarticle_collected: function (e) {
    let x = this.data.article_collected_num + 20
    console.log(x)
    let old_data = this.data.article_collected
    db.collection('article_collected').skip(x) // 限制返回数量为 20 条
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
          article_collected: old_data.concat(res.data),
          article_collected_num: x
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
    this.getAllarticle_unstudied(this.data.currentOpenid);
this.getAllarticle_studied(this.data.currentOpenid);
    this.getAllarticle_knew(this.data.currentOpenid);
this.getAllarticle_collected(this.data.currentOpenid);

  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})