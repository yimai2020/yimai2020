// miniprogram/pages/language/word/detailPage_word/detailPage_word.js
const db = wx.cloud.database({
  env: 'fxy-onc8b'
}); 
const audio = wx.createInnerAudioContext();
const audio1 = wx.createInnerAudioContext();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    onplay:false,
    onplay_sentence:false,
    openid:'',
    letter: '',
    explain: '',
    pronunciation: '',
    sentence_yi: '',
    sentence_zhong: '',
    isCollected:null,
    isKnew:null,
    audio_word:'',
    audio_sentence:'',
    image:''
  },

  playAudio:function(){
    let that = this;
    audio.autoplay = true;
    audio.src = that.data.audio_word;
    console.log(audio.src);
    audio.play();
    audio.onPlay(() => {
      console.log('开始播放');
      that.setData({
        onplay:true
      })
    })
    audio.onEnded(() => {
      console.log('自动播放完毕');
      that.setData({
        onplay: false
      })
    })
    audio.onError((err) => {
      console.log(err);
    })
  },

  playAudio_sentence: function () {
    let that = this;
    audio1.autoplay = true;
    audio1.src = that.data.audio_sentence;
    console.log(audio1.src);
    audio1.play();
    audio1.onPlay(() => {
      console.log('句子开始播放');
      that.setData({
        onplay_sentence: true
      })
    })
    audio1.onEnded(() => {
      console.log('句子自动播放完毕');
      that.setData({
        onplay_sentence: false
      })
    })
    audio1.onError((err) => {
      console.log(err);
    })
  },

  collectionIcon:function(){//收藏单词&取消收藏
    let that = this
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected:isCollected
    })
    //提示用户
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon:'success'
    })

    if (isCollected){//收藏单词
      //将本词加入到已收藏集合中
      db.collection('wordlist_collected').add({
        data: {
          openid: that.data.openid,
          letter: that.data.letter,
          explain: that.data.explain,
          pronunciation: that.data.pronunciation,
          sentence_yi: that.data.sentence_yi,
          sentence_zhong: that.data.sentence_zhong,
          isCollected: true,
          isKnew: that.data.isKnew,
          audio_word: that.data.audio_word,
          audio_sentence:that.data.audio_sentence,
          image: that.data.image
        },
        success: res => {
          console.log(res);
        },
        fail: err => {
          console.log(err);
        }
      })

      //获取wordlist_unstudied中本词的id
      db.collection('wordlist_unstudied').where({
        pronunciation: that.data.pronunciation,
        openid: that.data.openid
      })
        .get({
          success(res) {
            console.log(res.data[0]._id)
            //更新未学习集合中isCollected的值为true
            db.collection('wordlist_unstudied')
              .doc(res.data[0]._id)
              .update({
                data: {
                  isCollected: true
                }
              }).then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
          }
        })

      //获取wordlist_studied中本词的id
      db.collection('wordlist_studied').where({
        pronunciation: that.data.pronunciation,
        openid: that.data.openid
      })
        .get({
          success(res) {
            console.log(res.data[0]._id)

            //更新已学习集合中isCollected的值为true
            db.collection('wordlist_studied')
              .doc(res.data[0]._id)
              .update({
                data: {
                  isCollected: true
                }
              }).then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
            }
        })

      //获取wordlist_knew中本词的id
      db.collection('wordlist_knew').where({
        pronunciation: that.data.pronunciation,
        openid: that.data.openid
      })
        .get({
          success(res) {
            console.log(res.data[0]._id)

            //更新已认识集合中isCollected的值为true
            db.collection('wordlist_knew')
              .doc(res.data[0]._id)
              .update({
                data: {
                  isCollected: true
                }
              }).then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
          }
        })
    }

    if (!isCollected) {//取消收藏

      db.collection('wordlist_collected').where({
        pronunciation: that.data.pronunciation,
        openid: that.data.openid
      })
        .get({//获取本词的id,以便进行删除操作
          success(res) {
            console.log(res.data[0]._id)

            //从收藏集合中移除本词
            db.collection('wordlist_collected')
              .doc(res.data[0]._id)
              .remove()
              .then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
          }
        })

      //获取wordlist_unstudied中本词的id
      db.collection('wordlist_unstudied').where({
        pronunciation: that.data.pronunciation
      })
        .get({
          success(res) {
            console.log(res.data[0]._id)
            //更新未学习集合中isCollected的值为false
            db.collection('wordlist_unstudied')
              .doc(res.data[0]._id)
              .update({
                data: {
                  isCollected: false
                }
              }).then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
          }
        })

      //获取wordlist_studied中本词的id
      db.collection('wordlist_studied').where({
        pronunciation: that.data.pronunciation,
        openid: that.data.openid
      })
        .get({
          success(res) {
            console.log(res.data[0]._id)

            //更新已学习集合中isCollected的值为false
            db.collection('wordlist_studied')
              .doc(res.data[0]._id)
              .update({
                data: {
                  isCollected: false
                }
              }).then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
          }
        })

      //获取wordlist_knew中本词的id
      db.collection('wordlist_knew').where({
        pronunciation: that.data.pronunciation,
        openid: that.data.openid
      })
        .get({
          success(res) {
            console.log(res.data[0]._id)

            //更新已认识集合中isCollected的值为false
            db.collection('wordlist_knew')
              .doc(res.data[0]._id)
              .update({
                data: {
                  isCollected: false
                }
              }).then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
          }
        })
    }
  },

  knewButtom:function(){//已认识
    let that = this;
    let isKnew = that.data.isKnew;
    if(!isKnew) { 
      //提示用户
      wx.showToast({
        title: '已认识',
        icon: 'success'
      })

      //在wordlist_unstudied寻找本词的_id
      db.collection('wordlist_unstudied').where({
        pronunciation: that.data.pronunciation,
        openid: that.data.openid
      })
        .get({
          success(res) {
            console.log(res.data[0]._id)
            //若找到，则将本词从wordlist_unstudied集合删除
            db.collection('wordlist_unstudied')
              .doc(res.data[0]._id)
              .remove()
              .then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
          }
        })

      //在wordlist_studied寻找本词的_id
      db.collection('wordlist_studied').where({
        pronunciation: that.data.pronunciation,
        openid: that.data.openid
      })
        .get({
          success(res) {
            console.log(res.data[0]._id)
            //若找到，则将本词从wordlist_studied集合删除
            db.collection('wordlist_studied')
              .doc(res.data[0]._id)
              .remove()
              .then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
          }
        })

      //在wordlist_collected寻找本词的_id
      db.collection('wordlist_collected').where({
        pronunciation: that.data.pronunciation,
        openid: that.data.openid
      })
        .get({
          success(res) {
            console.log(res.data[0]._id)
            //若找到，则在wordlist_collected集合中更改本词的isKnew属性为true
            db.collection('wordlist_collected')
              .doc(res.data[0]._id)
              .update({
                data: {
                  isKnew: true
                }
              }).then(res => {
                console.log(res);
              }).catch(err => {
                console.log(err);
              })
          }
        })
      //将本词添加到wordlist_knew集合中
      db.collection('wordlist_knew').add({
        data: {
          openid: that.data.openid,
          letter: that.data.letter,
          explain: that.data.explain,
          pronunciation: that.data.pronunciation,
          sentence_yi: that.data.sentence_yi,
          sentence_zhong: that.data.sentence_zhong,
          isCollected: that.data.isCollected,
          isKnew: true,
          audio_word: that.data.audio_word,
          audio_sentence: that.data.audio_sentence,
          image: that.data.image
        },
        success: res => {
          console.log(res);
          that.setData({//将本界面中的isKnew改为true
            isKnew:true
          })
        },
        fail: err => {
          console.log(err);
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接收word界面传来的参数，将传来的字符串分解，并赋值给当前界面的数据data
    console.log(options);
    var str = options.wordInfo;
    var wordInfo = str.split("|");
    console.log(wordInfo);
    this.setData({
      openid: wordInfo[0],
      letter: wordInfo[1],
      explain: wordInfo[2],
      pronunciation: wordInfo[3],
      sentence_yi: wordInfo[4],
      sentence_zhong: wordInfo[5],
      isCollected: wordInfo[6],//分解后为字符串，不是布尔类型
      isKnew: wordInfo[7],//分解后为字符串，不是布尔类型
      audio_word: decodeURIComponent(wordInfo[8]),
      audio_sentence: decodeURIComponent(wordInfo[9]),
      image: decodeURIComponent(wordInfo[10])
    })
    console.log(this.data.audio_word + this.data.audio_sentence);
    //将字符串型的isCollected转化成布尔值
    if(this.data.isCollected === 'false'){
      this.setData({
        isCollected:false
      })
    }
    if(this.data.isCollected === 'true'){
      this.setData({
        isCollected:true
      })
    }
    //将字符串型的isKnew转化成布尔值
    if (this.data.isKnew === 'false') {
      this.setData({
        isKnew: false
      })
    }
    if (this.data.isKnew === 'true') {
      this.setData({
        isKnew: true
      })
    }
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