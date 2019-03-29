---
title: TypeScript 学习笔记
date: 2018-3-8 12:01:00
categories: ["javascript"]
---

TypeScript 是 JavaScript 的超集

# 安装 TypeScript
```
npm install -g typescript
```

# 编译代码
```
tsc hello.js
```

# 基础类型定义
TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。
```js
// 定义 布尔值
let isDone : boolean = true;
// 定义数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 定义字符串  -- 变量 name 是保留的
let yourName: string = "bob";
// 支持模板字符串
let sentence: string = `My name is ${yourName}`;
```

## 数组类型定义
定义数组有两种方式：可以在元素类型后面接上 []，表示由此类型元素组成的一个数组；使用数组泛型 `Array<元素类型>`：
```js
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

## 枚举
`enum` 类型是对JavaScript标准数据类型的一个补充。
```js
// 元素编号默认从 0 开始
enum Color {Red, Green, Blue}
let c: Color = Color.Green; 
let b: Color = Color[1];

// 指定元素编号
enum Color {Red=1, Green=3, Blue=4}
let c: Color = Color.Green;
```

## `Any`
有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 `any` 类型来标记这些变量。
```js
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

`any` 类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。而 `Object` 类型可以赋予任何类型，但是却不能在其上调用任何方法。

## 类型转换
类型转换不做特殊的数据检查和解构，它只是在编译阶段起作用。
```js
let someValue: any = "this is a string";
// 用尖括号语法
let strLength: number = (<string>someValue).length;
// 用 as
let strLength: number = (someValue as string).length;
```

# 接口
TypeScript 的核心原则之一是对值所具有的结构进行类型检查，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
```js
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

使用接口来重写示例：
```js
// 使用 LabbeledValue 的接口，必须有一个 label:string 属性
interface LabelledValue {
  label: string
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```

## 可选属性
接口中的属性不全是必须的，可以使用 `?` 定义可选属性：
```js
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
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    // config.width，width 拼写错误会报错
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
  
let mySquare = createSquare({color: "black"});
```

使用可选属性可以对可能存在的属性进行预定义，可以捕获引用了不存在的属性导致的错误。

## 只读属性
对于那些只能在对象刚刚创建时赋值的对象属性，可以用 `readonly` 来指定为只读属性：
```js
interface Point {
    readonly x: number
    readonly y: number
}
```

`ReadonlyArray<T>` 可以将所有可变方法去掉，确保数组创建后再也不能被修改：
```js
let a: number[] =[1,2,3]
let readonlyArr: ReadonlyArray<number> = a
console.log(readonlyArr[0])
// readonlyArr[0] = 1
// 使用类型转换
a = readonlyArr as number[]
```

## 函数类型
使用接口可以描述函数类型，只需要给出一个调用签名，就像是一个只有参数列表和返回值类型的函数定义：
```js
interface SearchFunc {
    (source: string, subString: string): boolean;
}
```

可以像如下方式使用该接口：
```js
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
```

## 可索引类型
可索引类型具有一个**索引签名**，它描述了对象索引的类型，还有相应的索引返回值类型：
```js
interface StringArray {
    [index: number]: string;
}
let myArr: StringArray = ['Bob', 'Fred']
```

索引签名：字符串和数字。可以同时使用两种类型的索引，但是数字索引返回的值必须是字符串索引返回值类型的子类型。因为用数字索引时，会将它转换成字符串再去索引对象：
```js
class Animal {
    name: string
}

class Dog extends Animal {
    breed: string
}

interface NotOk {
    // 数字索引类型“Animal”不能赋给字符串索引类型“Dog”。
    [x: number] : Animal
    [x: string]: Dog
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
//  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```

如果将索引签名设置为只读，那么就不能给索引赋值
```js
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
```

## 类类型
同 Java 接口的作用类似，TypeScript 也用接口来明确的强制一个类去符合某种契约。
```js
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
```

## 接口继承
接口可以相互继承，能够从一个接口里复制成员到另一个接口里。
```js
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
// 可以继承多个接口
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(square);
```

## 混合类型
一个对象可以同时作为函数和对象使用，并带有额外的属性
```js
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
```

## 接口继承类
在 TypeScript 中允许接口继承类。
接口继承类时，它会继承类的成员但不包括其实现。接口同样会继承到类的 private 和 protected 成员。
当创建一个接口继承一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或者其子类所实现
```js
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
```

# 类
TypeScript 可以使用对象的方式构建：
```js
class Greeter {
    greeting: string
    constructor (message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`
    }
}

