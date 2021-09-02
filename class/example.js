"use strict";
class Person {
    constructor(_name, age) {
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
    hello() {
        //this.country = 'Korea'; // error
    }
}
const p1 = new Person("Mark", 64);
// const p2: Person = new Person();
// p1.age = 36;
// console.log(p1.age);
console.log(p1.name); // get을 하는 함수를 getter라고 함
//p1.name = "Anna";     // set을 하는 함수를 setter라고 함, readonly를 사용하면 에러
console.log(p1.name);
// class => object를 만들어내는 청사진 역할
// {mark: 'male', jade: 'male'}
// {chloe: 'female', anna: 'female', tom: 'male'}
class Students {
}
const a = new Students();
a.mark = "male";
a.jade = "male";
console.log(a);
const b = new Students();
b.chloe = 'female';
b.anna = 'female';
b.jane = 'female';
console.log(b);
class Person2 {
    hello() {
        console.log("hi", Person2.CITY);
    }
    change() {
        Person2.CITY = "LA";
    }
}
Person2.CITY = "Seoul";
const p3 = new Person2();
p3.hello();
const p4 = new Person2();
p4.hello();
p3.change();
p4.hello();
// Person2.hello();
// Person2.CITY;
class ClassName {
    constructor() {
    }
    static getInstance() {
        // ClassName 으로 부터 만든 object가 없으면 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        // ClassName 으로 부터 만든 object가 있으면 그걸 리턴
        return ClassName.instance;
    }
}
ClassName.instance = null;
const c = ClassName.getInstance();
const d = ClassName.getInstance();
console.log(c === d);
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고 나이는 ${this._age}입니다^^`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
const p = new Parent("mark", 36);
p.print();
class Child extends Parent {
    constructor(age) {
        super('mark jr.', age); // 자식의 생성자에서는 super를 항상 먼저 호출해주어야 함
        // public _name = "mark jr.";
        this.gender = 'female';
        this.printName();
    }
}
//const s = new Child("Son", 13);
// s.print();
// s.gender;
// s._name;
const s = new Child(6);
s.print();
