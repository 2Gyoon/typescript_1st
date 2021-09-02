function error(message: string): never{
  throw new Error(message);
}
function fail(){
  return error('failed');
}

function infiniteLoop():never{
  while(true){}
}


let a: string = 'hello';

if(typeof a !== 'string'){
  a;
}

let b: number = 23;

if(typeof b !== 'number'){
  b;
}

declare const e: string | number;
if(typeof e !== 'string'){
  e;
}

// 조건부 type
type Indexable<T> = T extends string ? T & {[index: string]: any} : never;

type ObjectIndexable = Indexable<{}>;
// const f: Indexable<{}> = '';