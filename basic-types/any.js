"use strict";
function returnAny(message) {
    console.log(message);
}
var any1 = returnAny('리턴은 아무거나');
any1.toSting();
var looselyTyped = {};
var d = looselyTyped.a.b.c.d; // 오류가 나지 않음 : 개체를 통해 전파됨
function leakingAny(obj) {
    var a = obj.num;
    var b = a + 1;
    return b;
}
var c = leakingAny({ num: 0 }); // object 형태지만 any, c는 number로 나와야하는데 any로 나옴
// c.indexOf('0');
