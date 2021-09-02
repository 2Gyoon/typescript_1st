interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

//interface에 있는 내용을 바탕으로 class를 만들어냄
class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string){
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }  
}

const person: IPerson1 = new Person('Mark');
person.hello();