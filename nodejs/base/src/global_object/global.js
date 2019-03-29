
/**
 * 在 Nodejs 中，全局对象是 global，所有全局变量都是 global 对象的属性
 */

 // __filename: 正在执行的脚本的文件名，它将输出文件所在位置的绝对路径。
 console.log(__filename)

 // __dirname: 表示当前执行脚本所在的目录
 console.log(__dirname)

 // setTimout, clearTimeout, setInterval

 // console
console.info('程序开始执行：')
let counter = 10
console.log('计数：%d', counter)
// console.time(label) 计时
console.time('获取数据')

console.timeEnd('获取数据')

// console.trace() 向标准错误流输出当前调用栈
console.trace();

/**
 * process 是一个全局变量，描述当前 Nodejs 进程状态，提供了一个与操作系统的简单接口
 */

process.on('exit', function (code) {
    console.log(`退出码为：${code}`)
    setTimeout(()=> console.log('该代码不会执行'), 0)
})

// 输出到终端
process.stdout.write('Hello World ')

// 通过参数获取
process.argv.forEach(function(val, index, array) {
    console.log(`${index} : ${val}`)
})

// 获取执行路径
console.log(process.execPath)

// 平台信息
console.log(process.platform)

// 输出当前目录
console.log(`当前目录为： ${process.cwd()}`)

// 输出当前版本号
console.log(`版本号为：${process.version}`)

// 输出内存使用情况
console.log(process.memoryUsage())