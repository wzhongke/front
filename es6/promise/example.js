
const promise = new Promise(function (resolve, reject) {
    console.log(x);
    resolve('ok');
    throw new Error('error');
});

promise.then(function (value) {
    console.log(value);
}).catch(function (err) {
    console.log(err);
}).then(function (value) {
    console.log(value);
});

setTimeout(() => { console.log(123) }, 2000);

// const p1 = new Promise((resolve, reject) => {
//     resolve('hello');
// }).then(result => result)
//     .catch(e => e);

// const p2 = new Promise((resolve, reject) => {
//     throw new Error('报错了');
// }).then(result => result)
//     .catch(e => e);

// Promise.all([p1, p2])
//     .then(result => console.log(result[0], result[1]))
//     .catch(e => console.log(e));

var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})

var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("p2 start");
        resolve(p1)
        console.log("p2 resolve")
    }, 1000)
})

p2
.then(result => console.log(result))
.catch(error => console.log("error" + error))

// 级联的Promise使用async书写：
function takeLongTime(n) {
    return new Promise(resovle => {
        setTimeout(() => resolve(n + 200), n)
    })
}

function step1 (n) {
    console.log(`step1 with ${n}`)
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}

// 使用Promise处理此3个需要同步处理的函数
const time1 = 300;
step1(time1).then(time2 => step2(time2))
    .then(time3 => step3(time3))
    .then(result => {
        console.log(`result is ${result}`);
    })

// 使用 async 的方式处理 
async function doIt() {
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log(`result is ${result}`);
}
