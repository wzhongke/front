var hprose = require('hprose')

var client = hprose.Client.create("tcp://127.0.0.1:4321", ['hello']);

client.hello('word', function (err, result) {
    console.log(`err: ${err}`)
    console.log(result);
})