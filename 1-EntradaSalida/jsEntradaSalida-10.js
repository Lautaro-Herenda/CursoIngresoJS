/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
var descuento;
var sueldofinal;

importe = parseInt(document.getElementById("importe").value);

descuento = parseInt(importe *25/100);

sueldofinal = parseInt(importe - descuento);

document.getElementById("resultado").value=sueldofinal;
}
