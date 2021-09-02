interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male'
}

//p81.gender = "female";  // readonly 라서 입력 못함
