
/**
 * 模块是 Node 的基本组成部分，文件和模块一一对应。一个 Node 文件就是一个模块。文件可以是 JavaScript、JSON 或编译过的 C/C++ 扩展
 * 
 */

 let Hello = require('./hello')

 Hello.world();
 let hello = new Hello.Hello();
 hello.setName('here')
 hello.sayHello();

 hello = new Hello.HelloC();
 hello.name = 'wang'
 hello.sayHello()