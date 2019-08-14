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