
/**
 * Stream 是一个抽象接口，有很多对象实现了这个接口
 * 
 * 所有 Stream 对象都是 EventEmitter 的实例。常用的事件有：
 * 1. data: 当有数据可读时触发
 * 2. end: 当没有数据可读时触发
 * 3. error: 在接收和吸入过程中发生错误时触发
 * 4. finish: 所有数据已被写入到底层系统时触发
 */

let fs = require('fs')

/**
 * 可读流
 */
let  data = ''

// 创建可读流
let readerStream = fs.createReadStream('input.txt')

readerStream.setEncoding('UTF8')

// 处理事件
readerStream.on('data', function (chunk) {
    data += chunk;
    console.log('data: ' + chunk)
})

readerStream.on('end', function () {
    console.log('end: ' + data)
})

readerStream.on('error', function (err) {
    console.log('error: ' + err.stack)
})

/**
 * 写入流
 */

data = 'write to txt'

let writerStream = fs.createWriteStream('output.txt')

writerStream.write(data, 'UTF8')
// 标记文件末尾
writerStream.end();

// 处理流事件
writerStream.on('finish', function () {
    console.log('写入完成')
})

writerStream.on('error', function (err) {
    console.log(err.stack)
})

/**
 * 管道流
 * 管道流提供了一个输出流到输入流的机制，通常用于从一个流中获取数据并传递到另一个流中
 */

readerStream = fs.createReadStream('input.txt')
writerStream = fs.createWriteStream('output1.txt')
// 管道读写操作
// 读取 input.txt 文件内容，并把内容写入到 output1.txt 中
readerStream.pipe(writerStream)

/**
 * 链式流
 * 链式流通过连接输出流到另外一个流并创建多个流操作链的机制，一般用于管道操作
 */

let zlib = require('zlib')

// 压缩 input.txt 文件为 input.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.gz'))

// 解压 input.gz 文件为 inputc.txt
fs.createReadStream('input.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('inputc.txt'))