function cuantosDigitos(digito) {
    if (digito > 5) {
        console.log(digito - 1);
        return;
    }
    console.log(digito);
    cuantosDigitos(digito + 1);
}
cuantosDigitos(1);
