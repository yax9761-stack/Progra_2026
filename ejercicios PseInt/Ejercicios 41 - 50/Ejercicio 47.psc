Algoritmo sin_titulo
	Definir carac_array Como Caracter
	Dimension carac_array[5]
	para i <- 1 Hasta 5 Hacer
		Escribir "ingresa un caracter"
		leer carac_array[i]
	FinPara
	Escribir "ingresa un caracter para ver cuantas veces se repite "
	leer user 
	para i <- 1 Hasta 5 Hacer
		si carac_array[i] = user Entonces
		 conta <- conta +1
		FinSi
	FinPara
	Escribir "el total de repeticiones es: " conta
FinAlgoritmo
