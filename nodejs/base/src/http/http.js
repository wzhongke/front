
let http = require('http')
let url = require('url')
let util = require('util')
let querystring = require('querystring')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})

    // 解析 url 参数
    let params = url.parse(req.url, true).query;
    
    res.end(util.inspect(url.parse(req.url, true)))
}).listen(3000)


let postHTML = 
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';
http.createServer((req, res) => {
    // 定义一个 post 变量，暂存请求体信息
    let body = ''
    req.on('data', function(chunk) {
        body += chunk
    })

    req.on('end', () => {
        body = querystring.parse(body)
       
        if (body.name && body.url) {
            res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
            res.write(`网站名：${body.name}`)
            res.write("<br>");
            res.write(`网站url：${body.url}`)
        } else {
            res.write(postHTML)
        }
        res.end(util.inspect(body))
    })
}).listen(3001)