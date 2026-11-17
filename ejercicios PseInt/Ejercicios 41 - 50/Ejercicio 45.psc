Algoritmo Ejercicio_45
	Definir carac, buscar Como Caracter
	Definir encontrado Como Logico
	encontrado <- Falso
	Dimension carac[7]
		carac[1] <- "b"
		carac[2] <- "f"
		carac[3] <- "ñ" 
		carac[4] <- "o"
		carac[5] <- "i"
		carac[6] <- "m"
		carac[7] <- "y"
		Escribir "Busca un caracter"
		Leer buscar
		para i <- 1 Hasta 7 Hacer
			si num[i] = buscar Entonces
				encontrado <- Verdadero
			FinSi
		FinPara
		si encontrado = Verdadero Entonces
			Escribir "el caracter está en el arreglo"
		SiNo
			Escribir "El caracter está fuera del arreglo"
		FinSi
FinAlgoritmo
