function mostrar() {

	var numero;
	var seguir;
	var acumuladorNeg = 0;
	var acumuladorPos = 0;
	var contadorPos = 0;
	var contadorNeg = 0;
function mostrar() {
    var nota;
    var sexo;
    var acumuladorNotas = 0;
    var flag = 0;
    var notaBaja;
    var sexoBajo;
    var contadorV6 = 0;
    var promedio;

    for (var i = 0; i < 5; i++) {

        nota = parseInt(prompt("Ingrese nota (0-10): "));
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Nota invalida. Ingrese nota (0-10): "));
        }
        sexo = prompt("Ingrese sexo (f-m): ");
        while (sexo != 'm' && sexo != 'f') {
            sexo = prompt("Sexo invalido. Ingrese sexo (f-m): ");
        }

        acumuladorNotas = acumuladorNotas + nota;

        if (nota < notaBaja || flag == 0) {
            notaBaja = nota;
            sexoBajo = sexo;
            flag = 1;
        }

        if (sexo == 'm' && nota >= 6) {
            contadorV6++;
        }
    }// fin del for

    promedio = acumuladorNotas / 5;

    alert("a) El promedio de las notas totales: " + promedio
        + "\nb) La nota más baja: " + notaBaja + " sexo: " + sexoBajo
        + "\nc) La cantidad de varones que su nota haya sido mayor o igual a 6: " + contadorV6
    );



}
