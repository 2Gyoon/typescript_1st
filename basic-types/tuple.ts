let x: [string, number];

x = ["hello", 39];
// x = [10, "Mark"];  // 순서와 타입, 길이가 맞아야 함

// x[2] = "world";

const person: [string, number] = ["Mark", 39];
const [first, second, /*third*/] = person;
console.log(first, second);