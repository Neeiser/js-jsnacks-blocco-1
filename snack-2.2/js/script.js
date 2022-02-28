/* 
- Chiedere per 5 volte all’utente di inserire un numero.
- Stampa la somma di tutti i numeri inseriti.
(Esegui questo programma in due versioni, con il for e con il while.) 
*/


/* CICLO FOR */

let numeriUser
let somma = 0;

for (i = 0; i < 5; i++){
    numeriUser = parseInt(prompt("Inserisci un numero intero positivo:"));
    somma += numeriUser;
    console.log(somma);
}

alert('La somma dei numeri che mi hai dato è di: ' + somma);

