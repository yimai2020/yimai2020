var app = getApp(); 
Page({
  data: {
    startX: 0,
    endX: 0,
    iCenter: 3,
    datas: [{
      id: 1,
      zIndex: 2,
      opacity: 0,
      left: -40,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/diet/diet-3-3.jpg?sign=42124ed00cb0040c2f719967a4ed23af&t=1588258733",
      title: '彝族风味血大肠',
      mes: '彝族风味血大肠也是凉山彝族地区最为常见的一种食品，在彝族村寨冬季有宰年猪的习俗，凡宰杀过年猪后，都要加工制作血大肠。把刚宰杀的年猪的猪血、加上酒米、猪杂油，食盐、辣椒、花椒、木姜子等调料，拌匀后灌进猪大肠，两头用细绳拴紧，放进开水锅里煮熟，待冷后切成节食用。',
      animation: null
    },
    {
      id: 2,
      zIndex: 4,
      opacity: 0.2,
      left: 0,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/diet/diet-3-5.jpg?sign=5e9aa00ebc7a5552c28f36c6cca0535e&t=1588258761",
      title: '圆根',
      mes: '彝族居住的地区，自然条件复杂，农业发达。凉山大部分地区、滇西北小凉山及贵州的威宁县一带，最古老的蔬菜为圆根。圆根适应秋冬生长，彝人采用腌制的办法，把圆根叶子煮熟后连汤盛入陶瓷坛子中发酵，变成酸菜长期贮存。在单调的腊肉汤、洋芋汤、鸡汤中放进少许酸菜，让人赞不绝口。',
      animation: null
    },
    {
      id: 3,
      zIndex: 6,
      opacity: 0.4,
      left: 40,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/diet/diet-4-3.jpg?sign=3d6d5c85574c909b8fa05eb082db0f76&t=1588258849",
      title: '荞麦',
      mes: '在凉山地区，彝族人民多以荞麦为主食。凉山地区的气候和土质适合栽种荞麦，苦荞的产量和营养价值都高于甜荞，所以彝族地区普遍栽种苦荞。苦荞具有不易虫蚀、食用方法多、可与多种食物配制、制成熟食后不易变质等特点。据有关专家暨机构研究，荞麦还对多种疾病具有防治功效。',
      animation: null
    },
    {
      id: 4,
      zIndex: 8,
      opacity: 1,
      left: 25,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/diet/diet-4-1.jpg?sign=0231087b30a03b55f70af0a04be98a00&t=1588259334",
      title: '',
      mes: '彝族居住的地区，地理环境和自然条件复杂，植物和动物资源丰富。彝族人的饮食文化，有特别的民族习惯，也有山里的芬芳。彝族凡有客至，必杀牲待客，并根据来客的身份、亲疏分别以牛、猪、鸡等相待，主人先以酒敬客，然后再制作各种菜肴。 彝族人民由于自己所处的特殊的地理位置，形成了自己独特的饮食文化。',
      animation: null
    },
    {
      id: 5,
      zIndex: 6,
      opacity: 0.4,
      left: 120,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/diet/diet-1-4.jpg?sign=c12f3aa64a0c61f440be8abfc6c0e0cf&t=1588258554",
      title: '转转酒',
      mes: '彝家历来好客，劝酒一片真诚。喝酒时不分生人熟人，席地而坐，递传酒杯，依次饮用，所以称作“转转酒”，相传转转酒是彝族最正统的酒文化。彝族人好酒，但讨厌酗酒之人，喝酒时绝没有“干杯”一说，不喝的酩酊大醉才是有教养之人，有人敬酒要接下，不能喝的尝一下就可以了。',
      animation: null
    },
    {
      id: 6,
      zIndex: 4,
      opacity: 0.2,
      left: 160,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/diet/diet-2-2.jpg?sign=327c025b7ca50edffe6a8a41bf6eb02f&t=1588258647",
      title: '秆秆酒',
      mes: '彝族秆秆酒，其酿造历史悠久，饮法别具风格。几人对饮时，杆杆酒共贮于一坛内，各执酒竿一支。饮用秆秆酒最为特别的部分是用秆秆饮用。秆秆一般用黄竹制成，黄竹节烙通，在一竹片上钻一个小眼，插入一根小竹条，喝酒时，将竹片横放在酒坛口，小竹条朝下，即成萨玛（相当于一杯酒）。',
      animation: null
    },
    {
      id: 7,
      zIndex: 2,
      opacity: 0.0,
      left: 200,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/diet/diet-3-2.jpg?sign=0c401e3b97cab0453624b6da10e7c0ba&t=1588258703",
      title: '坨坨肉',
      mes: '在凉山彝族的饮食特色食品中，坨坨肉最有名，彝语称“乌色色脚”， 意思是猪肉块块。“坨坨肉”其外观如“坨坨”，一块肉就有一个拳头大小。肥肉不腻，瘦肉脆嫩，香鲜可口。彝族人以坨坨肉让人感到了他们的热情和大方，看到他们粗犷豪放的一面。除猪肉外，牛、羊都可制作坨坨肉。',
      animation: null
    },
    ],
    order: []
  },
  
  
  navigateToVideo(){
    wx.redirectTo({
      url: '/pages/map/video/diet/diet',
    })
  },

  /**
   * 页面的初始数据
   */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.__set__();
    this.move();
    
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

  },
  move: function () {
    var datas = this.data.datas;
    /*图片分布*/
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i];
      var animation = wx.createAnimation({
        duration: 200
      });
      animation.translateX(data.left).step();
      this.setData({
        ["datas[" + i + "].animation"]: animation.export(),
        ["datas[" + i + "].zIndex"]: data.zIndex,
        ["datas[" + i + "].opacity"]: data.opacity,
      })
    }
  },
  /**左箭头 */
  left: function () {
    //
    var last = this.data.datas.pop(); //获取数组的最后一个
    this.data.datas.unshift(last);//放到数组的第一个
    var orderFirst = this.data.order.shift();
    this.data.order.push(orderFirst);
    this.move();
  },
  /** */
  right: function () {
    var first = this.data.datas.shift(); //获取数组的第一个
    this.data.datas.push(first);//放到数组的最后一个位置
    var orderLast = this.data.order.pop();
    this.data.order.unshift(orderLast);
    this.move();
  },
  /**点击某项 */
  choose: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var order = that.data.order;
    var index = 0;
    for (var i = 0; i < order.length; i++) {
      if (id == order[i]) {
        index = i;
        break;
      }
    }
    if (index < that.data.iCenter) {
      for (var i = 0; i < that.data.iCenter - index; i++) {
        this.data.datas.push(this.data.datas.shift()); //获取第一个放到最后一个
        this.data.order.unshift(this.data.order.pop());
        // this.right() 
      }
    } else if (index > that.data.iCenter) {
      for (var i = 0; i < index - that.data.iCenter; i++) {
        this.data.datas.unshift(this.data.datas.pop()); //获取最后一个放到第一个
        this.data.order.push(this.data.order.shift());
        // this.left();
      }
    }
    this.move();
  },
  /**新的排列复制到新的数组中 */
  __set__: function () {
    var that = this;
    var order = that.data.order;
    var datas = that.data.datas;
    for (var i = 0; i < datas.length; i++) {
      that.setData({
        ["order[" + i + "]"]: datas[i].id
      })
    }
  },
  //手指触发开始移动
  moveStart: function (e) {
    console.log(e);
    var startX = e.changedTouches[0].pageX;
    this.setData({
      startX: startX
    }); 
  },
  //手指触摸后移动完成触发事件
  moveItem: function (e) {
    console.log(e);
    var that = this;
    var endX = e.changedTouches[0].pageX;
    this.setData({
      endX: endX
    });
    //计算手指触摸偏移剧距离
    var moveX = this.data.startX - this.data.endX;
    //向左移动
    if (moveX > 20) {
      this.left();
    }
    if (moveX < -20) {
      this.right();
    }
  },
})
