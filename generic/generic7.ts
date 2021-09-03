interface IPerson{
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'Mary', // property
  age: 42,
};

// type Keys = keyof IPerson;

// const keys: Keys = 'age'


// IPerson[keyof IPerson] 
// => IPerson["name" | "age"] 
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K]{
  return obj[key];
}

getProp(person, 'age');
console.log(getProp(person, 'age'));

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void{
  obj[key] = value;
}
console.log(person);
setProp(person, 'name', 'Jane');
setProp(person, 'age', 35);
console.log(person);