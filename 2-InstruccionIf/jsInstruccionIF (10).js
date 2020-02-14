function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
var maximo = 10;
var minimo = 1;

nota = Math.floor(Math.random() * ((maximo + 1) - minimo)+ minimo);

 if (nota < 4){
alert("Vamos que la proxima se puede. Nota: " + nota);
}

else if (nota <9){

alert("Aprobo. Nota: " + nota);

}

else {
alert("Excelente. Nota: " + nota);

}



}//FIN DE LA FUNCIÓN