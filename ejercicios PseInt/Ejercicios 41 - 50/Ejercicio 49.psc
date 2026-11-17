Algoritmo sin_titulo
	Dimension arreglo[6]
	para i <- 1 Hasta 6 Hacer
		Escribir "ingrese in número"
		Leer arreglo[i]
	FinPara
	Para i <- 1 Hasta 5 Hacer
		Para j <- 1 Hasta 5 Hacer
			Si arreglo[j] > arreglo[j+1] Entonces
				aux <- arreglo[j]
				arreglo[j] <- arreglo[j+1]
				arreglo[j+1] <- aux
			FinSi
		FinPara
	FinPara
	Escribir "arreglo ordenado "
	para i <- 1 Hasta 6 Hacer
		Escribir arreglo[i]
	FinPara
FinAlgoritmo
