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
