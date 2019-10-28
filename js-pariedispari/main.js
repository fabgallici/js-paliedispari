// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

var userChoice = prompt('scegli fra pari o dispari');
var userNum = parseInt(prompt('scegli un numero fra 1 e 5'));

function randomGenerator(max, min) {
  var intNUm = Math.floor(Math.random() * (max - min + 1)) + min;
  return intNUm;
}

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

function evaluateWinner(userChoice, totalNum) {
  var choiceResult = pariodispari(totalNum);
  if (userChoice === choiceResult) {
    console.log('il risultato è un numero ' + choiceResult + ", il totale risulta " + totalNum + ' quindi Hai Vinto');
  } else {
    console.log('il risultato è un numero ' + choiceResult + ", il totale risulta " + totalNum + ' quindi NON hai Vinto');
  }
}


var pcNum = randomGenerator(5, 1);
var sumNum = userNum + pcNum;
evaluateWinner(userChoice, sumNum);



