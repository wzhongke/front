var hprose = require('hprose')

function hello (name) {
    console.log(name);
    return `Hello ${name}!`;
}

var server = hprose.Server.create('tcp://0.0.0.0:4321');
server.addFunction(hello)
server.start();