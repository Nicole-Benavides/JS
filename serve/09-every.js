// const numbers = [1, 2, 3, 4];

// const rta1 = numbers.every(number => number <= 40);
// console.log(rta1);

// Menos de 15 años para aceptar el equipo
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 1,
    },
];

// const edades = team.map(team => team.age);

// const evaluacion = edades.every(edad => {
//     return result = edad < 15
// });

// if(evaluacion === false){
//     alert("Equipo NO aceptado");
// }else{
//     alert("Equipo Aceptado");
// }

pares = [2, 4, 6, 8, 10];
impares = [1, 3, 5, 7, 10, 11];
ejemplo3 = [1, 3, 5];
ejemplo4 = [];


function parImpar(numeros){
    if (numeros.length === 0) {
        return false; // Devolvemos false para arrays vacíos
    }
    return numeros.every(numero => numero % 2 === 0);
}


console.log('Array Par: ' + parImpar(pares));
console.log('Array Impar: ' + parImpar(impares));
console.log('Array Ejemplo 3: ' + parImpar(ejemplo3));
console.log('Array Ejemplo 4: ' + parImpar(ejemplo4));