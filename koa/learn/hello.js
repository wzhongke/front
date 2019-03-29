const Koa = require('koa');

const app = new Koa();

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
})

// logger
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`); 
})

app.use(async ctx => {
    /** Content-Type: text/plain; charset=utf-8 */
    ctx.body = 'Hello World!';
})

app.listen(3000)