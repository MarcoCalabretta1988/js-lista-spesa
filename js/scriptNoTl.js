// CHECK JS LINK
console.log('JS OK');

//! TESTO 

/*Data una lista della spesa , 
stampare in pagina gli elementi della lista individualmente con un ciclo while.*/

//Creo lista della spesa

const groceryList2 = ['caffè','acqua','nutella','torrone','pere','noci','cocco','riso',];

//Recupero elemento dal DOM

const groceryElement2 = document.getElementById('notl-list');

//Variabile contatore
let j = 0;
const list = document.createElement('ul');

while ( j < groceryList2.length){
 const listElement  = document.createElement('li');
 listElement.append(groceryList2[j]);
 list.appendChild(listElement);
 j++;
}


console.log(list,groceryElement2);

groceryElement2.appendChild(list);