// Array
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

console.log('Arreglo original: ' , orders);

// Crear un nuevo arreglo para traer solo los totales
const totales = orders.map(item => item.total);
console.log('Arreglo solo con totales: ' , totales);

// Crear un nuevo arreglo con el item del IVA
// const iva = orders.map(item => {
//     // agregar propiedad
//     item.iva = 19;
//     // retornar propiedad 
//     return item;
// })

// console.log('Arreglo para afectar el array original: ' , iva);
// console.log('Arreglo original: ' , orders);

const iva = orders.map((item) => {
    return {
        ...item,
        iva: 19
    };
});

console.log('Arreglo para no afectar el array original: ' , iva);
console.log('Arreglo original: ' , orders);



function addNewAttr(orders) {
    const ejercicio = orders.map((item) => {
        return {
          ...item,
          taxes: Math.round(item.total * 19 / 100) 
        };
    });

    return ejercicio;
}
  
console.log(addNewAttr(orders));

// const result = addNewAttr(orders);
// console.log('arreglo' , result);


// export function addNewAttr(array) {
//     // crear una nuevo arreglo que va a tener las funciones
    
//   }
  