import Router from 'koa-router'
import axios from './utils/axios'

const sign = '9a78bdd673ca6b09f9f8989936d32b64'

const router = new Router({
  prefix: '/geo'
})
router.get('/getPosition', async (ctx) => {
  let {status, data: {province, city}} = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  } else{
    ctx.body = {
      province: '',
      city: ''
    }
  }
})


export default router



