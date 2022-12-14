// CHECK JS LINK
console.log('JS OK');

//! TESTO 

/*Data una lista della spesa , 
stampare in pagina gli elementi della lista individualmente con un ciclo while.*/

//Creo lista della spesa

const groceryList = ['peperoni','mele','carne','formaggio','pasta','biscotti',];

//Recupero elemento dal DOM

const groceryElement = document.getElementById('grocery-list');

//Variabile contatore
let i = 0;
let message = '<ul>';

while ( i < groceryList.length){
 message += `<li>${groceryList[i]}</li>`;
 i++;
}

message += '</ul>'

groceryElement.innerHTML = message;