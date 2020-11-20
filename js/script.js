// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// inizializzo delle variabili
var score = 0;
var attempts = (100 - 16);

// creare una array vuota per le caselle con le bombe
var bombs = [];
// riempirla tramite un ciclo con 16 numeri casuali evitando di inserire due numeri uguali
while ( bombs.length < 16 ) {
    var randomNumber = randomNumberGenerator(1, 100);
    var doubleBombsNumber = checkIfNumberAlreadyExist(bombs, randomNumber);
    if (doubleBombsNumber == false) {
        bombs.push(randomNumber);
    }
}
console.log("I numeri bomba sono:", bombs);

// creare un'altra array vuota per memorizzare le scelte dell'utente
var userChoise = [];

// GIOCO
var gameOver = false;
var score = 0;

while (userChoise.length < attempts && gameOver == false) {
    var userNumber = parseInt(prompt("Inserisci un numero"));
    var doubleUserNumber = checkIfNumberAlreadyExist(userChoise, userNumber);

    var checkGameOver = checkIfNumberAlreadyExist(bombs, userNumber);
    if (checkGameOver == true) {
        alert("HAI PERSO\npunteggio: " + score);
        gameOver = true;
        userChoise.push(userNumber);
    } else if ( (doubleUserNumber == true) || isNaN(userNumber) || (userNumber < 1 || userNumber > 100) ) {
        alert("Scelta non valida!");
    } else {
        userChoise.push(userNumber);
        score++;
    }
    if (score == attempts) {
        alert("HAI VINTO\npunteggio: " + score);
    }
}
console.log("I numeri da te scelti sono:", userChoise);
if (score == 1) {
    console.log("Il tuo punteggio è di:", score, "punto!");
} else {
    console.log("Il tuo punteggio è di:", score, "punti!");
}
