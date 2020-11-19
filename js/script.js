// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


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
console.log(bombs);

// creare un'altra array vuota per memorizzare le scelte dell'utente
var userChoise = [];
// chiedere all'utente di inserire un numero (sempre compreso tra 1 e 100) 100 - 16 volte
while (userChoise.length < (20 - 16)) {
    var userNumber = parseInt(prompt("Inserisci un numero"));
    var doubleUserNumber = checkIfNumberAlreadyExist(userChoise, userNumber);
    if (doubleUserNumber == true) {
        alert("Non puoi inserire più volte lo stesso numero!");
    } else {
        userChoise.push(userNumber);
    }
}

console.log(userChoise);
