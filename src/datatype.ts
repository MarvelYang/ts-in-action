// 原始类型
let bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'

// 数组
// 第二种是ts定义的数组泛型
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3, 4]

// 元祖
let tuple: [number, string] = [1, '2']
// 元祖越界问题，可以添加元素，但是不允许读取
// tuple.push(2)
// console.log(tuple)
// tuple[2]

// 函数
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number // 函数定义
compute = (a, b) => a + b // 函数实现

// 对象
// let obj0: Object = { x: 1, y: 2 } // 需要声明具体属性才可以给变量属性赋值，否则会视为不存在属性
// obj0.x = 1
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false

// undefined, null
let un: undefined = undefined
let nu: null = null

// void
// 使用void 0返回一个undefined，因为undefined不是一个保留字，是window的全局属性，所以undefined可以被赋值覆盖
let noReturn = () => { }

// any
// 不建议使用any，否则失去了使用ts的意义
let x
x = 1
x = []
x = () => { }

// never
// 代表永远不会有返回值的类型，比如抛出异常和死循环
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while (true) { }
}

