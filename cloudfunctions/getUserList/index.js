
const cloud = require('wx-server-sdk')
  
// 云函数入口函数
cloud.init({
  env:'fxy-onc8b',
  traceUser: true,
})
const db = cloud.database()
exports.main = async (event, context) => {
  var openid = event.openid
  console.log(openid)
  try{
    return await db.collection('user').where({
      openid:openid
    }).limit(1000).get({
      success(res)
      {
        console.log(res)
      }
    })
  }catch(e){
    console.log(e)
  }
}
