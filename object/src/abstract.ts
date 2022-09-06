;(() => {
  /**
   *  抽象类
   *      只能用于被继承，不能实例化
   */
  abstract class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    // 抽象方法，子类必须实现这个方法才可以
    abstract sayHello():void
  }

  class Dog extends Animal {
    sex: string
    constructor(name: string, age: number ,sex: string) {
      super(name, age)
      this.sex = sex
    }

    sayHello(): void {
        console.log('汪汪汪汪！！')
    }
  }

  class Cat extends Animal {
    sayHello(): void {
        console.log('喵喵喵喵！！')
    }
  }

  const dog = new Dog('旺财', 13, 'femal')
  console.log('dog >>>>>>>>', dog)
  dog.sayHello()

  const cat = new Cat('咪咪', 3)

  console.log('cat >>>>>>>>', cat)
  cat.sayHello()
})()