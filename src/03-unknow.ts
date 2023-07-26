let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = 'string';

let isNew: boolean = anyVar;
anyVar.doSomethig();
anyVar.touppercase();
console.log(isNew);

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = 'string';

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

if (typeof unknowVar === 'boolean') {
  let isNewV2: boolean = unknowVar;
}
const parse = (str: string): unknown => {
  return JSON.parse(str);
};
