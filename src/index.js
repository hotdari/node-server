const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log('레드벨벳을 소개합니다.')
  ctx.set("Redvelvet-Leader", 'irene')
  await next()
  console.log('레드벨벳을 소개를 마칩니다.')
});

app.use(async (ctx, next) => {
  console.log('1.아이린')
  await next()
});

app.use(async (ctx, next) => {
  console.log('2.슬기')
  await next()
});

app.use(async (ctx, next) => {
  console.log('3.웬디')
  await next()
});

app.use(async (ctx, next) => {
  console.log('4.조이')
  await next()
  ctx.body = "레드벨벳 멤버소개"
});

app.listen(3000)