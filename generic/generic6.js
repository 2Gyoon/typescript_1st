"use strict";
var PersonExtends = /** @class */ (function () {
    function PersonExtends(name) {
        this._name = name;
    }
    return PersonExtends;
}());
new PersonExtends('Mary');
new PersonExtends(23);
// new PersonExtends(true);
