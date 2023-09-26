const user = [
    { userId: 1, username: "Tom", attributtes: ["Nice", "Cute"] },
    { userId: 2, username: "Tom1", attributtes: ["Nice", "Cute"] },
    { userId: 3, username: "Tom2", attributtes: ["Nice", "Cute"] },
];


const rta = user.flatMap(user => user.attributtes);

console.log(rta);

// array lineal de fechas de inicio 

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};




fecha1 = [];
fecha2 = [];
const NewArray1 = [];
const NewArray = [];

const array1 = NewArray.concat(calendars)
    .flatMap(item => item.primaryCalendar
        .flatMap(atributo => {
            fecha1.push(atributo.startDate)
        })
    );

const array2 = NewArray1.concat(calendars)
    .flatMap(item => item.secondaryCalendar
        .flatMap(atributo => {
            fecha2.push(atributo.startDate)
        })
    );



console.log('fechas primary: ', fecha1);
console.log('fechas secondary: ', fecha2);

const arreglos = fecha1.concat(fecha2);

const arreglo = arreglos.join(' , ');
console.log(arreglo)



// Contador de palabras dentro de array 


const palabra = "Beautiful is better than ugly";

const rta5 = palabra.split(' ');
console.log('array palabras' , rta5.length);



const arrayPalabras = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
];

// De array a string 
const rta1 = arrayPalabras.join(' ');

// De string a array
const rta2 = rta1.split(' ');
const rtaFinal = rta2.length


console.log(arrayPalabras);
console.log(rta1);
console.log(rta2);
console.log(rtaFinal);


function countWords(array) {
   return array.join(' ').split(' ').length
}

console.log(countWords(arrayPalabras));

