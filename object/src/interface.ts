;(() => {

  /**
   * 接口用来定义类结构
   * 接口的属性都不能有实际值，接口只定义结构
   *     在接口中，所有的方法都是抽象方法
   */

  interface animal {
    name: string;
    age: number;
    sayHello(): void;
  }

  const obj: animal = {
    name: '旺财',
    age: 12,
    sayHello() {
      console.log('this.name >>>>>>>>>>>', this.name)
    }
  }

  class Animal implements animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    sayHello(): void {
      throw new Error("Method not implemented.");
    }
  }

})()