
/**
 * Buffer 类是在 Node 处理 I/O 操作时使用的，
 * 是一个专门存放二进制数据的缓存区
 */
let buf = Buffer.from('runoob', 'ascii')
// 输出十六进制编码数据
console.log(buf.toString('hex'))
// 输出 base64 数据
console.log(buf.toString('base64'))

/**
 * Buffer 提供了如下 API 创建 Buffer 类
 */

 // 创建一个长度为10，且用 0 填充的 Buffer
 const buf1 = Buffer.alloc(10)

 // 创建一个长度为10，且用 1 填充的 Buffer
 const buf2 = Buffer.alloc(10, 1)

 // 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

/**
 * 写入缓冲区
 * buf.write(string [,offset [,length]] [,encoding])
 * 返回值为实际写入的大小
 */

 buf = Buffer.alloc(256)
 let length = buf.write("www.runoob.com")
 console.log(`写入的字节数：${length}`)

 /**
  * 从缓冲区读取数据
  * buf.toString([encoding[,start[,end]]])
  * - encoding: 编码，默认为 uft8
  */

buf = Buffer.alloc(26);
for (let i=0; i<26; i++) {
    buf[i] = i + 97
}

console.log(buf.toString('ascii'))
console.log(buf.toString('ascii', 0, 5))
console.log(buf.toString('utf8', 0, 5))

/**
 * 将 Buffer 对象转换成 JSON
 * {type: 'Buffer', data: ...}
 */
console.log(buf.toJSON())

/** 
 * 缓冲区合并
 * Buffer.concat(list[, totalLength])
 * - list: 用于合并的 Buffer 对象数组列表
 * - totalLength: 指定合并后 Buffer 对象的总长度
 */
let buffer1 = Buffer.from('菜鸟教程')
let buffer2 = Buffer.from('www.runoob.com')
buffer2 = Buffer.concat([buffer1, buffer2])
console.log(`concat content: ${buffer2.toString()}`)

/**
 * 缓冲区比较
 * buf.compare(otherBuffer)
 */

let compareResult = buffer1.compare(buffer2)
if (compareResult < 0) {
    console.log(`${buffer1} 在 ${buffer2} 之前`)
} else if (compareResult === 0) {
    console.log(`${buffer1} 与 ${buffer2} 相同`)
} else {
    console.log(`${buffer1} 在 ${buffer2} 之后`)
}

/**
 * 拷贝缓冲区
 * buf.copy(targetBuffer [,targetStart[, sourceStart[, sourceEnd]]])
 */

// 将 buffer2 插入到 buffer1 指定的位置上，替换到 buffer1 原来位置上的内容
buffer1 = Buffer.from('abcdefghijkl');
buffer2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buffer2.copy(buffer1, 2);

console.log(buffer1.toString())

/**
 * 缓冲区剪裁
 * buf.slice([start [, end]])
 * 返回一个新的缓冲区，它和旧缓冲区指向同一块内容，但是索引从 start 到 end 的位置剪切
 */

buffer2 = buffer1.slice(0, 2)
console.log(`buffer2 content: ${buffer2}`)