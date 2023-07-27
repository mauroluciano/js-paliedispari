// chiedere all'utente se pari o dispari;
const question = prompt("Pari o dispari?");

// chiedere all'utente un numero da 1 a 5;
const number = parseInt(prompt("Scrivi un numero da 1 a 5"));

const random = getRandomNumber();

console.log("il numero random è " + random);

// facciamo la somma dei due numeri;
let somma = number + random;
console.log("la somma è " + somma);

// se la somma dei due numeri è pari e l'utente ha scelto pari, l'utente ha vinto, altrimenti ha vinto il computer;

if (isEven(somma)) {
  console.log("il numero è pari");

  if (question == "pari") {
    console.log("l'utente ha vinto");
  } else {
    console.log("ha vinto il computer");
  }
} else {
  console.log("il numero è dispari");

  if (question == "dispari") {
    console.log("l'utente ha vinto");
  } else {
    console.log("ha vinto il computer");
  }
}

// generiamo un numero casuale da 1 a 5 con la funzione
function getRandomNumber() {
  const RandomNumber = Math.floor(Math.random() * 5) + 1;
  return RandomNumber;
}

// questa funzione restituisce true per i numeri pari e false per i numeri dispari
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
