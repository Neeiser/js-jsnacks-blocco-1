
/* 

Generatore di “nomi cognomi” casuali
- Prendendo una lista di nomi 
- Prendo una lista di cognomi
- Gatsby vuole generare una falsa lista di 3 invitati.

*/


const nomiArr = ['Agamennone', 'Achille', 'Ettore', 'Menelao', 'Rodrigo', 'Putin',];
const cognomiArr = ['Ottone', 'Ferro', 'Tungsteno', 'Tecnezio', 'Borgia', 'Salmone',];
const fakeGuest = [];

let nomiArrRandom
let cognomiArrRandom


while (fakeGuest.length < 3) {
    nomiArrRandom = nomiArr[Math.floor(Math.random()*nomiArr.length)];
    cognomiArrRandom = cognomiArr[Math.floor(Math.random()*cognomiArr.length)];

    if (!fakeGuest.includes(nomiArrRandom + ' ' + cognomiArrRandom)){
        fakeGuest.push(nomiArrRandom + ' ' + cognomiArrRandom);
    }
}

alert(fakeGuest)