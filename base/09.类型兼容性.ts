/*
 * @Author: yangweixin
 * @Date: 2020-05-21 16:13:55
 * @LastEditTime: 2020-05-21 16:17:04
 * @LastEditors: Please set LastEditors
 * @Description: 类型兼容性
 * @FilePath: \typeScript\base\09.类型兼容性.ts
 */ 

 interface Named {
   name: string;
 }

 class Person {
   name: string

   constructor (theName: string) {
     this.name = theName
   }
 }

 let yang: Named;

 yang = new Person('Jack');
