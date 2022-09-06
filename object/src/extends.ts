;(() => {
  class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHello() {
      console.log('sayHello !!!!!!!!!!!')
    }
  }

  class Dog extends Animal {
    sex: string
    constructor(name: string, age: number ,sex: string) {
      super(name, age)
      this.sex = sex
    }
  }

  const dog = new Dog('旺财', 13, 'femal')

  console.log('dog >>>>>>>>', dog)

  dog.sayHello()
})()