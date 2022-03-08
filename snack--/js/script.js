/* 
- Crea un array composto da 10 automobili.
- Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
alimentazione (benzina, diesel, gpl, elettrico, metano).

- Dividi le automobili in 3 array separati: nel primo array solo le auto a
benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

- Infine stampa separatamente i 3 array. 
*/


// - Crea un array composto da 10 automobili.

// - Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
//   alimentazione (benzina, diesel, gpl, elettrico, metano).

const carArr = [
    {
        auto: 1,
        marca : 'fiat',
        modello: 'r1',
        alimentazione: 'benzina',
    },
    {
        auto: 2,
        marca : 'lancia',
        modello: 'r2',
        alimentazione: 'benzina',
    },
    {
        auto: 3,
        marca : 'alfa',
        modello: 'r3',
        alimentazione: 'benzina',
    },
    {
        auto: 4,
        marca : 'bmw',
        modello: 'r4',
        alimentazione: 'disel   ',
    },
    {
        auto: 5,
        marca : 'audi',
        modello: 'r5',
        alimentazione: 'disel   ',
    },
    {
        auto: 6,
        marca : 'smart',
        modello: 'r6',
        alimentazione: 'gpl',
    },
    {
        auto: 7,
        marca : 'ford',
        modello: 'r7',
        alimentazione: 'elettrico',
    },
    {
        auto: 8,
        marca : 'seat',
        modello: 'r8',
        alimentazione: 'elettrico',
    },
    {
        auto: 9,
        marca : 'peugeot',
        modello: 'r9',
        alimentazione: 'metano',
    },
    {
        auto: 10,
        marca : 'chevrolet',
        modello: 'r10',
        alimentazione: 'metano',
    },
]


// - Dividi le automobili in 3 array separati: nel primo array solo le auto a
//   benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const benzObj = [];
const diselObj = [];
const othersObj = [];

for(i=0; i < carArr.length; i++) {
    if (carArr[i].alimentazione == 'benzina'){
        benzObj.push(carArr[i]);
    } else if (carArr[i].alimentazione == 'disel') {
        diselObj.push(carArr[i])
    } else {
        othersObj.push(carArr[i])
    }
}


// - Infine stampa separatamente i 3 array. 

console.log(benzObj);
console.log(diselObj);
console.log(othersObj);