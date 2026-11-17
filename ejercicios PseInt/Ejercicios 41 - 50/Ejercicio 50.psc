Algoritmo eliminacion_de_duplicados10
	dimension arreglo[12]
	Definir i , j Como Entero
	Escribir "ingresa los numeros"
	
	para i <- 1 Hasta 11 Hacer
		Leer arreglo[i]
		
	FinPara
	
	para i <- 1 Hasta 11 Hacer
		Para j <- i + 1 Hasta 12 Hacer
			
			si arreglo[i] = arreglo[j] Entonces
				arreglo[j] <- 0
			FinSi
		FinPara
	FinPara
	
	Escribir "array sin duplicados"
	Para i <- 1 Hasta 12 Hacer
		si arreglo[i] <> 0 Entonces
			Escribir Sin Saltar arreglo[i] ""
		FinSi
	FinPara
FinAlgoritmo
