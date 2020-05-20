/*
 * @Author: yangweixin
 * @Date: 2020-05-20 16:49:10
 * @LastEditTime: 2020-05-20 17:04:48
 * @LastEditors: Please set LastEditors
 * @Description: Ts学习之泛型
 * @FilePath: \typeScript\base\06.泛型.ts
 */ 

 /**
  * 泛型之 Hello World
  */
 function identity<T>(arg: T): T {
   return arg;
 }
// console.log(identity<string>('I am still here waiting for you!'));
// console.log(identity<number>(190584));
// console.log(identity<void>(undefined));
// console.log(identity('this is my love'))

/**
 * 使用泛型变量
 */

