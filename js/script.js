var playButton = document.getElementById("play_btn");

playButton.addEventListener("click",
    function() {
        // variabili inizializzate
        var range;
        var bombs = [];
        var userChoise = [];
        //FINE variabili inizializzate

        // selezione difficoltà
        var difficult = document.getElementById("difficult").value;

        switch (difficult) {
            case "easy":
                range = 100;
                break;
            case "medium":
                range = 80;
                break;
            case "hard":
                range = 50;
                break;
            case "not_work":
                alert("Seleziona un livello di difficoltà!");
                break;
            default:
                range = 100;
        }
        // FINE selezione difficoltà

        // creazione numeri bomba
        while ( bombs.length < 16 ) {
            var randomNumber = randomNumberGenerator(1, range);
            var doubleBombsNumber = checkIfNumberAlreadyExist(bombs, randomNumber);
            if (doubleBombsNumber == false) {
                bombs.push(randomNumber);
            }
        }
        console.log("I numeri bomba sono:", bombs);
        //FINE creazione numeri bomba

        // gioco
        var gameOver = false;
        var attempts = range - bombs.length;
        var score = 0;

        while (userChoise.length < attempts && gameOver == false) {

            var userNumber = parseInt(prompt("Inserisci un numero"));
            var doubleUserNumber = checkIfNumberAlreadyExist(userChoise, userNumber);
            var checkGameOver = checkIfNumberAlreadyExist(bombs, userNumber);

            if (checkGameOver == true) {
                alert("HAI PERSO\npunteggio: " + score);
                gameOver = true;
                userChoise.push(userNumber);
            } else if ( (doubleUserNumber == true) || isNaN(userNumber) || (userNumber < 1 || userNumber > range) ) {
                alert("Scelta non valida!");
            } else {
                userChoise.push(userNumber);
                score++;
            }

            if (score == attempts) {
                alert("HAI VINTO\npunteggio: " + score);
            }
        }
        // FINE gioco

        console.log("I numeri da te scelti sono:", userChoise);
        if (score == 1) {
            console.log("Il tuo punteggio è di:", score, "punto!");
        } else {
            console.log("Il tuo punteggio è di:", score, "punti!");
        }
    }
);




















// // variabili inizializzate
// var range;
// var bombs = [];
// var userChoise = [];
// //FINE variabili inizializzate
//
// // selezione difficoltà
// var difficult = parseInt(prompt("Seleziona difficoltà\n0 = Facile\n1 = Intermedio\n2 = Difficile"));
//
// switch (difficult) {
//     case 0:
//         range = 100;
//         break;
//     case 1:
//         range = 80;
//         break;
//     case 2:
//         range = 50;
//         break;
//     default:
//         range = 100;
// }
// //FINE selezione difficoltà
//
// // creazione numeri bomba
// while ( bombs.length < 16 ) {
//     var randomNumber = randomNumberGenerator(1, range);
//     var doubleBombsNumber = checkIfNumberAlreadyExist(bombs, randomNumber);
//     if (doubleBombsNumber == false) {
//         bombs.push(randomNumber);
//     }
// }
// console.log("I numeri bomba sono:", bombs);
// //FINE creazione numeri bomba
//
// // gioco
// var gameOver = false;
// var attempts = range - bombs.length;
// var score = 0;
//
// while (userChoise.length < attempts && gameOver == false) {
//
//     var userNumber = parseInt(prompt("Inserisci un numero"));
//     var doubleUserNumber = checkIfNumberAlreadyExist(userChoise, userNumber);
//     var checkGameOver = checkIfNumberAlreadyExist(bombs, userNumber);
//
//     if (checkGameOver == true) {
//         alert("HAI PERSO\npunteggio: " + score);
//         gameOver = true;
//         userChoise.push(userNumber);
//     } else if ( (doubleUserNumber == true) || isNaN(userNumber) || (userNumber < 1 || userNumber > range) ) {
//         alert("Scelta non valida!");
//     } else {
//         userChoise.push(userNumber);
//         score++;
//     }
//
//     if (score == attempts) {
//         alert("HAI VINTO\npunteggio: " + score);
//     }
// }
// //FINE gioco
//
// console.log("I numeri da te scelti sono:", userChoise);
// if (score == 1) {
//     console.log("Il tuo punteggio è di:", score, "punto!");
// } else {
//     console.log("Il tuo punteggio è di:", score, "punti!");
// }
