interface Human {
    name: string
    eat(): void
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name
    }
    name: string
    eat() { }
    sleep() { }
}

// 接口的继承
interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

// 继承多个接口
interface Boy extends Man, Child { }

let boy: Boy = {
    name: '',
    run() { },
    eat() { },
    cry() { }
}

// 接口继承类
class Auto {
    state = 1
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
    state = 1
}

class Bus extends Auto implements AutoInterface {
    // 继承了Auto类，不必额外实现接口
}