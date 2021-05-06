function fn<T> (a: T): T{
    return a
}
let res = fn(10)
let res2 = fn<string>('hello')
