import Router from 'koa-router'

let router = new Router({prefix: '/users'})

router.post('/signup', async (ctx) => {
  console.log(ctx)
  console.log(ctx.request.body)
  ctx.body = {
    code: 0,
    msg: `It's ok!`
  }
})
router.get('/test', (ctx) => {
  ctx.body = {
    code: 0,
    msg: 'my is test'
  }
})

export default router
