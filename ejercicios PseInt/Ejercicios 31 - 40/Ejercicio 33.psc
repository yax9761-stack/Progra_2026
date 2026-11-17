Algoritmo factorial
	Definir num, fact Como real
	fact <- 1
	Escribir "dime un número para encontrar su factorial"
	Leer num
	para i <- num Hasta 1 Hacer
		
		fact <- fact * num
		num <- num - 1
	FinPara
	Escribir "el factorial de tu número es: "  fact
FinAlgoritmo
