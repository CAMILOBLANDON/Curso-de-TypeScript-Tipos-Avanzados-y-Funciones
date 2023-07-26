// Nico => [N,i,c,o] => string => strig[]
// [N,i,c,o]  =>Nico => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) return input.join();
  else return input.split('');
}
const rtaArray = parseStr('Nico');

console.log('rtaArray Nico=>', rtaArray);
const rtaString = parseStr(['N', 'i', 'c', 'o']);
console.log('rtaString', "['N', 'i', 'c', 'o'] =>", rtaString);
