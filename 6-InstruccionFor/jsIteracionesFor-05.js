function mostrar()
{	//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.

	var numero;

	for(;;){
		numero=parseInt(prompt("Ingrese un numero "));
		if(numero==9){
			//console.log(numero);
			break;
		}
		alert("Ud. ingreso el numero " + numero);
	}


}//FIN DE LA FUNCIÓN