const numbers = [2,  2 , 2 ,2];

// Algunos de los numeros es par 
const rta1 = numbers.some(number => 
    number % 2 === 0
);

console.log('par' , rta1);

// const n = 1;

// Algunos de los numeros es impar 
const rta3 = numbers.some(number => {
    return number % 2 !== 0; 
});

console.log('impar', rta3);


// Iterando por cada numero (No muy conveniente, mejor foreach)
// const rta = numbers.some(number => {
//    if(number % 2 === 0){
//     alert("Encontro par");
//    }else{
//     alert("No encontro par");
//    }
// });

// console.log(rta);