function mostrar() {

	var numero;
	var seguir;
	var acumuladorNeg = 0;
	var acumuladorPos = 0;
	var contadorPos = 0;
	var contadorNeg = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPos = 0;
	var promedioNeg = 0;
	var diferencia;


	do {

		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}

		if (numero > 0) {
			// aca caigo si el numero es positivo
			acumuladorPos = acumuladorPos + numero;
			contadorPos++;
		}
		else if (numero < 0) {
			// aca caigo si el numero es negativo
			acumuladorNeg = acumuladorNeg + numero;
			contadorNeg++;
		}
		else {
			// aca caigo si el numero es cero
			contadorCeros++;
		}
		//------------------------------------
		if (numero % 2 == 0) {
			contadorPares++;
		}

		seguir = prompt("Quiere continuar?: ");
	} while (seguir == 's');

	if (contadorPos != 0) {
		promedioPos = acumuladorPos / contadorPos;
	}

	if (contadorNeg != 0) {
		promedioNeg = acumuladorNeg / contadorNeg;
	}


	diferencia = contadorPos - contadorNeg;

	document.write("1-Suma de los negativos: " + acumuladorNeg + "</br>");
	document.write("2-Suma de los positivos: " + acumuladorPos + "</br>");
	document.write("3-Cantidad de positivos: " + contadorPos + "</br>");
	document.write("4-Cantidad de negativos: " + contadorNeg + "</br>");
	document.write("5-Cantidad de ceros: " + contadorCeros + "</br>");
	document.write("6-Cantidad de numeros pares: " + contadorPares + "</br>");
	document.write("7- Promedio de Positivos: " + promedioPos + "</br>");
	document.write("8-Promedios de negativos: " + promedioNeg + "</br>");
	document.write("9-Diferencia entre positivos y negativos: " + diferencia + "</br>");