/* Il software deve chiedere per 10 volte all’utente di inserire un numero. */
/* Il programma stampa la somma di tutti i numeri inseriti. */

arreyNumber= [];

for (let i = 0; i < 10; i++) {
    let numberInsert = parseInt(prompt('Inserisci un numero'));
    arreyNumber.push(numberInsert);
}

let result = 0;

for (let i = 0; i < arreyNumber.length; i++){
    result = result + arreyNumber[i];
}

alert(result);