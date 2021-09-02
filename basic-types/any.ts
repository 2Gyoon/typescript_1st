function returnAny(message: any): any{
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toSting();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d; // 오류가 나지 않음 : 개체를 통해 전파됨

function leakingAny(obj: any){
  const a:number = obj.num;
  const b = a + 1;
  return b;
}
const c = leakingAny({num: 0});   // object 형태지만 any, c는 number로 나와야하는데 any로 나옴
// c.indexOf('0');