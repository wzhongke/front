function* f() {
    for (var i = 0; true; i++) {
        var reset = yield i;
        if (reset) { i = -1; }
    }
}

var g = f();

console.log(g.next()) // { value: 0, done: false }
console.log(g.next()) // { value: 1, done: false }
console.log(g.next(true)) // { value: 0, done: false }

console.log('----------');

function* gen() {
    try {
        yield 'hello';
        
    } catch (e) {
        console.log("inner " + e);
    }
    yield 'world';
    yield 'me';
}

let y = gen();
y.next();
try {
    y.throw();
    console.log(y.next());
} catch (e) {
    console.log('outer ' + e);
}

function *something() {
    try {
        let nextVal;
        while (true) {
            if (nextVal === undefined) {
                nextVal = 1;
            } else {
                nextVal = (3*nextVal) + 6;
            }
            yield nextVal;
        }
    } finally {
        console.log("cleaning up!");
    }
}

for (let v of something()) {
    console.log(v);
    if (v > 500) {
        break;
    }
}