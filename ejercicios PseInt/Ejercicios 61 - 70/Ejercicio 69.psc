Funcion resultado <- es_primo(n)
    Definir resultado Como Logico
    Definir cont, i Como Entero
    
    cont <- 0
    
    Para i <- 1 Hasta n Hacer
        Si n % i = 0 Entonces
            cont <- cont + 1
        FinSi
    FinPara
    
    Si cont = 2 Entonces
        resultado <- Verdadero
    Sino
        resultado <- Falso
    FinSi
FinFuncion

Algoritmo VerificarPrimo9
    Definir num Como Entero
    Escribir "Introduce un número:"
    Leer num
    
    Si es_primo(num) Entonces
        Escribir "es primo"
    Sino
        Escribir "no es primo"
    FinSi
FinAlgoritmo

