"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    return Person;
}());
new Person('Mary');
new Person('Mary');
new Person(35);
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this._name = name;
        this._age = age;
    }
    return Person2;
}());
new Person2('Mary', 35);
new Person2('Mary', 35);
