import Router from 'koa-router'
import controll from '../controll/productControll'
import Common from '../lib/common'

const router = new Router()

router.get('/category', async (ctx) => {
  await ctx.render('product/category', { script: 'product/category' })
})

router.get('/category/add', async (ctx) => {
  await ctx.render('product/categoryAdd', { script: 'product/categoryAdd' })
})

router.get('/product/add', async (ctx) => {
  const pridx = new Common().requestGetInt(ctx, 'pridx')
  await ctx.render('product/product', { script: 'product/product', pridx })
})

router.get('/product', async (ctx) => {
  await ctx.render('product/productList', { script: 'product/productList' })
})

router.get('/qty', async (ctx) => {
  await ctx.render('qty/list', { script: 'qty/list' })
})

router.get('/qty/history', async (ctx) => {
  await ctx.render('qty/history', { script: 'qty/history' })
})

router.get('/static', async (ctx) => {
  await ctx.render('static/list', { script: 'static/list' })
})

router.post('/category/add/1', controll.addFirstCategory)
router.get('/category/1', controll.getFirstCategory)
router.post('/category/add/2', controll.addSecondCategory)
router.get('/category/2', controll.getSecondCategory)
router.post('/category/add/3', controll.addThirdCategory)
router.get('/category/3', controll.getThirdCategory)

router.get('/category/list', controll.getCategoryList)
router.post('/category/remove', controll.removeCategory)

router.post('/product/add', controll.addProducts)
router.get('/product/list', controll.getProductList)
router.get('/product/detail', controll.getProductDetail)
router.post('/product/edit', controll.editProduct)
router.post('/product/remove', controll.removeProduct)

router.post('/qty/add', controll.productAdd)
router.get('/qty/history/list', controll.getProductHistoryList)

router.get('/static/list', controll.getStaticList)
export default router
