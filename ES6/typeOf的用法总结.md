在 JavaScript 中有 6 种不同的数据类型：

string
number
boolean
object
function
symbol
3 种对象类型：

Object
Date
Array
2 个不包含任何值的数据类型：

null
undefined



请注意：

NaN 的数据类型是 number
数组(Array)的数据类型是 object
日期(Date)的数据类型为 object
null 的数据类型是 object
未定义变量的数据类型为 undefined
如果对象是 JavaScript Array 或 JavaScript Date ，我们就无法通过 typeof 来判断他们的类型，因为都是 返回 object。


constructor 属性
constructor 属性返回所有 JavaScript 变量的构造函数。


方法	描述
toExponential()	把对象的值转换为指数计数法。
toFixed()	把数字转换为字符串，结果的小数点后有指定位数的数字。
toPrecision()	把数字格式化为指定的长度。