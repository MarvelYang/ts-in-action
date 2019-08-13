// 数字枚举
enum Role {
    Reporter = 1, // 决定开始的下标
    Developer,
    Maintariner,
    Owner,
    Guest
}
console.log(Role.Reporter)
console.log(Role)

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
enum Char {
    // const常量会在编译阶段进行计算赋值
    a,
    b = Char.a,
    c = 1 + 3,
    // computed 非常量计算属性会在运行时阶段赋值
    d = Math.random(),
    e = '123'.length,
    f = 4, // 必须注意计算属性后面的枚举成员必须赋予初始值
}

// 常量枚举
// 常量枚举会在编译阶段被移出，运行时代码变整洁，可以用于只需要对象的属性，而不需要对象本身的时候
const enum Month {
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 100
console.log(e, f)
// e === f // 不同枚举类型之间不可比较

let e1: E.a = 1
let e2: E.b
// e1 === e2 // 不同的类型成员不可比较
let e3: E.a = 2
e1 === e3

let g1: G = G.b
let g2: G.a = G.a