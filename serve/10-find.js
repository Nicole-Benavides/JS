const numbers = [1, 2, 30, 49, 10];

const rta = numbers.find(number => number === 30);

console.log(rta);

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const rta2 = products.find(product => product.id === '🥞');
const rta3 = products.findIndex(product => product.id === '🥞');

console.log('find: Objeto o valor' , rta2);
console.log('findIndex: Posición del objeto o valor' , rta3);