// 类型检查机制（1）类型推断
let a = 1
let b = [1, null]

let c = (x = 1) => x + 1

// 从左到右推断
window.onkeydown = (event) => {
    console.log(event.bubbles)
}

// 类型断言
interface Foo {
    bar: number
}

let foo = {} as Foo
foo.bar = 1