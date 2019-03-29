
/**
 * Nodejs 是以单线程的模式运行，使用事件驱动来处理并发。
 * 我们可以在多核 cpu 的系统上创建多个子进程，从而提高性能
 */

/**
 * child_process.exec(command[, options], callback)
 * 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回
 * - command: 字符串，将要运行的命令，参数用空格隔开
 * - options: 对象，可以是
 *      - cwd: 字符串，子进程的当前工作目录
 *      - env: 对象环境变量键值对
 *      - encoding: 字符串，字符编码
 *      - shell: 字符串，将要执行命令的 shell
 * - callback: 回调函数，参数为 error, stdout 和 stderr
 */
const fs = require('fs')
const child_process = require('child_process')

for (var i=0; i<3; i++) {
    let workerProcess =child_process.exec('node support.js ' + i, (err, stdout, stderr) => {
        if (err) {
            console.log(err.stack)
            console.log('Error code: ' + err.code)
        }
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
    })
    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}

/**
 * child_process.spawn(command[, args][, options])
 * 使用指定命令创建新进程
 */
for(var i=0; i<3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i]);
  
    workerProcess.stdout.on('data', function (data) {
       console.log('stdout: ' + data);
    });
  
    workerProcess.stderr.on('data', function (data) {
       console.log('stderr: ' + data);
    });
  
    workerProcess.on('close', function (code) {
       console.log('子进程已退出，退出码 '+code);
    });
 }
 

 /** 
  * child_process.fork(modulePath[, args][, options])
  * spawn() 方法的特殊形式，用于创建进程
  * - modulePath: 字符串，将要在子进程中运行的模块
  */
 for(var i=0; i<3; i++) {
    var worker_process = child_process.fork("support.js", [i]);    
  
    worker_process.on('close', function (code) {
       console.log('子进程已退出，退出码 ' + code);
    });
 }