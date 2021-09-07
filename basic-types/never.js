"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
var a = 'hello';
if (typeof a !== 'string') {
    a;
}
var b = 23;
if (typeof b !== 'number') {
    b;
}
if (typeof e !== 'string') {
    e;
}
// const f: Indexable<{}> = '';
