function contarDesde(num){
    if(num < 0){
        return;
    }
    console.log(num);
    contarDesde(num-1);
}
contarDesde(5);