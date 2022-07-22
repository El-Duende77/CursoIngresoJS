function mostrar()
{	//Al seleccionar un destino informar si hace FRIO o CALOR en ese destino


	var seleccioneDestino;
	var mensaje;

	seleccioneDestino = document.getElementById("txtIdDestino").value;

	switch( seleccioneDestino )
	{
		case "Bariloche" :
		case "Ushuaia" :
			mensaje = "Hace frio";
		break;

		case "Cataratas" :
		case "Mar del plata" :
			mensaje = "Hace calor";
		break;
	}
	alert(mensaje);

}