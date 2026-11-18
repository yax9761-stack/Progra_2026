const contarMayusculas = function(palabra) {
    const conteoPalabras = palabra.match(/[A-Z]/g);

    return (conteoPalabras.length)
}

console.log(contarMayusculas("BRAnpitin"));

