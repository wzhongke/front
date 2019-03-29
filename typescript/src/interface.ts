// 接口只是定义了一个规范
// 使用 SquareConfig 的接口，必须有一个 color:string 属性
// width 是一个可选属性
// [propName: string]: any 是一个字符串索引签名，在此可以表明 SquareConfig 可以有任意数量的属性
interface SquareConfig {
    color: string
    width?: number
    [propName: string]: any
}
  
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100}
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}
  
let mySquare = createSquare({color: "black"})

// x,y 都是只读属性
interface Point {
    readonly x: number
    readonly y: number
}

// p1 的 x和y属性都不能在修改
let p1:Point = {x:10, y:20}

// `ReadonlyArray<T>` 可以将所有可变方法去掉，确保数组创建后再也不能被修改
let a: number[] =[1,2,3]
let readonlyArr: ReadonlyArray<number> = a
console.log(readonlyArr[0])
// readonlyArr[0] = 1
// 使用类型转换
a = readonlyArr as number[]


// 接口描述函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// 根据接口定义函数，函数参数名无须一致，主要类型一致即可
let mySearch: SearchFunc;
mySearch = function(str: string, sub: string) {
    let result = str.search(sub)
    return result > -1
}
// 如果不写类型，TypeScript 会推断出参数类型
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

// 可索引类型
interface StringArray {
    [index: number]: string;
}
let myArr: StringArray = ['Bob', 'Fred']

//索引签名：字符串和数字。可以同时使用两种类型的索引，但是数字索引返回的值必须是字符串索引返回值类型的子类型。因为用数字索引时，会将它转换成字符串再去索引对象
class AnimalInt {
    name: string
}

class DogInt extends AnimalInt {
    breed: string
}

interface NotOk {
    // 数字索引类型“Animal”不能赋给字符串索引类型“Dog”。
    //[x: number] : Animal
    [x: string]: DogInt
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
//  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

// 类类型
// 接口只描述了公共部分，不会帮你检查类是否具有某些私有成员
interface ClockInterface {
    currentTime: Date
    setTime(d: Date)
}

class Clock implements ClockInterface {
    currentTime: Date
    constructor(h: number, m: number) {}
    setTime (d: Date) {
        this.currentTime = d;
    }
}

// 接口继承
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(square);

// 混合类型
interface Counter {
    (start: number): string;
    interval: number
    reset (): void
}

function getCounter (): Counter {
    let counter = <Counter>function(start:number){}
    counter.interval = 123;
    counter.reset = function () {}
    return counter;
}

let c = getCounter();
console.log(c(10));

// 接口继承类
class Control {
    private state: any
}

interface SelectableControl extends Control {
    select(): void
}

class Button extends Control implements SelectableControl {
    select() {}
}

// class Image implements SelectableControl {
//     select() {}
// }
