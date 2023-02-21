//Creo un generatore di password

//Inizio con il chiedere all'utente il suo nome
//poi chiedo il suo cognome
//e il suo colore preferito
//infine genero la password con i dati appena immessi

//chiedo il nome all'utente e lo stampo
const nome = prompt('inserisci il tuo nome');
document.getElementById('nome').innerHTML = `Il tuo nome e: ${nome}`;

const cognome = prompt('inserisci il tuo cognome');
document.getElementById('cognome').innerHTML = `Il tuo cognome e: ${cognome}`;

const colore = prompt('inserisci il tuo colore preferito');
document.getElementById('colore').innerHTML = `il tuo colore preferito e: ${colore}`;

let numero = ('23');

let password = nome + cognome + colore + numero;
document.getElementById('password').innerHTML = `La password generata e: ${password}`;