

	/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
	se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
	
	en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata 
	tiene un descuento del 20%

	en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata 
	tiene un aumento del 20%

	en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata 
	tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var destino;
	var estacionDelAnio;
	var tarifa;
	var porcentaje;
	var mensaje;
	var precioFinal;
	var multiplicador;

	tarifa = 15000;

	destino = document.getElementById("txtIdDestino").value;
	estacionDelAnio = document.getElementById("txtIdEstacion").value;
	
	switch(estacionDelAnio)
	{
		case "Invierno" :
			switch(destino)
			{
				case "Bariloche" :
					porcentaje = 20;
				break;
				case "Cataratas" :
				case "Cordoba" :
					porcentaje = -10;
				break;
				case "Mar del plata" :
					porcentaje = -20;
				break;
			
			}
		break;
		case "Verano" :
			switch(destino)
			{
				case "Bariloche" :
					porcentaje = -20;
				break;
				case "Cataratas" :
				case "Cordoba" :
					porcentaje = 10;
				break;
				case "Mar del plata" :
					porcentaje = 20;
				break;
				
			}
		break;
		default :
		//acà seria primavera-otoño
			switch(destino)
				{
					case "Bariloche" :
					case "Cataratas" :
					case "Mar del plata" :
						porcentaje = 10;
					break;
					case "Cordoba" :
						porcentaje = 0;
					break;
				}
		break;
	}
	
	/*multiplicador = porcentaje/100;
	precioFinal = tarifa * multiplicador;
	precioFinal = tarifa + precioFinal;*/
	precioFinal = tarifa + (tarifa * porcentaje /100);
	mensaje = "El valor de la estadia es : " + precioFinal;
	alert(mensaje);

}