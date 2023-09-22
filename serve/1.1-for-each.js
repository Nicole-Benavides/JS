// Crear el array 

const tareas = [
    { titulo: 'Tarea 1', estado: 'Completo' },
    { titulo: 'Tarea 2', estado: 'No completo' },
    { titulo: 'Tarea 3', estado: 'Completo' }
];

// Contenedor de HTML para añadir los elementos 
const card = document.getElementById('card-tarea');

// Mostrar el array
tareas.forEach(tarea => {

    // Crear un Div para agregar elementos
    const div = document.createElement('div');

    // agregar elementos
    div.innerHTML += `<h3>${tarea.titulo}</h3>`;
    div.innerHTML += ` 
    <label>Completado</label>
    <input type="checkbox" class="input1">

    <label>No completado</label>
    <input type="checkbox" class="input2">`;

    // agreagar el div contenedor de los elemntos al contenedor HTML
    card.appendChild(div);

    estado = tarea.estado;
        
    let input1 = div.querySelector('.input1');
    let input2 = div.querySelector('.input2');

    if (estado === 'Completo') {
        input1.checked = true;
    } else if (estado === 'No completo') {
        input2.checked = true;
    }




});
