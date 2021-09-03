class Person<T>{
  private _name: T;

  constructor(name: T){
    this._name = name;
  }
}

new Person('Mary');
new Person<string>('Mary');
new Person<number>(35);

class Person2<T, K>{
  private _name: T;
  private _age: K;

  constructor(name: T, age: K){
    this._name = name;
    this._age = age;
  }
}

new Person2('Mary',35);
new Person2<string, number>('Mary', 35);