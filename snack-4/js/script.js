/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby. */
/* Chiedi all’utente il suo nome. */
/* Comunicagli se può partecipare o no alla festa. */

const arrInvitedGuests = ['Agamennone', 'Achille', 'Ettore', 'Menelao', 'Rodrigo Borgia', 'Putin',];

let guestNameInput = prompt('Il messere favorisca il nome prego:');
let guestNameUpper = guestNameInput.toUpperCase();
let match= false;

for (let arrItem = 0; arrItem < arrInvitedGuests.length; arrItem++){
    
    if (arrInvitedGuests[arrItem].toUpperCase() == guestNameUpper) {
        match= true;
    }
}

if (match == true) {
    alert('Può entrare messere!');
} else {
    alert('Lei è un ciarlatano! Guardie, allontanate questo impostore!');
}