
// 布尔值 
let isDone: boolean = false;
// 数字
let decLiteral: number = 6;
// 十六进制
let hexLiteral: number = 0xf00d;
// 二进制
let binaryLiteral: number = 0b1010;
// 八进制
let octalLiteral: number = 0o744;

// 字符串
let yourName: string = `Gene`;
// 使用字符串模板
let sentence: string = `Hello, name is ${yourName}`

// 数组
let list: number[] = [1,2,3]
let genList: Array<number> = [1,2,3]

// 元组
let x: [string, number] = ['hello', 10]

// 越界
x[3] = 'world' // 字符串可以赋值给 (string | number) 类型
// x[4] = true; // 布尔不是 (string | number) 联合类型

// 枚举
// 默认从0开始，可以手动赋值
enum Color {Red=1, Green, Blue}
let color: Color = Color.Blue
let color1: string = Color[1]

// Any 类型是在编程阶段还不清楚类型变量时的类型
let notSure: any = 4;
notSure = 'may be a string instead'
let listArr: any = [1, true, 'free'];

// Object 类型只允许给它赋任意值
let someOb: Object = 'test';

// 强制类型转换
let someValue: any = 'this is a string';
let srtLength: number = (<string> someValue).length;
// 也可以使用 as
let strLengthAs: number = (<string> someValue).length;



