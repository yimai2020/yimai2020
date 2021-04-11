// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    name_qinhan:[
      {
        img:'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/history-name/name-word/history-kunmin.png?sign=f4ed913d018b386257e787c29621595b&t=1582423594',
        detail:'昆明是西南夷数十个部落中货都范围最广、势力最强的一个族群，也是西南夷的主体族群之一，分布在东起滇池，西至澜沧江流域的广大地区，主要聚居在今滇西的洱海和保山一带。\n这一西南夷族群即为古滇王国的原住民，大量的历史、考古、民俗资料标明，昆明是形成近代彝族的轴心，近现代彝族主要源于昆明人。\n东汉时期，活动于今云南保山、大理洱海一带的昆明族群后裔建立了哀牢王国，并发展成为今天滇西地区的彝族。',
        background:'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/history-name/name-background/name-kunmin.jpg?sign=2cc9a27c7add959e12b33109a115d17b&t=1582423246',
      },{
        img:'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/history-name/name-word/history-xi.png?sign=17767aaac0bfc40b0bdc55f3792b792d&t=1582423604',
        detail: '巂(xī)是与昆明族群相生相伴的一个族群，两者渊源关系密切，同属一个族群，巂的活动范围、生活习俗与昆明族群基本一致。\n西汉时期武帝专设越巂郡来管理巂人区域。',
        background:'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/history-name/name-background/name-xi.jpg?sign=16522f701ff30a1174ee002be90f6764&t=1582423259'
      },{
        img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/history-name/name-word/history-sou.png?sign=f01c0d5ae728861091a2dd209555b51c&t=1582423617',
        detail: '至三国，史书把“巂”写为“叟”，叟成为西南夷北部、滇池地区的主体族群。“叟”作为西南地区最大的族群之一，在近现代部分彝族和彝语支名族还保留有相似称谓。',
        background:'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/history-name/name-background/name-sou.jpg?sign=e3ed3fe0f5e574a8f846657de69504c9&t=1582423274'
      }, {
        img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/history-name/name-word/history-bo.png?sign=a598727896b6f46006360865033221fc&t=1582423631',
        detail: '在“西南夷”中还有一个重要族群僰(bó)，僰人的农耕稻作文化非常发达，秦汉时期主要分布在云南昭通、贵州毕节、四川宜宾等毗邻地区。\n到如今，居住在文山丘北一带的彝族仍然自称为“僰人”，这证明了彝族与僰人间的密切关系。',
        background:'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/history-name/name-background/name-bo.jpg?sign=89c11a596099a157cd813fc522ad5b82&t=1582423285'
      }
    ],

    big_detail_1:[{
      left:'彝族先民建立"古莽国"(今洱海地区)和"昆明国")今金沙江畔)',
      middle: [{
        year: '公元前12世纪',
        img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
      }, {
          year: '公元前12世纪末',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
        }],
      right:'彝族部落首领杜宇入主蜀国（见《南阳国志》）'
    },{
      left: '彝族先民古建立滇王国(今滇池一带,支格阿龙时代)',
        middle: [{
          year: '公元前10世纪左右',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '公元前9―8世纪',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
      right: '彝族先民建立古卢、罗部落国家（即唐代所说的“卢鹿蛮”）'
    }],

    big_detail_2: [{
      left: '秦朝移民蜀地(中原王朝首次移民彝区)',
      middle: [{
        year: '公元前316年',
        img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
      }, {
          year: '公元前109年',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
        }],
      right: '汉征服滇部落联盟，设益州郡(今曲靖)'
    }, {
      left: '以彝族为首领爆发民族反抗斗争，失败后被杀3万余人',
        middle: [{
          year: '公元42―44年',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '公元51年',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
      right: '哀牢国归附东汉王朝'
    }],

    big_detail_3: [{
      left: '诸葛亮兵分三路南征彝区',
      middle: [{
        year: '公元225年',
        img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
      }, {
          year: '公元前109年',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
        }],
      right: '彝族爨氏统治地位确立'
    }],

    big_detail_4: [{
      left: '明遣傅友德、蓝玉、沐英南下远征彝族乌撒等部,同年彝族古代著名女政治家奢香夫人统治48部落(留下无数佳话)',
      middle: [{
        year: '1381年(洪武14年)',
        img:'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
      }, {
          year: '1658年―1840年',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
      }],
      right: '改土归流与彝族居住格局最终形成'
    }, {
        left: '帝国主义势力入侵和彝族社会发生巨大变化',
        middle: [{
          year: '1840年―1919年',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '1856年5月10日',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '"夷家兵马大元帅"李文学带领广大人民发动哀牢山大起义(1876年失败)'
      }, {
        left: '彝族辛亥革命主力干将安健病逝,同年龙云统一云南,开始建设"新云南"',
        middle: [{
          year: '1929年',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '1935年5月21日',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '刘伯承与凉山彝人首领果基小叶丹歃血为盟,为中国工农红军顺利通过彝区,取得长征胜利起到了重要作用'
      }],

    big_detail_5: [{
      left: '卢汉就任云南省主席',
      middle: [{
        year: '1945年12月1日',
        img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
      }, {
          year: '1949年12月9日',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
        }],
      right: '卢汉宣布:"云南起义了!"毛泽东、朱德从北京发来贺电,给予高度评价。'
    }, {
        left: '彝族地区获得了解放,中央人民政府在一九五零年派出了中央民族访问团,他们深入彝族山寨,受到彝族人民的热烈欢迎,加强了民族团结。',
        middle: [{
          year: '1950年',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '1951年5月12日',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '云南省峨山彝族自治县成立(彝族最早的自治地方)'
    }, {
        left: '凉山彝族自治州成立',
        middle: [{
          year: '1952年10月1日',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '1954年5月18日',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '江城哈尼族彝族自治县成立'
      }, {
        left: '威宁彝族回族苗族自治县成立',
        middle: [{
          year: '1954年11月11日',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '1956年9月20日',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '宁蒗彝族自治县成立'
      }, {
        left: '巍山彝族回族自治县成立',
        middle: [{
          year: '1956年11月9日',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '1956年12月31日',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '路南彝族自治县成立'
      }, {
        left: '红河哈尼族彝族自治州成立',
        middle: [{
          year: '1957年11月18日',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '1958年4月15日',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '楚雄彝族自治州成立'
      }, {
        left: '南涧彝族自治县成立',
        middle: [{
          year: '1965年11月27日',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '1979年12月20日',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '寻甸回族彝族自治县成立'
      }, {
        left: '元江哈尼族彝族傣族自治县成立',
        middle: [{
          year: '1980年11月22日',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '1980年11月25日',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '新平彝族傣族自治县成立'
      }, {
        left: '沙马拉毅开发出世界上第一套彝文输入法，并通过省级认定，使彝文成为我国第一种进入计算机的少数民族文字',
        middle: [{
          year: '1984年',
          img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-left.png?sign=71574361f36088d5d76d364241a663f9&t=1582427415'
        }, {
            year: '2000年',
            img: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/history/background/arrow-right.png?sign=4bdc6480abb031171779156183ee4355&t=1582427445'
          }],
        right: '路南彝族自治县改称石林彝族自治县'
      }],
    },

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

  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })

  },
  
  navigateToVideo(){
    wx.redirectTo({
      url: '/pages/map/video/history/history',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    getApp().loadFont();
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