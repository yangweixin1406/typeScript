/*
 * @Author: yangweixin
 * @Date: 2020-05-21 16:29:11
 * @LastEditTime: 2020-05-21 17:25:32
 * @LastEditors: Please set LastEditors
 * @Description: 高级类型
 * @FilePath: \typeScript\base\10.高级类型.ts
 */ 

/**
 * 交叉类型
 */

 function extend<T, U>(first: T, second: U): T & U {
   let result = <T & U>{};
   for (let id in first) {
     (<any>result)[id] = (<any>first)[id];
   }
   for (let id in second) {
    //  if (!result.hasOwnProperty(id)) {
    //    (<any>result)[id] = (<any>second)[id];
    //  }
   }
   return result
 }

 class Person1 {
   constructor(public name: string) {}
 }

 interface Loggable {
   log(): void;
 }

 class ConsoleLoggable implements Loggable {
   log() {
     console.log(123)
   }
 }

 var jim = extend(new Person1('Jim'), new ConsoleLoggable());

/**
* 类型保护和类型断言
*/
function broken (name?: string | null): string {
  function postfix (otherName: string) {
    return name!.charAt(0) + 'hello a' + otherName;
  }
  name = name || 'Bob'
  return postfix('great');
}

/**
 * 类型别名
 */
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n(); 
  }
}