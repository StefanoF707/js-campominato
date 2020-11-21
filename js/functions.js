function randomNumberGenerator(nMin, nMax) {
    return Math.floor(Math.random() * (nMax - nMin) + 1) + nMin;
}

function checkIfNumberAlreadyExist(array, element) {
    var check = false;
    for (var i = 0; i < array.length; i++ ) {
        if (array[i] == element) {
            check = true;
        }
    }
    return check;
}

function addNumber(e) {

}
