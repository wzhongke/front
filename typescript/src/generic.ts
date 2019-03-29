// 普通写法
function identity (arg: number): number {
    return arg;
}

// any
function identityAny (arg: any) : any {
    return arg;
}

// 泛型
function identityGen<T> (arg: T):T {
    return arg;
}

let output = identityGen<string>('string')
// 使用类型推断
output = identityGen('string')

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function identityT<T> (arg: T) {
    return arg;
}

let myTest: <U>(arg: U) => U = identityT;

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

let myInterface2: GenericIdentityFn2<number> = identityInterface;

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let genericNum = new GenericNumber<number>();
genericNum.add = function(x, y) {return x+y;}

interface Lengthwise {
    length: number
}

function logging<T extends Lengthwise> (arg: T): T{
    console.log(arg.length);
    return arg;
}

// logging(10); // Error, number 没有 .length 属性
logging({length: 10, value: 2});

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c:new()=>A):A {
    return new c();
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask;