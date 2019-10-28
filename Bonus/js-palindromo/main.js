// Una funzione per capire se la parola è
// palindroma

var inputWord = prompt('Inserisci la parola');
inputWord = inputWord.toLowerCase();

//funzione ritorna True se la parola è un palindromo o False in caso contrario
function palindroma(word) {
  // uso 3 metodi: split divide la stringa mettendola in un array, reverse rivolta l'array, e join unisce gli elementi in una stringa
  var reverseWord = word.split("").reverse().join("");  

  return reverseWord === word;
}

isPalindromo = palindroma(inputWord);
console.log(isPalindromo);