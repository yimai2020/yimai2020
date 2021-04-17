const cloud = require('wx-server-sdk')
cloud.init({
  env:'fxy-onc8b',
  traceUser: true,
})
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    return await db.collection('dialogue_studied').where({
      openid: 'oRnm55YKIZA_yQAQoAndi4fCxSvs'
    }).remove()
  } catch(e) {
    console.error(e)
  }
}