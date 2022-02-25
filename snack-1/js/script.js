const num1 =parseInt(prompt('Numero 1:'));
const num2 =parseInt(prompt('Numero 2:'));

if (num1 < num2) {
    alert('il numero ' + num2 + ' è maggiore di ' + num1);
} else if(num1 > num2) {
    alert('il numero ' + num1 + ' è maggiore di ' + num2);
} else {
    alert('i numeri sono uguali');
}