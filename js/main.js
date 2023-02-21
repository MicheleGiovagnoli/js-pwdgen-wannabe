//Creo un generatore di password

//Inizio con il chiedere all'utente il suo nome
//poi chiedo il suo cognome
//e il suo colore preferito
//infine genero la password con i dati appena immessi

//chiedo il nome all'utente e lo stampo
const nome = prompt('inserisci il tuo nome');
document.getElementById('nome').innerHTML = `Il tuo nome e: ${nome}`;

//quando l'utente ha inserito il nome, chiedo il cognome e lo stampo
const cognome = prompt('inserisci il tuo cognome');
document.getElementById('cognome').innerHTML = `Il tuo cognome e: ${cognome}`;

//stesso procedimento per il colore
const colore = prompt('inserisci il tuo colore preferito');
document.getElementById('colore').innerHTML = `il tuo colore preferito e: ${colore}`;

//creo una variabile che contiene la stringa 23 da aggiungere alla creazione della password
let numero = ('23');

//sommo le varibaili e creo la password 
let password = nome + cognome + colore + numero;
document.getElementById('password').innerHTML = `La password generata e: ${password}`;