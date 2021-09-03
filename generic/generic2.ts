function helloBasic<T, U>(message : T, comment: U): T{
  return message;
}

helloBasic<string, number>("Mary", 35); // T를 설정
helloBasic(35, 256); // T를 추론