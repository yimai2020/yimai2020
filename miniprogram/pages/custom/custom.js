// pages/custom/custom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startX: 0,
    endX: 0,
    iCenter: 3,
    datas: [
    {
      id:1,
      zIndex: 8,
      opacity: 1,
      left: 25,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/custom/custom-1-2.jpg?sign=60cbbdca66c2b273b71e421cc56cbe9f&t=1587195233",
      title:'礼仪',
      mes: '在长幼、男女、主客之间，彝族有严格的礼俗。途遇长辈，晚辈须待立一侧，让长者先行;长辈入室须让其上座，余再依次而坐;吃饭时，长辈坐上方，下辈依次坐两旁和下方，并侍候长辈，为其添饭、夹菜。客人入室让上座，主人坐在客人左边，小辈坐在客人对面。禁穿草鞋上火炕床; 上楼要脱掉鞋子; 不能用脚踩门槛，或坐在门槛上。',
      animation: null
    },
    {
      id:2,
      zIndex: 6,
      opacity: 0.4,
      left: 40,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/custom/custom-1-5.jpg?sign=60cbbdca66c2b273b71e421cc56cbe9f&t=1587195233",
      title:'毕摩文化',
      mes:'毕摩是彝族社会中智慧的集大成者，相传毕摩的祖先是人类始祖。在彝族人民的心目中，毕摩是整个彝族社会中的知识分子，是彝族文化的维护者和传播者。他们的职能也是丰富多彩、各种各样。在以祖先崇拜为核心的彝族文化发展史中，以家支和宗族为单位来进行的祭祀活动主要由毕摩来主持；除此外，毕摩还担任谱系传承，治疗疫病等责任。',
      animation: null
    },
    {
      id:3,
      zIndex: 4,
      opacity: 0.2,
      left: -40,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/custom/custom-1-6.jpg?sign=60cbbdca66c2b273b71e421cc56cbe9f&t=1587195233",
      title:'婚嫁禁忌',
      mes: '忌单月提亲、定亲，犯之则预示不成或中途分手；忌嫁娶犯红沙日（农历三月，六月、九月，十二月四个季月之丑日)；忌发亲时父母目送；忌新娘未满月走亲串门；忌进亲时新娘面向太白星和天狗星，若犯之则预示子女夭折；忌新娘上马时，马拉屎或狂奔乱跳，预示夫妻不到头或家庭破败。忌雷雨嫁娶，嫁娶遇雷鸣电闪是大凶之兆。',
      animation: null
    },
    {
      id: 7,
      zIndex: 2,
      opacity: 0.0,
      left: 200,
      iamge: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/custom/custom-1-7.jpg?sign=60cbbdca66c2b273b71e421cc56cbe9f&t=1587195233",
      title:'丧葬禁忌',
      mes: '父母去世当年，忌办喜事。孝子在3年内遇事须忍让，忌招惹是非，打架斗殴。忌杀牲狩猎，因已故父母不定直接投生鸟兽动物转世为人，可能几经周折方成。忌犯重丧。忌孝子在吊丧期坐凳睡床、忌坟向过人房顶。忌安葬上土时有恶雷。忌安葬日犯执子、孙、客。忌孝子泪滴入棺内和坟墓里，更忌泪落在死者尸体上。忌抬丧途中跌在棺木之下。',
      animation: null
    },
    ],
    order: []
  },
  
  /*data: {
    active: 0
  },*/

  
  navigateToVideo(){
    wx.redirectTo({
      url: '/pages/map/video/custom/custom',
    })
  },

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