let request = require('request')

function run(gen) {
    let args = [].slice.call(arguments, 1), it;

    // 在当前上下文中初始化生成器
    it = gen.apply(this, args);

    // 返回一个 promise 用于生成器完成
    return Promise.resolve()
        .then(function handleNext(value) {
            let next = it.next(value);

            return (function handleResult(next) {
                if (next.done) {
                    return next.value;
                } else {
                    return Promise.resolve(next.value)
                        .then(handleNext, function handleErr(err) {
                            return Promise.resolve(it.throw(err))
                                .then(handleResult);
                        })
                }
            })(next);
        })
}

function* foo() {
    console.log("inside *foo(): ", yield "B")
    console.log("inside *foo()", yield "C")
    return "D";
}

function* bar() {
   console.log("inside *bar():", yield "A")
   console.log("inside *bar():", yield *foo())
   console.log("inside *bar():", yield "E")
   return "F"
}

let it = bar();
console.log("outside:", it.next().value);
// outside: A
// inside *bar(): 1
console.log("outside:", it.next(1).value)
// outside: B
// inside *foo():  2

console.log("outside:", it.next(2).value)
// outside: C
// inside *foo() 3

console.log("outside:", it.next(3).value)
// inside *bar(): D
// outside: E

console.log("outside:", it.next(4).value)
// inside *bar(): 4
// outside: F