const letters = ['a', 'b' , 'c'];


const cont = document.getElementById('app2');


letters.forEach(letter => {
    cont.innerHTML += 
    `
        <li>${letter}</li>
    `;

    // cont.innerText +=  " " + letter ;
});



