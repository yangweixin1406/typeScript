/*
 * @Author: yangweixin
 * @Date: 2020-05-21 15:11:36
 * @LastEditTime: 2020-05-21 15:49:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typeScript\base\07.枚举.ts
 */ 

 /**
  * 数字枚举
  */
enum Direction {
  up,
  down = 5,
  left,
  right
}

enum Response1 {
  No = 0,
  Yes = 1
}

function respond (recipient: string, message: Response1): void {
  // console.log(recipient);
}
respond('I am still here.', Response1.No)

/**
 * 字符串枚举
 */
enum Direction1 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}