Algoritmo sin_titulo
	Definir num, i, may, men Como Real
	Dimension num[8]
	Para i <- 1 Hasta 8 Hacer
		Escribir "ingresa un número"
		Leer num[i]
	FinPara
	may <- num[1]
	men <- num[1]
	Para i <- 1 Hasta 8 Hacer
		si num[i] > may 
			may <- num[i]
		FinSi
		si num[i] < men Entonces
			men <- num[i]
		FinSi
	FinPara
	Escribir "El número mayor es " may 
	Escribir "El número menor es " men
FinAlgoritmo
