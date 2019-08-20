// 泛型
// function log<T>(value: T): T {
//     console.log(value)
//     return value
// }

// log<string[]>(['a', 'b']) // 显式声明类型
// log(['a', 'b']) // 类型推断

// 类型别名定义泛型函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log

// interface Log {
//     <T>(value: T): T
// }

class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}

let log1 = new Log<number>()
log1.run(1)

let log2 = new Log()
log2.run('1')

// 泛型约束
interface Length {
    length: number
}

function log<T extends Length>(value: T): T {
    console.log(value, value.length)
    return value
}

log([1])
log('123')
log({ length: 1 })