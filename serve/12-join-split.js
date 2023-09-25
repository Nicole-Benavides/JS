const ej1 = "La forma de correr Python";

const ej2 = "La API para nunca parar de aprender";

const ej3 = "Curso de arrays";

function parseToUrl(frase){
    return frase.split(' ').join('-').toLowerCase();
}

console.log(parseToUrl(ej1));
console.log(parseToUrl(ej2));
console.log(parseToUrl(ej3));