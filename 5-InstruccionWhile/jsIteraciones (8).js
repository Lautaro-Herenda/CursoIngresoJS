function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	do{
numero=parseInt(prompt("ingrese un numero: "));
while (isNaN(numero)){

	mumero = parseInt(prompt("Eso no es un numero: "));
}

if (numero >= 0){

	positivo = positivo + numero;

	}
else{

negativo = negativo * numero;
flag = 1;
}
respuesta = prompt("Quiere ingresar otro");

}while (respuesta == 's');

if(flag == 0){
negativo = 0;

}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN