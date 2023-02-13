const nome = 'Carlos';
const idade = 25;
const adulto: boolean = idade > 18;
// const simbolo = Symbol('M');
const big: bigint = 564665425365426355652;

// console.log(`${nome}, ${idade},  ${big}, ${adulto}`);

//Arrays

const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeStrings: Array<string> = ['c', 'a'];

const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeStrings2: string[] = ['c', 'a'];

// type-alias

type Pessoa = { nome: string; idade: number; adulto?: boolean };

// Objetos

const p1: Pessoa = {
  nome: 'Carlos',
  idade: 25,
  adulto: true,
};

console.log(p1);

// Funções

function soma(x: number, y: number): number {
  return x + y;
}
console.log(soma(2, 2));

const soma2: (x: number, y: number) => number = (x, y) => x + y;
console.log(soma2(2, 2));

// Type any - Significa que não tem tipo especifico.
// pode ser qualquer coisa
// number, string, boolean, enfim pode ser qualquer coisa;

// tipo void é quando uma função ou método não retorna nada.

// type object

// não pode usar type object e nem type {} tem que especificar

type Person = {
  name: string;
  age: number;
};
const obj: Person = {
  name: 'Carlos',
  age: 25,
};

console.log(obj);

// que você não tem uma chave dentro do seu objeto.
// obj1 = {
//   a: 1,
//   b: 2,
// c: string;
// [key: string]: unknown;
// }

// obj1.c = 3 XXXX não pode

// dai tem que usar index Signatures em portugues
// assinatura de index e ou colocar essa chave
// como opcional no codigo mesmo

// se vc usar por exemplo [key:string]; unknown pode adicionar
// mais outras chaves.

//---------------------------------------------------

// Array<T> - T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac + valor) => ac * valor, 1);
}

// function concatenaStrings(...args: string[]): string {
//   return args.reduce(
//     (ac: string, valor: string) => {
//       ac + valor;
//     }
//   );
// }

const concatenacao = concatenaStrings('a', 'b', 'c');
console.log(concatenacao);

// Array<T> - T[]

function multipliscaArgs(...args: Array<number>): number {
  return args.reduce((ac: number, valor: number) => ac * valor, 1);
}

// function somaArgs(...args: Array<number>): number {
//   return args.reduce((ac: number, valor: number) => {
//     console.log(ac, valor);
//     ac + valor, 1;
//   });
// }

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