let greeter = new Greeter('world');
```

## 继承
类的最重要的一个特点就是继承：
```js
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    // 在使用 this 之前，一定要调用 super()
    constructor(name: string) { super(name); }
    // 重写父类方法
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

const dog = new Dog('dog');
dog.move(10);
```

## `public`, `private`, `protected`
TypeScript 中，默认的修饰符是 `public`.
`private` 修饰的方法或者属性，不能在类之外访问。
`protected` 修饰的方法或者属性，可以在子类中访问。

```js
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        // 子类可以访问父类的 protected 修饰的构造器
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
```

## 参数属性
参数属性可以方便地在一个地方定义并初始化一个成员：
```js
class AnimalProp {
    // 在构造器的参数中定义一个成员
    constructor (private name: string) {}
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}`)
    }
}
```

## 存取器
TypeScript 支持通过 getters/setters 来截取对象成员的访问，这样可以更有效地控制对象成员的访问。
```js
let passcode = 'secret passcode'
class EmployeeSG {
    private _fullName: string
    
    get fullName() :string {
        return this._fullName
    }

    set fullName (newName: string) {
        if (passcode && passcode === 'secrete passcode') {
            this._fullName = newName
        } else {
            console.log("Error: Unauthorized update of employee!")
        }
    }
}

let employee = new EmployeeSG();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
```

## 静态属性
静态属性存在类本身上，而不是类的实例上，使用 `static` 修饰。静态属性只能通过类名来访问：
```js
class Grid {
    static origin = {x:0, y:0}
    cacculate (point: {x:number, y:number}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) {}
}

let grid = new Grid(1.0)
console.log(grid.cacculate({x:10, y:10}))
```

## 抽象类
抽象类不能被实例化，一般作为父类使用，使用关键字 `abstract` 定义抽象类和抽象类中的抽象方法
```js
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```

# 函数
在 TypeScript 中，完整的函数类型如下：
```js
let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };
```

函数类型包含两部分：参数类型和返回值类型。
一般情况下，可以让 TypeScript 自动推断类型：
```js
let myAdd = function (x: number, y: number): number {
    return x + y;
}
```

## 可选参数和默认参数
TypesScript 要求传递给一个函数的参数个数必须与函数期望的参数个数一致。在参数名旁使用 `?` 表明该参数是可选的。必选参数必须在可选参数之前。
```js
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
```

可以将参数赋予默认值，当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。
```js
function buildName(firstName: string, middeleName="Roes", lastName?: string) {
    if (lastName)
        return firstName + " " + middeleName + " " + lastName;
    else
        return firstName + " " + middeleName;
}
let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right
```

## 剩余参数
TypeScript 可以支持将剩余的参数放到一个变量中：
```js
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
```

## `this`
对于如下代码，在浏览器执行时，会抛出错误：
```js
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card:" + pickedCard.card + " of " + pickedCard.suit);
```

这是因为 `createCardPicker` 返回的函数里的 `this` 被设置成 `window` 而不是 `deck`。
为了解决这个问题，最好在函数被返回时就绑定好 `this`，而 ES6 的箭头函数会保存函数创建时的 `this`，而不是调用时的值：
```js
createCardPicker: function() {
    return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
}
```

但是 `this.suits[pickedSuit]` 的类型还是 `any`，我们可以提供一个显示的 `this` 参数，来指定 `this` 的类型：
```js
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
```

## 函数重载

