let range = 0;
let bombs =[];
let userArray = [];
let gameOver = false;
let win = false;
let score = 0;
document.getElementById("score").innerHTML = score;

const playGame = document.getElementById("play_btn");

playGame.addEventListener( "click", function () {


    let difficult = document.getElementById("difficult").value;

    if (difficult != "not_work") {

        document.getElementById("game").style.display = "flex";
        document.getElementById("introduction").style.display = "none";

        // difficoltà
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
            default:
                range = 100;
        }
        // /difficoltà

        document.getElementById("range").innerHTML = range;


        while (bombs.length < 16) {
            let randomNumber = randomNumberGenerator(1, range);
            let existedNumber = checkIfNumberAlreadyExist(bombs, randomNumber);
            if (!existedNumber) {
                bombs.push(randomNumber);
            }
        }

        let checkResult = document.getElementById("check_btn");
        let attempts = range - bombs.length;

        checkResult.addEventListener("click", function () {

            let userNumber = parseInt(document.getElementById("number_input").value);

            if (!isNaN(userNumber)) {

                if (userNumber <= range) {
                    if (!bombs.includes(userNumber)) {

                        if (!userArray.includes(userNumber)) {

                            if (userArray.length < attempts) {
                                userArray.push(userNumber);
                                score++;
                                document.getElementById("score").innerHTML = score;
                                document.getElementById("number_grid").innerHTML += "<li>" + userNumber + "</li> <br>";
                                document.getElementById("number_input").value = '';
                            } else {
                                win = true;
                            }

                        } else {
                            alert("Numero già inserito");
                            document.getElementById("number_input").value = '';
                        }

                    } else {

                        document.getElementById("number_grid").innerHTML += "<li style=\"color: #f00;\">" + userNumber + "</li>";

                        document.getElementById("number_input").value = '';

                        gameOver = true;

                    }
                } else {
                    alert ("Inserisci un numero da 0 a " + range);
                    document.getElementById("number_input").value = '';
                }

            } else {
                alert("Inserisci un numero nel campo di input");
            }

            if (gameOver) {
                document.getElementById("game-over").style.display = "flex";

            } else if (win) {
                document.getElementById("win").style.display = "flex";
            }
        });


    } else {
        alert("Seleziona un livello di difficoltà");
    }

});

const restart = document.getElementById("restart-btn");

restart.addEventListener("click", function() {
    gameOver = false;
    win = false;
    bombs = [];
    userArray = [];
    score = 0;

    document.getElementById("game").style.display = "none";
    document.getElementById("introduction").style.display = "flex";
    document.getElementById("game-over").style.display = "none";
    document.getElementById("win").style.display = "none";
    document.getElementById("score").innerHTML = score;
    document.getElementById("number_grid").innerHTML = "";
});
