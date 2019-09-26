import Router from 'koa-router'
import Person from '../dbs/models/person'

const router = new Router({ prefix: '/persons' })

// 增
router.post('/add', async (ctx) => {
  const { username, password, email } = ctx.request.body
  // await Person.create({ username, password, email })
  const person = new Person({ username, password, email })
  try {
    await person.save()
    ctx.body = {
      code: 1,
      msg: '添加成功'
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: '添加失败',
      e
    }
  }
})
// 查
router.post('/find', async (ctx) => {
  const result = await Person.findOne({ username: ctx.request.body.username })
  const results = await Person.find({ username: ctx.request.body.username })
  const all = await Person.find()
  ctx.body = {
    code: 0,
    msg: '查询成功',
    result,
    results,
    all
  }
})
// 改
router.post('/update', async function (ctx) {
  await Person.where({
    username: ctx.request.body.username
  }).update({
    password: ctx.request.body.password
  })
  ctx.body = {
    code: 0,
    msg: '修改成功'
  }
})
// 删
router.post('/remove', async function (ctx) {
  await Person.where({
    username: ctx.request.body.username
  }).remove()
  ctx.body = {
    code: 0,
    msg: '删除成功'
  }
})

export default router
