Funcion mayor_de_tres <- mayo 
	Definir num1, num2, num3 Como Real
	Escribir "ingresa el primer número"
	Leer num1
	Escribir "ingrese el segundo número"
	Leer num2
	Escribir "ingrese el tercer número"
	Leer num3
Si num1 = num2 y num2 = num3 y num3 = num1 Entonces
	Escribir "Todas las opciones son iguales"
	SiNo si num1 = num2 Entonces
		Escribir "La primer y segunda opcion son iguales"
		sino si num2 = num3 Entonces
			Escribir "la segunda y tercer opcion son iguales"
			sino si num3 = num1 Entonces
				Escribir "La tercer y la primer opcion son iguales"
				sino si num1 > num2 Entonces
					Escribir "el primer número es mayor"
					SiNo si num2 > num3 Entonces
						Escribir "El segundo número es mayor"
						SiNo si num3 > num1 Entonces
							Escribir "El tercer número es mayor"
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinSi
Fin Funcion

Algoritmo sin_titulo
	Definir resultado Como Real
	resultado <- mayo 
	
FinAlgoritmo
