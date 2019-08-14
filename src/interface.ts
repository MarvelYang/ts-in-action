interface List {
    readonly id: number;
    name: string;
    age?: number
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
    })
}

let result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B', age: 10 }
    ]
}

render(result)

// 数字索引
interface StringArray {
    [index: number]: string // 任意数字索引StringArray都会得到一个string
}

let chars: StringArray = ['A', 'B']

// 字符串索引
interface Names {
    [x: string]: string;
    [z: number]: string
}

// let addFun: (x: number, y: number) => number

// 接口定义函数
// interface Add {
//     (x: number, y: number): number
// }

type Add = (x: number, y: number) => number // 别名定义函数格式
let addFun: Add = (a, b) => a + b

// 混合类型接口，定义一个类库
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib: Lib = (() => { }) as Lib
    lib.version = '1.0'
    lib.doSomething = () => { }
    return lib
}

let lib1 = getLib()
lib1();
lib1.doSomething();

let lib2 = getLib();
