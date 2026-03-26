'use strict'

let numeroGiocatore = 0;
let numeroComputer = 0;
let giocatoreVincitore = '';
let computerVincitore = '';
let patta = '';

numeroGiocatore = Math.floor(Math.random() * 10 + 1);

numeroComputer = Math.floor(Math.random() * 10 + 1);

document.getElementById('numeroGiocatore').innerHTML = numeroGiocatore;
document.getElementById('numeroComputer').innerHTML = numeroComputer;


console.log(numeroGiocatore);
console.log(numeroComputer);

if (numeroGiocatore > numeroComputer) {
    let giocatoreVincitore = 'GIOCATORE VINCE!!!';
    document.getElementById('vincitore').innerHTML = giocatoreVincitore;

    
} else if (numeroComputer > numeroGiocatore) {
    let computerVincitore = 'COMPUTER VINCE!!!';
    document.getElementById('vincitore').innerHTML = computerVincitore;
    
} else {
    let patta = 'PATTA';
    document.getElementById('vincitore').innerHTML = patta;
    
}
