Algoritmo fibonacci
	Definir a, b, c Como Entero
    a <- 0
    b <- 1
    Escribir "Los primeros 10 términos de la secuencia Fibonacci son:"
    Escribir a
    Escribir b
    Para i <- 3 Hasta 10 Hacer
        c <- a + b
        Escribir c
        a <- b
        b <- c
    FinPara
FinAlgoritmo
