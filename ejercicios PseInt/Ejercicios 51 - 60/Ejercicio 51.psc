Algoritmo SumaMatrices
	Dimension matriz_a[3, 3], matriz_b[3, 3], matriz_c[3, 3]
	Escribir "ingrese los valores para la primera matriz"
	Para i <- 1 Hasta 3 Hacer
		para j <- 1 Hasta 3 Hacer
			Escribir "fila " i ", columna " j ":"
			Leer matriz_a[i, j]
		FinPara
	FinPara
	Escribir "ingrese los valores para la segunda matriz"
	para i <- 1 Hasta 3 Hacer
		Para j <- 1 Hasta 3 Hacer
			Escribir "fila " i ", columna " j ":"
			Leer matriz_b[i, j]
		FinPara
	FinPara
	Escribir "la matriz resultante de la suma (matriz_a, matriz_b ) es:"
	para i <- 1 Hasta 3 Hacer
		Para j <- 1 Hasta 3 Hacer
			matriz_c[i, j] <- matriz_a[i, j] + matriz_b[i, j]
			Escribir Sin Saltar matriz_c[i, j] " "
		FinPara
		Escribir " "
	FinPara
FinAlgoritmo
