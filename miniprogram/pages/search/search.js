
const db = wx.cloud.database(); //用db代替数据库
wx.cloud.init({
  env: 'fxy-onc8b'
})
Page({
  
  data: {
    goods:[],
    
    isFocus:false,
    
    inpValue:"",
    isNull:true
  },
  TimeId:-1,
  navigateToDetail:function(e){//点击列表中的栏目，跳转到相应的详情页
    console.log(e);
    this.setData({
      detail: e.currentTarget.dataset.item.detail
      })
  },
  // 输入框的值改变 就会触发的事件
  handleInput(e){
    // 1 获取输入框的值
    const {value}=e.detail;
    // 2 检测合法性
    if(!value.trim()){
      this.setData({
        goods:[],
        url:[],
        isFocus:false
      })
      // 值不合法
      return;
    }
    // 3 准备发送请求获取数据
    this.setData({
      isFocus:true
    })
    clearTimeout(this.TimeId);
    this.TimeId=setTimeout(() => {
      this.searchList(value);
    }, 100);
  },
  // 发送请求获取搜索建议 数据
  searchList: function (value) {
    var that = this;
    db.collection("search").where({  	
     name:{								
        $regex:'.*' + value + '.*',		
        $options: 'i'			
      }
    }).get({
      success(res) {
        console.log(res.data),
          that.setData({
          goods: res.data
          })
          
      }  
    })
  },

  // 点击 取消按钮
  handleCancel(){
    this.setData({
      inpValue:"",
      isFocus:false,
      goods:[]
    })
  },



  
})