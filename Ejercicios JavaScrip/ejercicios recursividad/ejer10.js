function potencia(base, expontente) {
    if (expontente == 0) {
        return 1;
    }
    return base * potencia(base, expontente - 1);
}
console.log(potencia(3, 2));