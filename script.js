//Variabili
/*
let tariffaKM = prompt ("Inserisci il tuo nome: ");
let sconti = prompt ("Inserisci il tuo colore preferito: ");

//Variabile password
let  = "La tua password è: " + NomeUtente + CognomeUtente + ColorePreferito + "#24";

document.getElementById("titolo").innerHTML = ("La tua password è: " + NomeUtente + CognomeUtente + ColorePreferito + "#24"); //primo caso che ho fatto

alert(password24); //nel caso dell'alert (l'ho fatto al contrario rispetto all'ordine che ha dato Luca)
*/


const distanzaKM = prompt ("Inserisci la distanza (in KM): ");
const eta = prompt ("Inserisci la tua età: ");

const costoKM = 100
let prezzo = costoKM * distanzaKM

if (eta<18){
    prezzo = (80 / 100) * prezzo
}

console.log(prezzo);