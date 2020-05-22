/*
 * @Author: your name
 * @Date: 2020-05-22 10:11:46
 * @LastEditTime: 2020-05-22 15:11:26
 * @LastEditors: Please set LastEditors
 * @Description: 模块
 * @FilePath: \typeScript\base\13.模块.ts
 */ 

// 导出
export interface StingValidator {
  isAcceptable(s: string): boolean;
}

export const numberRegExp = /^[0-9]+$/;

export class ZipCodeValidator implements StingValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegExp.test(s)
  }
}