查找重载列表时，会尝试使用第一个重载定义。如果匹配的话，就是用这个。因此，在定义重载的时候，一定要把最精确的定义放到最前面。
```js
let suits =  ["hearts", "spades", "clubs", "diamonds"];
function pickCard (x: {suit: string; card: number}[]): number;
function pickCard(x: number): {suit: string, card: number};

function pickCard(x) : any {
    if (typeof x == 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x == 'number') {
        let pickedSuit = Math.floor(x/13);
        return {suit: suits[pickedSuit], card: x%13}
    }
}
```

# 泛型
在软件工程总，不仅要创建一致的定义良好的API，痛死也要考虑可重用性。组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型。在 Java 这样的语言中，可以使用**泛型**来创建可重用的组件，一个组件可以支持多种类型的数据。

## 泛型之 Hello World
不用泛型的话，函数可能是下面这样：
```js
// 普通写法
function identity (arg: number): number {
    return arg;
}

// any
function identityAny (arg: any) : any {
    return arg;
}
```

使用 `any` 类型会导致这个函数可以接受任何类型的参数，会丢失一些信息：传入的类型与返回的类型应该是相同的。泛型写法如下：
```js
function identityGen<T> (arg: T):T {
    return arg;
}
```

增加类型变量 `T`，`T` 捕获用户传入的类型，之后再使用 `T` 当做返回值类型，cqyr我们跟踪函数里使用的类型信息。
有二种方式使用泛型函数：
```js
// 泛型调用
let output = identityGen<string>('string')
// 使用类型推断
output = identityGen('string')
```

## 使用泛型变量
编译器要求在函数体内必须正确使用泛型参数，必须把这些参数当做是任意或所有类型
```js
function logging(arg: T) T {
    console.log(arg.length); // Error: T 可能没有 length 属性
}
```

## 泛型类型
泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面。还可以使用不同的泛型参数名，只要在数量上和使用方式上对应：
```js
function identity<T> (arg: T) {
    return arg;
}

let myTest: <U>(arg: U) => U = identity;
```

当然，还可以定义一个泛型接口：
```js
interface GenericIdentityFn {
    <T> (arg: T): T
}
// 另一种写法
interface GenericIdentityFn2<T> {
    (arg: T): T
}
function identityInterface<T> (arg: T): T {
    return arg;
}

let myInterface: GenericIdentityFn = identityInterface;
let myInterface2: GenericIdentityFn2 = identityInterface;
```

## 泛型类
泛型类同泛型接口差不多，泛型类使用 `<>` 括起泛型类型，跟在类名后面：
```js
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let genericNum = new GenericNumber<number>();
genericNum.add = function(x, y) {return x+y;}
```

泛型类指的是类的实例部分，所以类的静态属性不能使用这个泛型类型。

## 泛型约束
有时候，我们需要限制泛型类型，比如说具有 `.lenght` 属性。只要传入的类型有这个属性就可以。因此，我们需要列出对于 `T` 的约束要求。
```js
interface Lengthwise {
    length: number
}

function logging<T extends Lengthwise> (arg: T): T{
    console.log(arg.length);
    return arg;
}

logging(10); // Error, number 没有 .length 属性
logging({length: 10, value: 2});
```

## 在泛型里使用类类型
在 TypeScript 使用泛型创建工厂函数时，需要引用构造函数的类类型：
```js
function create<T> (c: {new():T}) : T {
    return new c();
}
```

# 枚举
使用枚举可以定义一些带名字的常量。使用枚举可以清晰表达意图或创建一组有区别的用例。

## 数字枚举
数字枚举如下：
```js
enum Direction {
    Up=1,
    Down,
    Left,
    Right
}
```

`Up` 使用初始化为 `1`，其余的成员会从 `1` 开始自动增长。也就是 `Down` 为 `2`，`Left` 为 `3`，`Right` 为 `4`

如果不使用初始化器，那么 `Up` 值为 `0`其余成员会从 `0` 开始增长。

## 字符串枚举
在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化：
```js
enum DirectionStr {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
```

## 计算的和常量成员
```js
enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = '123'.length
}
```
