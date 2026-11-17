Funcion ordenado <- ascendente(n)
	Escribir "cuantos numeros quieres en la lista? " 
	Leer n
	Dimension num[n]
	para i <- 1 Hasta n Hacer
		Escribir "escribe un numero para la lista"
		Leer num[i]
		
		
		promedio <- promedio + num[i]
	FinPara
	
	Escribir promedio/n
FinFuncion

Algoritmo promedio7
	
	Definir ascendente2 Como Entero
	ascendente2 <- ascendente(n)
	
FinAlgoritmo
