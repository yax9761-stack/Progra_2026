function mostrarNumeros(num){
    if(num > 10){
        return;
    }
    console.log(num);
    mostrarNumeros(num+1);
}
mostrarNumeros(1);