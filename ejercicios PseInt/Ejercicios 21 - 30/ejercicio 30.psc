Algoritmo sin_titulo
	Definir contra Como Caracter
	Definir long Como Entero
	// pedimos contraseña
	Escribir  "ingresa una contraseña mayor a 8 caracteres"
	Leer contra
	//medimos contraseña
	long <- Longitud(contra)
	Repetir
		si long > 8 Entonces
			Escribir "contraseña válida"
		sino 
			Escribir "contraseña no válida, intenta de nuevo"
			Leer contra
		FinSi
	Hasta Que long > 8
FinAlgoritmo
