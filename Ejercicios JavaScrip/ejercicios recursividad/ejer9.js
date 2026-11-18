function sumarNumeros(num){
    if(num<= 1){
        return 1;
    }
    return num + sumarNumeros(num - 1);
}
console.log(sumarNumeros(4));