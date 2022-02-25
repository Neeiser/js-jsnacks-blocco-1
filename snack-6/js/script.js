
/* Chiedi un numero di 4 cifre all’utente */
/* Calcola la somma di tutte le cifre che compongono il numero. */

const inputNumeroInserito= prompt('Scrivi un numero positivo di 4 cifre');

let somma=0

for (let i = 0; i < inputNumeroInserito.length; i++) {

    somma += parseInt(inputNumeroInserito[i]); 
}

alert(somma);





