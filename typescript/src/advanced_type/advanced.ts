/**
 * 交叉类型是将多个类型合并成一个类型。
 * 把现有的多种类型叠加到一起成为一种各类型，它包含了所需的所有类型的特性
 */
function extend<T, U> (first: T, second: U): T&U {
    let result = <T & U> {}
    for (let id in first) {
        (<any> result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id]
        }
    }
    return result;
}

class Person {
    constructor (public name: string) {}
}
interface Loggable {
    log(): void
}
class ConsoleLogger implements Loggable {
    log() {
        //...
        console.log('log')
    }
}

let jim = extend(new Person('Jim'), new ConsoleLogger())
console.log(jim.name);
jim.log()


/**
 * 联合类型
 * 联合类型表示一个值可以是几种类型之一
 */
interface Bird {
    fly()
    layEggs()
}

interface Fish {
    swin()
    layEggs()
}

function getSmallPet(): Fish| Bird {
    return {
        layEggs: function() {
            console.log('lay eggs')
        },
        fly: function () {
            console.log('fly')
        }
    }
}

let pet = getSmallPet()
pet.layEggs()
// pet.swin() 只能使用 Fish 和 Bird 共有类型
