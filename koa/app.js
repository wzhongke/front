const Koa = require('koa');
const views = require('koa-views');
const nunjucks = require('nunjucks');
const routes = require('./routes/index');

const app = new Koa();

nunjucks.configure(__dirname + '/views', { autoescape: true });

//views with nunjucks
app.use(views(__dirname + '/views', {
    map: { html: 'nunjucks' }
}));

app.use(require('koa-static')(__dirname + '/../static'));

app.use(routes.routes(), routes.allowedMethods());

app.listen(3000);
