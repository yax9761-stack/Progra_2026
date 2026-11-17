Algoritmo ejercicio_44
	Definir nums Como Entero
	Dimension nums[6]
	para i <- 1 Hasta 6 Hacer
		Escribir "ingresa tus números"
		Leer nums[i]
	FinPara
	para i <- 1 Hasta 6 Hacer
		si nums[i] % 2 = 0 Entonces
			contador <- contador + 1
		FinSi
	FinPara
	Escribir "La cantidad de números pares es: " contador 
FinAlgoritmo