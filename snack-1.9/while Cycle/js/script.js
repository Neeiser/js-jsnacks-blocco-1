/* Calcola la somma e la media dei primi 10 numeri */

/* while cycle */

const whileArrNumeri = [];
let whileSum = 0;
let whileMedia = 0;

let index= 0;

while (index < 10) {
    whileArrNumeri.push(index + 1);
    whileSum += whileArrNumeri[index];
    index++;
    console.log(index);

}

whileMedia = whileSum / 10;

console.log('la somma totale è di: ' + whileSum);
console.log('la media totale è di: ' + whileMedia);