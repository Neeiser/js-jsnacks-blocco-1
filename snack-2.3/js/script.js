
/* 

Generatore di “nomi cognomi” casuali
- Prendendo una lista di nomi 
- Prendo una lista di cognomi
- Gatsby vuole generare una falsa lista di 3 invitati.

*/


const nomiArr = ['Agamennone', 'Achille', 'Ettore', 'Menelao', 'Rodrigo', 'Putin',];
const cognomiArr = ['Ottone', 'Ferro', 'Tungsteno', 'Tecnezio', 'Borgia', 'Salmone',];
const fakeGuest = [];

let nomiArrRandom = Math.floor(Math.random() * nomiArr.length);
let cognomiArrRandom = Math.floor(Math.random() * cognomiArr.length);

let indiceLista = 0;


while (indiceLista < 3) {
    fakeGuest.push(nomiArrRandom + cognomiArrRandom);
    indiceLista++;
    console.log(fakeGuest);
}