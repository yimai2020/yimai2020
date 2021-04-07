// pages/architecture/architecture.js
var app = getApp(); 
Page({
  nShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    animationData: {},
    cardInfoList: [{
      cardUrl: '../../images/bg.PNG',
      cardImages1: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-1-1.jpg?sign=ff5531a30b1f092ffc49a9f81570b9d1&t=1583033139',
      cardImages2: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-1-2.PNG?sign=b80ccd4a67c0807754996eca93937c91&t=1583033158',
      cardImages3: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-1-3.PNG?sign=b80ccd4a67c0807754996eca93937c91&t=1583033158',
      cardInfo: {
        cardTitle: '风篱房',
        cardInfoMes: ['风篱房是彝族建筑形式中较古老的一种居住形式，是彝族建筑史上的一大发明和进步。今撒尼人建盖的牛车棚、舂碓棚就是古代风篱的延续和发展。风篱的建筑结构特别简单，用两根上端带杈的树杆插入土中做柱子，用一根树杆横搭在两根柱子的树杈上做梁，再用数根树杆并排搭在梁上，一端落地，成一面坡式的墙，其上覆盖树枝、茅草之类的东西，用来遮风避雨。']
      }
    }, {
        cardUrl: '../../images/bg.PNG',
        cardImages1: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-2-1.jpg?sign=ff5531a30b1f092ffc49a9f81570b9d1&t=1583033139',
        cardImages2: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-2-2.jpg?sign=b80ccd4a67c0807754996eca93937c91&t=1583033158',
        cardImages3: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-2-3.jpg?sign=b80ccd4a67c0807754996eca93937c91&t=1583033158',
      cardInfo: {
        cardTitle: '土库房',
        cardInfoMes: ['土库房，俗称"土掌房"，距今已有500多年的历史。一般以土、木、石为原料，屋顶平坦，其构造是以块石做墙基，用土坯或泥土夯墙，无柱无梁，在筑好的墙上直接铺上一层木棍、木板或木条，覆盖上茅草，再铺上一层不含杂质的泥土，洒水抿捶，形成平台。土库房的特点是结构简单，保暖防寒，防火性能好，且结实牢固，酷似碉堡，故又有"碉楼""碉房"之称。'] 
      }
    }, {
        cardUrl: '../../images/bg.PNG',
        cardImages1: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-3-1.jpg?sign=ff5531a30b1f092ffc49a9f81570b9d1&t=1583033139',
        cardImages2: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-3-2.jpg?sign=b80ccd4a67c0807754996eca93937c91&t=1583033158',
        cardImages3: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-3-3.jpg?sign=b80ccd4a67c0807754996eca93937c91&t=1583033158',
      cardInfo: {
        cardTitle: '茅草房',
        cardInfoMes: ['茅草房一般为土木结构，以石块垫基，夯土筑墙，用结实的圆木或者方木为柱。茅草房为双面坡斜顶，用草盖顶。盖草顶时，先打尽草绒，泼上冷水让风吹，接着放火燎茅草，燎去易燃的部分，浸透水的部分因风吹不干而不被火燃烧，形成结实的草顶，并在山墙上盖石板。能在发生火灾时让山墙挡住风力和火苗，控制火势，尽量避免火舌乱窜，殃及四周邻居。']}
      },{
        cardUrl: '../../images/bg.PNG',
        cardImages1: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-4-1.jpg?sign=ff5531a30b1f092ffc49a9f81570b9d1&t=1583033139',
        cardImages2: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-4-2.jpg?sign=b80ccd4a67c0807754996eca93937c91&t=1583033158',
        cardImages3: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/architecture/arc-2-4-3.jpg?sign=b80ccd4a67c0807754996eca93937c91&t=1583033158',
        cardInfo: {
          cardTitle: '篱笆房',
          cardInfoMes: ['篱笆房现在主要分布在圭山乡的合和村一带。这种房屋结构与普通现代瓦房相同，多为两层，上层干燥通风，一般用于存储粮食，下层比较温暖，用于住人，有的人家也用来关牲畜。屋顶一般盖以瓦片，以条石做墙基，竹条，树条或藤条编织成篱笆，再糊上泥，涂刷平坦成为墙壁。篱笆房的特点是结构简单，建造时就地取材，节约成本，且具有地域特色。']
  }
    }]
  },
  //事件处理函数
  slidethis: function (e) {
    console.log(e);
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
    });
    var self = this;
    this.animation = animation;
    this.animation.translateY(-420).rotate(-5).translateX(0).step();
    this.animation.translateY(0).translateX(0).rotate(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(function () {
      var cardInfoList = self.data.cardInfoList;
      var slidethis = self.data.cardInfoList.shift();
      self.data.cardInfoList.push(slidethis);
      self.setData({
        cardInfoList: self.data.cardInfoList,
        animationData: {}
      });
    }, 350);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    

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
      delay: 10,
      transformOrigin: '95% 95%',
      success: function (res) {
      }
    });
    setInterval(function () {
      if (circleCount % 2 == 0) {
        this.animationMiddleHeaderItem.scale(1.1).step();
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