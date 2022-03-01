
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

let indexNomiRandom = Math.floor(Math.random()*nomiArr.length);
let indexCognomiRandom = Math.floor(Math.random()*cognomiArr.length);


while (fakeGuest.length < 3) {
    nomiArrRandom = nomiArr[indexNomiRandom];
    cognomiArrRandom = cognomiArr[indexCognomiRandom];

    if (!fakeGuest.includes(nomiArrRandom + ' ' + cognomiArrRandom)){
        fakeGuest.push(nomiArrRandom + ' ' + cognomiArrRandom);
    }
}

alert(fakeGuest)