// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

var userChoice = prompt('scegli fra pari o dispari');
var userNum = parseInt(prompt('scegli un numero fra 1 e 5'));

//genera un numero random fra un valore min e max
function randomGenerator(max, min) {
  var intNUm = Math.floor(Math.random() * (max - min + 1)) + min;
  return intNUm;
}

//ritorna pari o dispari in base al numero
function pariodispari(num) {
  var parodisp;
  if (num % 2 === 0) {
    parodisp = "pari";
    // return "pari";
  } else {
    parodisp = "dispari";
    // return "dispari";
  }
  return parodisp;
}

// choice deve essere "pari" o "dispari", somma add1 e add2, verifica se somma pari o dispari e confronta con choice, stampa risultato
function evaluateWinner(choice, add1, add2) {
  sum = add1 + add2;
  var sumResult = pariodispari(sum);
  if (choice === sumResult) {
    console.log('Hai scelto un numero ' + choice + ", il totale risulta " + sum + ' quindi Hai Vinto');
  } else {
    console.log('Hai scelto un numero ' + choice + ", il totale risulta " + sum + ' quindi NON hai Vinto');
  }
}


var pcNum = randomGenerator(5, 1);
evaluateWinner(userChoice, userNum, pcNum);



