function numPares(num) {
    if (num > 10) {
        return;
    }
    if (num % 2 == 0) {
        console.log(num);
    }
    numPares(num + 1);
}
numPares(1);