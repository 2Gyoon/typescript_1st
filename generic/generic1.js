"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 더 많은 반복된 함수들...
function hello(message) {
    return message;
}
console.log(hello('Mary').length); // length와 같이 문자열에 사용할 수 있는 속성을 any에 사용하게 됨 
console.log(hello(23)); // length를 사용할 수 없는 숫자에도 사용할 수 있는 문제가 발생(에러는 없으나)
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric('Mary').length);
console.log(helloGeneric(35));
console.log(helloGeneric(true).valueOf);
