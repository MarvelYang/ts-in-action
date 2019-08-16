class Dog {
    constructor(name: string) {
        this.name = name
    }
    name: string
    run() { }
    private pri() { } // 私有属性
    protected pro() { } // 保护属性
    readonly legs: number = 4 // 只读属性
    static food: string = 'bones'
}
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
console.log(Dog.food)

// 类的继承
class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
    }
    // color: string 在参数中直接添加修饰符，可以省略
}

let husky = new Husky('ha', 'black')
console.log(Husky.food)