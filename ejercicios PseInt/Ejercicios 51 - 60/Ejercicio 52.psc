Algoritmo sin_titulo
	Definir suma, prom, matriz Como Real 
	Dimension matriz[3, 4]
	para f <- 1 Hasta 3 Hacer
		conta <- conta + 1
		para c <- 1 Hasta 4 Hacer
			Escribir "ingrese valor para la fila " f ", columna " c ":"
			Leer matriz[f, c]
		FinPara
	FinPara
	para c <- 1 Hasta 4 Hacer
		suma <- 0 
		para f <- 1 Hasta 3 Hacer
			suma <- suma + matriz[f, c]
		FinPara
		prom <- suma / conta
		Escribir "el promedio de la columna " c " es: " prom
	FinPara
FinAlgoritmo
