
let os = require('os')

// CPU 的字节序列
console.log(`endianness: ` + os.endianness())

// 操作系统类型
console.log(`type：${os.type()}` )

// 操作系统名
console.log(`platform: ${os.platform()}`)

// 系统内存总量
console.log(`total memory: ${os.totalmem()}`)

// 操作系统空闲内存
console.log(`free memory: ${os.freemem()}`)

/**
 * path 模块提供了一些用于处理文件路径的工具
 */

let path = require('path')
// 格式化路径
console.log(`normalization: ${path.normalize('/test/test1//2slashes/..')}`)
// 拼接路径
console.log(`joint path: ${path.join('/test', 'test1', 'wslashes/1slash', 'tab', '..')}`)
// 转换成绝对路径
console.log(`resolve: ${path.resolve('utils.js')}`)
// 提取路径中文件的后缀名
console.log(`ext name: ${path.extname('main.js')}`)