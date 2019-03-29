
let fs = require('fs') 

/**
 * nodejs 支持同步和异步读取文件内容
 */

 fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err)
    } 
    console.log(`异步读取：${data.toString()}`)
 })

 // 同步读取文件内容
 let data = fs.readFileSync('input.txt')
 console.log(`同步读取：${data.toString()}`)

 /**
  * 打开文件
  * fs.open(path, flags[, mode], callback)
  * -flags: 文件打开的行为： r, r+,rs,...
  * -mode: 设置文件模式，文件创建默认权限为 0666
  */

// 异步打开文件
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err)
    }
    console.log(`文件打开成功`)
    fs.close(fd, function (err) {
        if (err) {
            console.log(err)
        }
        console.log('关闭成功')
    })
})

/**
 * 获取文件信息
 * fs.stat(path, callback)
 */
fs.stat('input.txt', function(err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("读取文件信息成功！");
    
    // 检测文件类型
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory()); 
})


/** 
 * 写入文件
 * fs.writeFile(file, data[, options], callback)
 */
fs.writeFile('input.txt', 'the content to write to', function(err) {
    if (err) {
        return console.error(err)
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
})

/**
 * 读取文件
 * fs.read(fd, buffer, offset, length, position, callback)
 * - fd: fopen 方法返回的文件描述
 */

 /**
  * 关闭文件
  * fs.close(fd, callback)
  */
fs.open('input.txt', 'r', function(err, fd) {
    if (err) {
        return console.error(err)    
    }
    console.log('文件打开成功')
    let buf = new Buffer(1024)
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err)
        }
        console.log(`${bytes} 字节被读取`)
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString())
        }
        fs.close(fd, function (err) {
            if (err) {
                console.log(err)
            }
            console.log('关闭成功')
        })
    })
})

/**
 * 截取文件
 * fs.ftruncat(fd, len, callback)
 */
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("截取了10字节后的文件内容。");
    // 截取文件
    fs.ftruncate(fd, 10, function(err){
        if (err){
        console.log(err);
        } 
        console.log("文件截取成功。");
        console.log("读取相同的文件"); 
        let buf = new Buffer(1024)
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }

        // 仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }

        // 关闭文件
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            } 
            console.log("文件关闭成功！");
        });
        });
    })
})

/**
 * 删除文件
 * fs.unlink(path, callback)
 */

 fs.unlink('input', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件删除成功！");
 })

 /**
  * 创建目录
  * fs.mkdir(path [,mode], callback)
  * - mode: 设置目录权限，默认为 0777
  */
fs.mkdir('test', function (err) {
    if (err) {
        console.log(err)
    }
    console.log('目录创建成功')
})

/**
 * 读取目录
 * fs.readdir(path, callback)
 */
fs.readdir('./', function (err, files) {
    if (err) {
        return console.log(err)
    }
    console.log('-----读取目录-------')
    files.forEach (function (file) {
        console.log(file)
    })
})

/**
 * 删除目录
 * fs.redir(path, callback)
 */
fs.rmdir('test', function (err) {
    if (err) {
        return console.log(err);
    }
})