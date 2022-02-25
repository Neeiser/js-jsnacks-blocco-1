/* Crea un array vuoto. */
/* Chiedi per 6 volte all’utente di inserire un numero, */
/* Se è dispari inseriscilo nell’array. */

const arrNumb = [];

for (i = 0 ; i < 6 ; i++) {
    let userNumberInput = parseInt(prompt('Inserisci un numero intero positivo'));

    if (userNumberInput % 2 == 1) {
        arrNumb.push(userNumberInput);
    }
}

alert ('Dei numeri che hai inserito, quelli dispari sono: ' + arrNumb +'.')