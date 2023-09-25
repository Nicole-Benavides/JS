const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const fusion = array1.concat(array2);

const palabra = array1.concat(...'hola');

console.log('fusion', fusion);
console.log('concatener palabra', palabra);