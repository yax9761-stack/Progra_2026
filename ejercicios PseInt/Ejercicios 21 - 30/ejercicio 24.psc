Algoritmo sin_titulo
	Definir num, numero_aleatorio Como Real
	numero_aleatorio <- Aleatorio(1,100)
	Escribir "Adivina un número entre el 1 y el 100"
	Leer num 
	Repetir
		Escribir "sigue intentando: "
		leer num
	Hasta Que numero_aleatorio = num
	Escribir "El número aleatorio fue: " numero_aleatorio " Y el número del usuario fue: " num
FinAlgoritmo
