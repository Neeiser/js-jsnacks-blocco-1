/* Calcola la somma e la media dei primi 10 numeri */

/* for cycle */

 
const arrNumeri = [];
let sum = 0;
let media = 0;

for (let i = 0; i < 10; i++) {
    arrNumeri.push(i + 1);
    sum = sum + arrNumeri[i];
    console.log(arrNumeri[i])
}

media = sum / 10;

console.log('la somma totale è di: ' + sum);
console.log('la media totale è di: ' + media); 


/* 
const whileArrNumbers = [];
let whileSum = 0;
let whileMedia = 0;

while () {

} 
*/