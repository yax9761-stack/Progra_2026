function contarNHasta(num){
    if(num > 5){
        return;
    }
    console.log(num);
    contarNHasta(num+1);
}
contarNHasta(1);

