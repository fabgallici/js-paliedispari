// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha vinto.

// richiedo e controllo input utente scelta pari o dispari
function getUserChoice() {
  var userInputChoice = prompt('scegli fra pari o dispari');
  if (userInputChoice === 'pari' || userInputChoice === 'dispari') {
    return userInputChoice;
  } else {
    alert('errore dati inseriti Non validi');
  }
}

// richiedo e controllo input utente numero fra 1 e 5
function getUserNum() {
  var userInputNum = parseInt(prompt('scegli un numero fra 1 e 5'));
  if (userInputNum >= 1 && userInputNum <= 5) {
    return userInputNum;
  } else {
    alert('errore dati inseriti Non validi');
  }
}

//genera un numero random fra un valore min e max
function randomGenerator(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
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

// accetta una stringa "pari" o "dispari", somma number con un valore random da 1 a 5, confronta e stampa risultato vincente
function evaluateWinnerVsPc(evenOrOdd, number) {
  var rndNum = randomGenerator(5, 1);
  sum = rndNum + number;
  var sumResult = pariodispari(sum);
  if (evenOrOdd === sumResult) {
    console.log('Hai scelto un numero ' + evenOrOdd + ", il totale risulta " + sum + ' quindi Hai Vinto');
  } else {
    console.log('Hai scelto un numero ' + evenOrOdd + ", il totale risulta " + sum + ' quindi NON hai Vinto');
  }
}

var userChoice = getUserChoice();
var userNum = getUserNum();

evaluateWinnerVsPc(userChoice, userNum);



