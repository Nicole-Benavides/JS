// Ejercicio 
// Contar por rangos

// array de los numeros 
const numeros = [1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10, 10];

// console.log(rangos);


// contar los numeros 
// const conteo = numeros.reduce((obj, item) =>{
//     if(!obj[item]){
//         obj[item] = 1;
//     }else{
//         obj[item] = obj[item] + 1;
//     }
//     return obj;
// } , {});

// contar numeros por rangos 

// const numeros = [1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10, 10];

const conteo = numeros.reduce((obj, item) =>{
    if(item <= 5){
        obj["1-5"] += 1;
    }else if(item >= 6){
        obj["6-10"] += 1;
    };
    return obj;
} , {
    "1-5": 0,
    "6-10": 0
});


// console.log(conteo);

// array
const numbers = [1, 2, 3 ,4 ,2, 9];

// // sumar numeros del array
// const arraySuma = numbers.reduce((obj, item) => {
//     obj["suma"] += item;
//     return obj;
// } , {
//     "suma": 0
// });

// console.log(arraySuma);


function calcSum(numbers) {
    return numbers.reduce((obj, item) => {
      obj["suma"] += item;
      return obj;
    }, {
      "suma": 0
    });
}
  
console.log(calcSum(numbers));


