function contarNumeros (num){
    if(num < 0){
        return;
    }
    console.log(num);
    contarNumeros(num-1);
}
contarNumeros(10);