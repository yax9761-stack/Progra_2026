Algoritmo sin_titulo
	Definir precio, final Como Real
	Definir categoria Como Caracter
	Dimension precio[3]
	Dimension categoria[3]
	Para i <- 1 Hasta 3 Hacer
		Escribir "ingrese el precio del producto:"
		Leer precio[i]
		Escribir "ingrese categoria de descuento:"
		Escribir "10% de descuento (a)"
		Escribir "5% de descunto (b)"
		Escribir "sin descuento (c)"
		Leer categoria[i]
	FinPara
	Para i <- 1 Hasta 3 Hacer
		si categoria[i] = "a" Entonces
			final <- precio[i] * .90
		SiNo si categoria[i] = "b" Entonces
				final <- precio[i] * .95
			SiNo
				final <- precio[i]
			FinSi
		FinSi
	FinPara
	escribir "El precio final del producto es " i " : " final
FinAlgoritmo