'use strict';

// lista di email di invitati alla festa PIù BELLA DI OGGI

let listaMail = [
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

while (!mailUtente.includes('@') && !mailUtente.includes('.') ) {
    mailUtente = prompt('ERRORE, inserisci una mail corretta','INSERISCI MAIL CORRETTA')
}


for (let z = 0; z < listaMail.length; z++) {

    let element = listaMail[z];
    
    if (mailUtente === element) {
            console.log('MAIL GIUSTA')
            
    } else {
        console.error('FUORI DI QUI NON TI PERMETTERE AD ENTRARE');
        
    }


}

// let mailTrovata = listaMail.some(mail => mail.toLowerCase() === mailUtente);

// if (mailTrovata) {
//     console.log('COMPLIMENTI puoi entrare alla festa');
    
// } else {
//     console.error('non puoi entrareee');
    
// }