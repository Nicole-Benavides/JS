const products = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

// buscar
// añadir a myArray 
// eliminar del array sin mutar (cambiar) el array 


const myProducts = [];

const rta = products.find(item => {
    return item.id === '🍔'
});

myProducts.push(rta);

let index = null;

const borrar = products.findIndex(product =>{
    return index = product.id === '🍔'
});

newProducts = [];

const arregloNuevo = products.concat(newProducts);


arregloNuevo.splice(borrar, 1);

console.log('Arreglo Original' , products);
console.log('Indice para borrar' , borrar);
console.log('Arreglo Nuevo (eliminado)' , arregloNuevo);

console.log('añadir elemento' , myProducts);
console.log('-'.repeat(40))


// Modificacion con las mismas condiciones


