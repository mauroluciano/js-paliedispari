// Chiedere all'utente di inserire una parola
const parola = prompt("immettere una parola");

// verificare che la parola sia uguale alla sua inversa
let inversa = "";

for (let i = parola.length - 1; i >= 0; i--) {
  inversa = inversa + parola[i];
}

if (parola == inversa) {
  console.log("E' palindroma");
} else {
  console.log("Non è palindroma");
}

console.log(inversa);

/*// chiedere all'utente se pari o dispari;
const question = prompt("Pari o dispari?");

// chiedere all'utente un numero da 1 a 5;
const number = parseInt(prompt("Scrivi un numero da 1 a 5"));

// generiamo un numero casuale da 1 a 5
const random = Math.floor(Math.random() * 5 + 1);
console.log("il numero random è " + random);

// facciamo la somma dei due numeri;
let somma = number + random;
console.log("la somma è " + somma);

// se la somma dei due numeri è pari e l'utente ha scelto pari, l'utente ha vinto, altrimenti ha vinto il computer;

if (somma % 2 == 0) {
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
*/
