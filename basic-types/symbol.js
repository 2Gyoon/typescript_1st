"use strict";
var _a;
console.log(Symbol('foo') === Symbol('foo')); // false// 고유하고 수정불가능한 값
var sym = Symbol();
var obj = (_a = {},
    // sym: "value",
    _a[sym] = "value",
    _a);
// obj["sym"]
obj[sym];
