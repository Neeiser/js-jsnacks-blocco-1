const word1= prompt('Parola 1:');
const word2= prompt('Parola 2:');

if (word1.length < word2.length) {
    alert('la parola ' + word1 + ' è più corta di ' + word2);
} else if(word1.length > word2.length) {
    alert('la parola ' + word2 + ' è più corta di ' + word1);
} else {
    alert('le 2 parole hanno a stessa lunghezza');
}