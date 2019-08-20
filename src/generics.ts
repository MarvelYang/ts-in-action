// 泛型
function log<T>(value: T): T {
    console.log(value)
    return value
}

log<string[]>(['a', 'b']) // 显式声明类型
log(['a', 'b']) // 类型推断

// 类型别名定义泛型函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log

interface Log {
    <T>(value: T): T
}