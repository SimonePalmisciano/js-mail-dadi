'use strict'

let numeroGiocatore = 0;
let numeroComputer = 0;
let giocatoreVincitore = '';
let computerVincitore = '';
let patta = '';

numeroGiocatore = Math.floor(Math.random() * 10 + 1);

numeroComputer = Math.floor(Math.random() * 10 + 1);

// meglio utilizzare querySelector invece di 'getElementById'
document.querySelector('#numeroGiocatore').innerHTML = numeroGiocatore;
document.querySelector('#numeroComputer').innerHTML = numeroComputer;


console.log(numeroGiocatore);
console.log(numeroComputer);

if (numeroGiocatore > numeroComputer) {
    let giocatoreVincitore = 'GIOCATORE VINCE!!!';
    document.querySelector('#vincitore').innerHTML = giocatoreVincitore;

    
} else if (numeroComputer > numeroGiocatore) {
    let computerVincitore = 'COMPUTER VINCE!!!';
    document.querySelector('#vincitore').innerHTML = computerVincitore;
    
} else {
    let patta = 'PATTA';
    document.querySelector('#vincitore').innerHTML = patta;
    
}


// METODOLOGIA MIGLIORE

function clickButtonReloadHandler (){
    // console.log('aggiorna la pagina');
    location.reload();
}

document.querySelector('#btnRicarica').addEventListener("click", clickButtonHandler);

// METODOLOGIA VECCHIA E POCO UTILIZZATA, MENO VANTAGGIOSA
// document.getElementById('btnRicarica').addEventListener("click", function() {
//     location.reload();
// });
