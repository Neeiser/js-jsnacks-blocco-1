/* Calcola la somma e la media dei primi 10 numeri */

/* while cycle */

const arrNumeri = [];
let somma = 0;
let media = 0;

let i= 0;

while (i < 10) {
    arrNumeri.push(i + 1);
    somma += arrNumeri[i];
    i++;
    console.log(i);

}

media = somma / 10;

console.log('la somma totale è di: ' + somma);
console.log('la media totale è di: ' + media);