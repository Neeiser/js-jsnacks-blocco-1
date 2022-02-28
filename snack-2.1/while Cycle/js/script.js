/* 
- Chiedere per 5 volte all’utente di inserire un numero.
- Stampa la somma di tutti i numeri inseriti.
(Esegui questo programma in due versioni, con il for e con il while.) 
*/


/* CICLO WHILE */

let numeriUser
let sommaNumeri = 0;
let indexNumeri = 0;

while (indexNumeri < 5){
    numeriUser = parseInt(prompt("Inserisci un numero intero positivo:"));
    sommaNumeri += numeriUser;
    console.log(sommaNumeri);
    indexNumeri++;
}

alert('La somma dei numeri che mi hai dato è di: ' + sommaNumeri);
