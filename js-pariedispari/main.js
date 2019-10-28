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
  if (nump % 2 === 0) {
    parodisp = "pari";
    // return "pari";
  } else {
    parodisp = "dispari";
    // return "dispari";
  }
  return parodisp;
}

function evaluateWinner(userChoice, totalNum) {
  var totalChoice = pariodispari(totalNum);
  if (userChoice === totalChoice) {
    console.log('il risultato è ' + totalNum + 'Hai Vinto');
  } else {
    console.log('il risultato è ' + totalNum + 'Hai Vinto');
  }
}


var pcNum = randomGenerator(5, 1);
var sumNum = userNum + pcNum;

console.log(pcNum);


// function winnerPariDispari(num1, num2) {
//   var numTot = num1 + num2;
//   if (numTot % 2 === 0) {

//   }
// }
