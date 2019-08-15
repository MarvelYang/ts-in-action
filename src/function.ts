// 函数定义
function add1(x: number, y: number) {
    return x + y
}

// 以下三种方式都只是函数定义，没有实现具体函数
let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
    (x: number, y: number): number
}

// 可选参数
function add5(x: number, y?: number) {
    return y ? x + y : x
}

// 参数默认值，必选参数之前必须传递undefined
function add6(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q
}

// 剩余参数
function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}

// 函数重置
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
    let first = rest[0]
    if (typeof first === 'string') {
        return rest.join('')
    }

    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur)
    }
}

console.log(add8(1, 2, 3))
console.log(add8('1', '2', '3'))