# Set 和 Map 数据结构

### 一、Set
- ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
- Set本身是一个构造函数，用来生成 Set 数据结构。
- Set 实例的属性和方法
  - Set.prototype.constructor：构造函数，默认就是Set函数。
  - Set.prototype.size：返回Set实例的成员总数。
  - Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
  - Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
  - Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
  - Set.prototype.clear()：清除所有成员，没有返回值。
  - Set.prototype.keys()：返回键名的遍历器
  - Set.prototype.values()：返回键值的遍历器
  - Set.prototype.entries()：返回键值对的遍历器
  - Set.prototype.forEach()：使用回调函数遍历每个成员
  - 注意： 需要特别指出的是，Set的遍历顺序就是插入顺序
  - 注意： Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。
- Array.from方法可以将 Set 结构转为数组。
```js
// 例一: 数组去重
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

// 例三
const set = new Set(document.querySelectorAll('div'));
set.size // 56

// 类似于
const set = new Set();
document
 .querySelectorAll('div')
 .forEach(div => set.add(div));
set.size // 56

// Array.from方法可以将 Set 结构转为数组
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);

// 使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

### 二、WeakSet
- 和Set有两个区别：
  - 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
  - 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

### 三、Map
*JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。*
- Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
```js
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```