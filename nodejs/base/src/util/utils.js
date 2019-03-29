
let util = require('util')

/**
 * utils.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数
 */

function Base () {
    this.name = 'Base';
    this.base = 1991;
    this.sayHello = function () {
        console.log(`Hello ${this.name}`)
    }
}

Base.prototype.showName = function () {
    console.log(this.name)
}

function Sub () {
    this.name = 'sub'
}

util.inherits(Sub, Base)
let objSub = new Sub();
objSub.showName();
// 只继承 prototype 的内容，构造函数内部创建的 base 属性和 sayHello 函数都没有被 Sub 继承
// objSub.sayHello()
console.log(objSub);

/**
 * util.inspect(object,[showHidden], [depth], [color]) 将一个任意对象转换成字符串，通常用于调试和错误输出。
 * 
 * - showHidden: 可选参数，若值为 true，将会输出更多隐藏信息
 * - depth: 表示最大递归层数，对于复杂对象，可以指定层数以控制输出信息
 * - color: 若值为 true，输出格式将会以 ANSI 颜色编码
 */
let objBase = new Base();
console.log(util.inspect(objBase))
console.log(util.inspect(objBase, true))
console.log(util.inspect(objBase, true, 2, true))

/**
 * util.isArray(object)
 */
console.log(util.isArray([]))
console.log(util.isArray({}))

/**
 * util.isRegExp(object)
 */
util.isRegExp(/some regexp/)
util.isRegExp(new RegExp('another regexp'))
util.isRegExp({})

/**
 * util.isDate(object)
 */
util.isDate(new Date())
util.isDate({})

/**
 * util.isError(object)
 */
util.isError(new Error())
util.isError({name: 'error', message: 'an error occurred'})

/**
 * net 模块提供了一些用于底层通信的网络通信工具
 */

let net = require('net')
let server = net.createServer( connection => {
    console.log('client connected')
    connection.on('end', ()=>console.log('客户端关闭连接'))
    connection.write('Hello World!\r\n')
    connection.pipe(connection)
})
server.listen(8080, () => console.log('server is listening'))

// 客户端代码
let client = net.connect({port: 8080}, () =>  console.log('连接到服务器！'))

client.on('data', (data) => {
    console.log(data.toString())
    client.end()
})

client.on('end', ()=>console.log('断开与服务器的连接'))

/**
 * DNS 模块用于解析域名
 */
let dns =require('dns')
dns.lookup('www.github.com', (err, address, family) => {
    console.log('ip 地址:', address);
    dns.reverse(address, (err, hostnames) => {
        if (err) {
            console.log(err.stack);
        }
        console.log('反向解析 ' + address + ': ' + JSON.stringify(hostnames));
    });  
});