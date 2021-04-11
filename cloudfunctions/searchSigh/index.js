// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  var that = this;
  var openid = event.openid
  const db = cloud.database(
    { env: 'fxy-onc8b'}
   )
  try{
        return await db.collection("sigh").where({  	
            _openid: openid
         }).limit(1000).get({
          success(res)
          {
            console.log(res)
          },
          fail(err)
          {
            console.log(err)
          }
        })
      }catch(e){
        console.log(e)
      }
}