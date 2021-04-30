var a;
a = {};
a = function () {
};
var b;
b = {
    name: '123'
};
b = {
    name: 'bb',
    age: 18
};
var c;
c = {
    name: 'bb',
    age: 18,
    addr: 'aaaa'
};
var d;
d = function (n1, n2) {
    return n1 + n2;
};
var e;
var f;
var g;
f = [1, 2, 3];
g = ['1'];
/**
 * 元祖，固定长度的数组
 * 语法：[类型, 类型]
 */
var h;
h = ['11', '22'];
// h = [1, 2] // 报错
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: 'bB',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
