Algoritmo sin_titulo
	Definir num, numero_aleatorio, contador Como Real
	numero_aleatorio <- Aleatorio(1,50)
	Escribir "Adivina un número entre el 1 y el 50"
	Leer num 
	Repetir
		Escribir "sigue intentando: "
		leer num
		contador <- contador + 1
	Hasta Que numero_aleatorio = num
	Escribir "El número aleatorio fue: " numero_aleatorio " Y el número del usuario fue: " num
	Escribir "la cantidad de intentos fallidos es " contador
FinAlgoritmo
