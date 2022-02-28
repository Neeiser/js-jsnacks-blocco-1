
/* 

- Inserisci un numero. 
- Se è pari stampa il numero.
- Se è dispari stampa il numero successivo.

*/

let numeroInserito = parseInt(prompt('Inserisci un numero intero positivo: '));

if (numeroInserito % 2 == 0){
    alert('Il numero ' + numeroInserito + ' è pari.');
    console.log (numeroInserito);
} else {
    numeroInserito = numeroInserito + 1
    alert('Il numero ' + (numeroInserito - 1) + ' è dispari. Ragion per cui ti stampo il successivo pari: ' + numeroInserito);
    console.log (numeroInserito);
}