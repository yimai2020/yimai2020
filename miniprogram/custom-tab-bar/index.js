// miniprogram/custom-tab-bar/index.js
Component({
  data: {
    selected: 0,
    color_white: "#fff",
    color_black: "#2c2c2c",
    selectedColor: "#1296db",
    toBottom:0,
    list: [
      {
        pagePath: "/pages/culture/culture",
        iconPath_white: "/images/culture_white.png",
        iconPath_black: "/images/culture_black.png",
        selectedIconPath: "/images/culture-active.png",
        text: "彝族文化"
      },
      {
        pagePath: "/pages/map/map",
        iconPath_white: "/images/jiejing_white.png",
        iconPath_black: "/images/jiejing_black.png",
        selectedIconPath: "/images/jiejing-active.png",
        text: "街景"
      },
      {
        pagePath: "/pages/distinguish/distinguish",
        iconPath_white: "/images/faxian_white.png",
        iconPath_black: "/images/faxian_black.png",
        selectedIconPath: "/images/faxian-active.png",
        text: "发现"
      },
      {
        pagePath: "/pages/language/language",
        iconPath_white: "/images/language_white.png",
        iconPath_black: "/images/language_black.png",
        selectedIconPath: "/images/language-active.png",
        text: "彝语学习"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    },
    getSystemInfo(){
      let isIphoneX = getApp().globalData.isIphoneX
      if(isIphoneX){
        this.setData({
          bottom:0  //为啥是零，chb不清楚，
        })
      }
    }
  }
})