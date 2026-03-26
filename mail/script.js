'use strict';

// lista di email di invitati alla festa PIù BELLA DI OGGI

const listaMail = [
    'gigi.buffon@juve.com',
    'alex.delpiero@juve.com',
    'pavel.nedved@juve.com',
    'fabio.cannavaro@juve.com',
    'david.trezeguet@juve.com',
    'leo.messi@juve.com'
]

// let listaMailToStringa = listaMail.toString();

// console.log(typeof listaMailToStringa);

// devo controllare se l'utente inserisce una mail che è presente
// nella lista array senza usare un metodo proprio degli array

let mailUtente = prompt('inserisci la tua mail').toLowerCase();

console.log(mailUtente);

// controllo se la mail inserita dall'utente
// rispetti i canoni di una mail

while (!mailUtente.includes('@') && !mailUtente.includes('.') ) {
    mailUtente = prompt('ERRORE, inserisci una mail corretta','INSERISCI MAIL CORRETTA')
}

let trovata = false;

for (let z = 0; z < listaMail.length; z++) {

    let element = listaMail[z]; //la variabile element avrà come valore stringa con 
                                // una lista di tutte le mail del'array
    
    if (mailUtente === element) {
        trovata = true; // qui trova la mail giusta
        // break; 
    }
}

if (trovata) {
    console.log('MAIL GIUSTA')
            
} else {
    console.error('FUORI DI QUI NON TI PERMETTERE AD ENTRARE');
        
}


// ALTRO METODO PER TROVARE NELL'ARRAY LA MAIL GIUSTA


// let mailTrovata = listaMail.some(mail => mail.toLowerCase() === mailUtente);

// if (mailTrovata) {
//     console.log('COMPLIMENTI puoi entrare alla festa');
    
// } else {
//     console.error('non puoi entrareee');
    
// }