Algoritmo factorial
	Definir num Como Entero
	Escribir "ingresa un número para calcular su factorial"
	Leer num
	fact <- 1
	Mientras num > 0 Hacer
		Escribir num
		fact <- fact * num
		num <- num - 1
	Fin Mientras
	Escribir fact
FinAlgoritmo
