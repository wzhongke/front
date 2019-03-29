
const Koa = require('koa');
const fs = require('fs');
const SSH = require('./ssh')
const app = new Koa();

/**
 * 用Promise封装异步读取文件方法
 * @param  {string} page html文件名称
 * @return {promise}      
 */
function render(page) {
    return new Promise((resolve, reject) => {
        let viewUrl = `./src/view/${page}`
        console.log(`read ${page}`)
        fs.readFile(viewUrl, "utf8", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

function parseQueryStr (queryStr) {
    let queryData = {};
    let queryStrList = queryStr.split("&");
    for (let [index, queryStr] of queryStrList) {
        let itemList = queryStr.split("=");
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData;
}

/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */
async function route(url, ctx) {
    let view = '404.html'
    let html = "";
    switch (url) {
        case '/':
            html = await render('index.html');
            break
        case '/wap_resin_web':
            let queryData = parseQueryStr(ctx.request.querystring);
            console.log(queryData)
            html = await new SSH('resinhub02.wap.1.djt.ted', '20:06').getLog()
            break
        case '/todo':
            view = 'todo.html'
            break
        case '/404':
            view = '404.html'
            break
        default:
            break
    }

    return html
}

app.use(async (ctx) => {
    let url = ctx.request.url
    let html = await route( url.substr(0, url.indexOf('?')), ctx )
    ctx.body = html
})

app.listen(3000)
console.log('listening port 3000')