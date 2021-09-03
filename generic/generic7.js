"use strict";
var person = {
    name: 'Mary',
    age: 42,
};
// type Keys = keyof IPerson;
// const keys: Keys = 'age'
// IPerson[keyof IPerson] 
// => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp(obj, key) {
    return obj[key];
}
getProp(person, 'age');
console.log(getProp(person, 'age'));
function setProp(obj, key, value) {
    obj[key] = value;
}
console.log(person);
setProp(person, 'name', 'Jane');
setProp(person, 'age', 35);
console.log(person);
