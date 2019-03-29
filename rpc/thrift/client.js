
var thrift = require('thrift')
var Hello = require('./Hello');
var ttypes = require('./Hello_types');

var transport = thrift.TBufferedTransport;
var protocol = thrift.TBinaryProtocol;

var connection = thrift.createConnection("localhost", 7911, {
    transport: transport,
    protocol: protocol
});

connection.on('error', (error)=>{
    console.error(error)
})

var client = thrift.createClient(Hello, connection);

client.helloString("anthor ", function (err, res) {
    /** 回调函数，第一个参数需要是 err */
    console.log(res)
    connection.end();
});

