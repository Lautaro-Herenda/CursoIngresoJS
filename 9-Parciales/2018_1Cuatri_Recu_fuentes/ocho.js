function mostrar() {
    var letra;
    var numero;
    var seguir;
    var contadorPar = 0;
    var contadorImpar = 0;
    var contadorCero = 0;
    var contadorPos = 0;
    var acumuladorPos = 0;
    var promedioPos = 0;
    var acumuladorNeg = 0;
    var flag = 0;
    var maximo;
    var minimo;
    var letraMax;
    var letraMin;

    // ---------- repito mientras el usuario quiera -----
    do {

        // ------------- pido datos --------------------
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra: ");
        }
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero entre -100 y 100: "));
        }

        // --------- analizo los datos -------------
        // ------- Paridad -----------
        if (numero % 2 != 0) {
            //impares
            contadorImpar++;
        }
        else {
            // pares
            contadorPar++;
        }

        // -------- Signo -------------
        if (numero == 0) {
            // cero
            contadorCero++;
        }
        else if (numero < 0) {
            // negativo
            acumuladorNeg = acumuladorNeg + numero;
        }
        else {
            // positivo
            acumuladorPos = acumuladorPos + numero;
            contadorPos++;
        }
        // ------------ Maximos y Minimos -------------------
        if (flag == 0 || numero < minimo) {
            minimo = numero;
            letraMin = letra;
        }
        if (flag == 0 || numero > maximo) {
            maximo = numero;
            letraMax = letra;
            flag = 1;
        }

        // ------- pregunto si quiere continuar -----
        seguir = prompt("Quiere continuar?:");

    } while (seguir == 's');

    // ------------ Promedio --------------------
    if (contadorPos != 0) {
        promedioPos = acumuladorPos / contadorPos;
    }

    // ------------ Muestro la informacion -------------------

    document.write("a) La cantidad de números pares: " + contadorPar + "</br>");
    document.write("b) La cantidad de números impares: " + contadorImpar + "</br>");
    document.write("c) La cantidad de números ceros: " + contadorCero + "</br>");
    document.write("d) El promedio de todos los números positivos ingresados: " + promedioPos + "</br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
    document.write("f) Numero mayor: " + maximo + " Letra: " + letraMax + "</br>");
    document.write("f) Numero menor: " + minimo + " Letra: " + letraMin + "</br>");


}

