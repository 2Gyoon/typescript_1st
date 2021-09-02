console.log(Symbol('foo') === Symbol('foo')); // false// 고유하고 수정불가능한 값

const sym = Symbol();

const obj = {
  // sym: "value",
  [sym]: "value",
};

// obj["sym"]
obj[sym]