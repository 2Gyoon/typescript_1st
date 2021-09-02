interface Person3{
  name: string;
  age?: number;           // age가 있어도 되고 없어도 됨
  [index: string]: any;   // 어떤 이름의 property가 와도 괜찮음
}

function hello3(person : Person3): void{
  console.log(`안녕하세요! ${person.name}입니다!`);
}

const p31: Person3 = {
  name: 'Mark', 
  age: 25,
};

const p32: Person3 = {
  name: 'Anna', 
  // age: 54,
  sisters: ['Sung', 'Chan']
};

const p33: Person3 = {
  name: 'Tim', 
  father: p31,
  mother: p32,
};

hello3(p32);