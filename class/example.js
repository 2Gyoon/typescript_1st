"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(_name, age) {
        this._name = _name;
        this.age = age;
        // 디폴트는 public
        //public name: string = "Mark";
        //age: number = 25;   // 이렇게 직접 값을 설정해주거나 constructor로 설정해주면 에러 안 생김
        //age!: number; // 클래스 내부가 아닌 다른 곳에서 직접 값을 할당하고자 할때 ! 사용
        //private _age!: number;
        //public age: number;
        this.name = "Mark";
        this.country = "America";
        // if(age === undefined){
        //   this.age = 20;
        // }else{
        //   this.age = age;
        // }
        this.country = "Korea"; // readonly가 있어도 변경 가능 = 초기화 되는 영역에서만 set 가능
    }
    //public async init(){}
    /*
    constructor(name: string){
      this.name = name;
    }
    */
    /*
    get name(){
      // console.log("get");
      return this._name + " Lee";
    }
    */
    /*
    set name(n :string){
      // console.log("set")
      this._name = n;
    }
    */
    Person.prototype.hello = function () {
        //this.country = 'Korea'; // error
    };
    return Person;
}());
var p1 = new Person("Mark", 64);
// const p2: Person = new Person();
// p1.age = 36;
// console.log(p1.age);
console.log(p1.name); // get을 하는 함수를 getter라고 함
//p1.name = "Anna";     // set을 하는 함수를 setter라고 함, readonly를 사용하면 에러
console.log(p1.name);
// class => object를 만들어내는 청사진 역할
// {mark: 'male', jade: 'male'}
// {chloe: 'female', anna: 'female', tom: 'male'}
var Students = /** @class */ (function () {
    function Students() {
    }
    return Students;
}());
var a = new Students();
a.mark = "male";
a.jade = "male";
console.log(a);
var b = new Students();
b.chloe = 'female';
b.anna = 'female';
b.jane = 'female';
console.log(b);
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.hello = function () {
        console.log("hi", Person2.CITY);
    };
    Person2.prototype.change = function () {
        Person2.CITY = "LA";
    };
    Person2.CITY = "Seoul";
    return Person2;
}());
var p3 = new Person2();
p3.hello();
var p4 = new Person2();
p4.hello();
p3.change();
p4.hello();
// Person2.hello();
// Person2.CITY;
var ClassName = /** @class */ (function () {
    function ClassName() {
    }
    ClassName.getInstance = function () {
        // ClassName 으로 부터 만든 object가 없으면 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        // ClassName 으로 부터 만든 object가 있으면 그걸 리턴
        return ClassName.instance;
    };
    ClassName.instance = null;
    return ClassName;
}());
var c = ClassName.getInstance();
var d = ClassName.getInstance();
console.log(c === d);
var Parent = /** @class */ (function () {
    function Parent(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Parent.prototype.print = function () {
        console.log("\uC774\uB984\uC740 " + this._name + "\uC774\uACE0 \uB098\uC774\uB294 " + this._age + "\uC785\uB2C8\uB2E4^^");
    };
    Parent.prototype.printName = function () {
        console.log(this._name, this._age);
    };
    return Parent;
}());
var p = new Parent("mark", 36);
p.print();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(age) {
        var _this = _super.call(this, 'mark jr.', age) // 자식의 생성자에서는 super를 항상 먼저 호출해주어야 함
         || this;
        // public _name = "mark jr.";
        _this.gender = 'female';
        _this.printName();
        return _this;
    }
    return Child;
}(Parent));
//const s = new Child("Son", 13);
// s.print();
// s.gender;
// s._name;
var s = new Child(6);
s.print();
var AbstractPerson = /** @class */ (function () {
    function AbstractPerson() {
        this._name = "Mark";
    }
    return AbstractPerson;
}());
// new AbstractPerson() //abstract가 붙어있는 class는 기능이 완전하지 않기 때문에 new로 생성할 수 없음
var Person3 = /** @class */ (function (_super) {
    __extends(Person3, _super);
    function Person3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person3.prototype.setName = function (name) {
        this._name = name;
    };
    return Person3;
}(AbstractPerson));
var g = new Person3();
g.setName("tom");
