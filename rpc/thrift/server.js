
var thrift = require('thrift')
var Hello = require('./Hello');

var server = thrift.createServer(Hello, {
    helloString: function (para, result) {
        console.log(para)
        /** 回调函数，第一个参数是 err 信息 */
        result(null, para + "server")
    }
})

server.on('error', (err)=>{
    console.log(err)
})

server.listen(7911);