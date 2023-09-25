const pets = ['bat' , 'dog' , 'cat'];

const rta = pets.includes('dog');

console.log(rta);

// const rta2 = nombres.includes('ana');
// console.log(rta2);

// term: "ana"
// Ouput: ["ana", "anastasia"]



 
// function buscar(array, term){
//     const arrayRecorrido = array.forEach(element => element);
// }

const nombres = ["ana", "santi", "nico", "anastasia"];

// const arrayRecorrido = nombres.filter(nombre => nombre.includes('ana'));

// console.log('elementos' , arrayRecorrido);

function filterByTerm(array, term){
    return array.filter(item => item.includes(term));
}

console.log(filterByTerm(nombres, `xyz`));


