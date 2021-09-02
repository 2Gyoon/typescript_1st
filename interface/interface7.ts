interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function(name: string, age?: number){  
  // 물음표를 지우면 에러 발생
  console.log(`안녕하세요~ ${name}입니다.`);
}

// helloPerson("hi", "hi")
helloPerson("hi", 54)