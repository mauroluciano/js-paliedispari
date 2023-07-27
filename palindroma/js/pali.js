// Chiedere all'utente di inserire una parola
const parola = prompt("immettere una parola");

// verificare che la parola sia uguale alla sua inversa
let esito = isPalindrome(parola);
if (esito) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}
// questa funzione verifica se la parola è palindroma
function isPalindrome(value) {
  let inversa = "";

  for (let i = value.length - 1; i >= 0; i--) {
    inversa = inversa + value[i];
  }

  if (value == inversa) {
    return true;
  } else {
    return false;
  }
}
