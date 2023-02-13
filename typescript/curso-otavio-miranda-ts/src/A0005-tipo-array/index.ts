// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac: number, valor: number) => ac * valor, 1);
}

function somaArgs(...args: Array<number>) {
  return args.reduce((ac: number, valor: number) => {
    console.log(ac, valor);
    ac + valor, 1;
  });
}

function subtraiArgs(...args: Array<number>): number {
  return args.reduce((ac: number, valor: number) => ac - valor, 0);
}
function divideArgs(...args: Array<number>): number {
  return args.reduce((ac: number, valor: number) => ac / valor, 1);
}

console.log(multiplicaArgs(2, 2, 2, 2, 2, 2, 2, 2, 2, 2));
console.log(somaArgs(2, 2, 2, 2, 2, 2, 2, 2, 2, 2));
console.log(subtraiArgs(2, 2, 2, 2, 2, 2, 2, 2, 2, 2));
console.log(divideArgs(2, 2, 2, 2, 2, 2, 2, 2, 2, 2));
