let a : object
a = {}
a = function () {

}

let b : {name: string, age?: number}
b = {
    name: '123'
}
b = {
    name: 'bb',
    age: 18
}

let c: {name: string, [propName: string]: any}
c = {
    name: 'bb',
    age: 18,
    addr: 'aaaa'
}

let d: (a:number, b:number) => number
d = function(n1, n2):number {
    return n1 + n2
}

let e: number[]
let f: Array<number>
let g: string[]
f = [1, 2, 3]
g = ['1']

/**
 * 元祖，固定长度的数组
 * 语法：[类型, 类型]
 */
let h: [string, string]
h = ['11', '22']
// h = [1, 2] // 报错

/**
 * enum 枚举
 */
enum Gender {
    Male,
    Female
}
let i: {name: string, gender: Gender}
i = {
    name: 'bB',
    gender: Gender.Male
}
console.log(i.gender === Gender.Male)

// & 表示同时
let j: {name: string} & {age: number}
j = {
    name: 'bb',
    age: 18
}

// 类型的别名
type myType = 1 | 2 | 3
let k: myType
let m: myType
m = 3


