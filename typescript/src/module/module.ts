/**
 * 模块在其自身的作用域内执行，而不是全局作用域内
 * 在一个模块中定义的变量、函数、类等等在模块外部是不可见的，除非使用 export 将其导出
 * 
 * 模块是自声明的；两个模块之间的关系是通过在文件级别上使用imports和exports建立的。
 */

 // 任何生命都能够通过 export 关键字导出
 export interface StringValidator {
     isAcceptable(s: string): boolean;
 }

 export const numberRegexp = /^[0-9]+$/

 export class ZipCodeValidator implements StringValidator {
     isAcceptable (s: string) {
         return s.length === 5 && numberRegexp.test(s)
     }
 }

 // 对导出的部分重命名
 export {ZipCodeValidator as mainVaildator};