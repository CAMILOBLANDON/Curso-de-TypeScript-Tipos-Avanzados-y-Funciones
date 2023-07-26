const withoutEnd = () => {
  while (true) {
    console.log('nunca pares de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not works');
};

console.log(example('hola'));
console.log(example([1, 2, 15, 47]));
console.log(example(465));
console.log(example('hola despues del fail'));
