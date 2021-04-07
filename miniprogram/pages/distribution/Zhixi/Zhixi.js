// miniprogram/pages/distribution/Zhixi/Zhixi.js
var pictureNum = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: [{ id: 0, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_1.png?sign=6f491f2b1ab3721841c85bcf2f53e09e&t=1587215035" }, { id: 1, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_2.png?sign=4a15466a90a5b0f2109e62361641b3e8&t=1587215044" }, { id: 2, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_3.png?sign=ea7677e9af4db966542be6b0c4f36792&t=1587215055" }, { id: 3, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_4.png?sign=d9c4d691c826e5f451c065c7facf40d6&t=1587215065" }, { id: 4, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_5.png?sign=e60b72e31b7bfa5dd68c55fc3f3667c3&t=1587215071" }, { id: 5, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_6.png?sign=180c87e5950c06f937c6f02901a7cab6&t=1587215196" }, { id: 6, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_7.png?sign=a22bfc6b98116c1bfa0ea27773b56024&t=1587215076" }, { id: 7, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_8.png?sign=4366b6cd2e4cb969cc4cd08335a6d33d&t=1587215083" }, { id: 8, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_9.png?sign=b0de2b1d8ed29f1ec5f3ee4379839156&t=1587215089" }, { id: 9, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_10.png?sign=11871ff995d26190e7155d46994d2f5c&t=1587215095" }, { id: 10, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_11.png?sign=4368b22a8399150d3bf87d97c6d36274&t=1587215100" }, { id: 11, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_12.png?sign=603d41231d2e1e91e2b85636b9b3bcae&t=1587215109" }, { id: 12, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_13.png?sign=ad4d1e54b07083669d150b3c0746ad0e&t=1587215115" }, { id: 13, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_14.png?sign=c815d474c2ffda7d4275578e29801ca0&t=1587215120" }, { id: 14, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_15.png?sign=4d94c4d159789e4ffaaad4dc8c6f0739&t=1587215127" }, { id: 15, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_16.png?sign=5001b343d94c3f74d57844d5dedd7f5e&t=1587215132" }, { id: 16, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_17.png?sign=c3df982e3a7a44fd22b1ae7d4a6abe21&t=1587215139" }, { id: 17, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_18.png?sign=e42098ccc18ba17ec5c3aaeda444b9f3&t=1587215144" }, { id: 18, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_19.png?sign=b75fadb6e1c2ba3e829ecb1591d012b2&t=1587215151" }, { id: 19, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_20.png?sign=9fd2c61bb581513fba735c8ee1459bec&t=1587215156" }, { id: 20, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_21.png?sign=89602a3732a57d07049c251cee60e9da&t=1587215162" }, { id: 21, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_22.png?sign=6faac46bc46df8b38fc64a161907c921&t=1587215167" }, { id: 22, src: "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_23.png?sign=998bae1a237d22d970a8eec706a29e57&t=1587215172" }, { id: 23, src:"https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/name_24.png?sign=96efc30727903ef6b18b9638bf061566&t=1587215182"}],
    distribution: [],
    distribution_1: ["https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_1.jpg?sign=db0111f7d88ce566992e71aa41bbf8e6&t=1596549209", 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_2.jpg?sign=e4b65ac7f9577904b4871d8c59bfa664&t=1596549221" ,
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_3.jpg?sign=4f5cdef02ae7115b1a02459726f12794&t=1596549236" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_4.jpg?sign=6185264dc3b1b769870a002f8a9b84a8&t=1596549245" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_5.jpg?sign=8d309b0c78a6bce91099c082096d6e94&t=1596549254" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_6.jpg?sign=c373fc2a11e5176a842e12b1cad02168&t=1596549263" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_7.jpg?sign=504cca8e0543d55335b15c94027f2c15&t=1596549275" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_8.jpg?sign=922fb9b4afb9d61b07ccb99115678de3&t=1596549286" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_9.jpg?sign=ceea448b1dd0996ab2b6b2b4adf0bf90&t=1596549293" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_10.jpg?sign=ebe9732f43120fd97ad9dba37928d6ca&t=1596549303", 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_11.jpg?sign=94ce0a008a8c359e2b80e1d4b2dfed27&t=1596549310" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_12.jpg?sign=f05a07f227c896f227c1401cda88d791&t=1596549331" ,
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_13.jpg?sign=a619cd7262369917024feabd1973fed0&t=1596549353" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_14.jpg?sign=0dbdc70618c79228861a929a010ea170&t=1596549373" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_15.jpg?sign=55623d0e1e84df804142932429798301&t=1596549381" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_16.jpg?sign=e2604b5aecd70639fef884385f976ec4&t=1596549389" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_17.jpg?sign=f676479188df8240187d3a60bcc3592d&t=1596549394" ,
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_18.jpg?sign=e0e6a7baddfdc9750874d076ac4521cc&t=1596549407" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_19.jpg?sign=e3e02358616363e4d0d07097666146f3&t=1596549412" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_20.jpg?sign=cbb4d31e5c6c5fd1590a0f70f67326a3&t=1596549423" ,
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_21.jpg?sign=29eafb8de7489428e890790da8481277&t=1596549433" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_22.jpg?sign=1a255dc8510a0658cd5b79948ab05929&t=1596549465" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_23.jpg?sign=56cb80d114e6c66c848877a473a632da&t=1596549472" , 
    "https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/distribution/zhixi/distribution_24.jpg?sign=d88103192f3d32b53c90a21d9af61165&t=1596549482"]
  },


  preview(event) {
    let currentUrl = event.currentTarget.dataset.item.src
    console.log(event.currentTarget.dataset.item.src)
    var up = "distribution[" + 0 + "]";
    pictureNum = event.currentTarget.dataset.item.id
    this.setData({
      [up]: this.data.distribution_1[pictureNum]
    })
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.distribution // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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