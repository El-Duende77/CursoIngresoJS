function mostrar()
{	/*Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se 
	encuentra Norte, Sur, Este u Oeste*/
	
	var seleccioneDestino;
	var mensaje;

	seleccioneDestino = document.getElementById("txtIdDestino").value;

	switch( seleccioneDestino )
	{
		case "Bariloche" :
			mensaje = "Oeste";
		break;

		case "Cataratas" :
			mensaje = "Norte";
		break;

		case "Mar del plata" :
			mensaje = "Este";
		break;

		case "Ushuaia" :
			mensaje = "Sur";
		break;
		
	}
	alert(mensaje);
}