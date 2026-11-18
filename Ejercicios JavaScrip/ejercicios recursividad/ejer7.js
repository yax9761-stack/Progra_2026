let totalFactorial = 1;

function factorial(num) {
    if (num < 1) {
        return;
    }
    totalFactorial = totalFactorial * num;
    console.log(totalFactorial);
    factorial(num - 1);
}
factorial(5);