let a = 10

let b: number | string
b = 10
b = '11'

let d: any
d = 10
d = '22'
d = true

let e: unknown
e = 10
e = '33'

let s: string
s = d

// unknown 实际上是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
// s = e // 报错
if (typeof e === 'string') {
    s = e
}
// 类型断言，可以用来告诉解析器变量的类型
s = e as string
s = <string> e

// void 用来表示空，以函数为例，就表示没有返回值的函数
function Fn(num): void {
    
}

// never 用来表示永远不返回结果
function fn2(): never {
    throw new Error('报错了')
}