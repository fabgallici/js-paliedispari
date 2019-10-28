// Una funzione per capire se la parola è
// palindroma

var inputWord = prompt('Inserisci la parola');

function palindroma(word) {
  var reverseWord = "";
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  if (reverseWord === word) {
    console.log('La parola E\' un palindromo');
  } else {
    console.log('La parola NON è un palindromo');
  }
  
}

palindroma(inputWord);