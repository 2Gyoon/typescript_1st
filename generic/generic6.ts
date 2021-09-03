class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T){
    this._name = name;
  }
}

new PersonExtends('Mary');
new PersonExtends(23);
// new PersonExtends(true);