function mostrar()
{	/*al seleccionar un mes informar.
	si tiene 28 días.
	si tiene 30 días.
	si tiene 31 días.*/

	var mesDelAño;
	var mensaje;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	switch( mesDelAño )
	{
		case "Enero" :
			mensaje = "tiene 31 días";
		break;

		case "Febrero" :
			mensaje = "tiene 28 días";
		break;

		case "Marzo" :
			mensaje = "tiene 31 días";
		break;

		case "Abril" :
			mensaje = "tiene 30 días";
		break;

		case "Mayo" :
			mensaje = "tiene 31 días";
		break;

		case "Junio" :
			mensaje = "tiene 30 días";
		break;

		case "Julio" :
			mensaje = "tiene 31 días";
		break;

		case "Agosto" :
			mensaje = "tiene 31 días";
		break;

		case "Septiembre" :
			mensaje = "tiene 30 días";
		break;

		case "Octubre" :
			mensaje = "tiene 31 días";
		break;

		case "Noviembre" :
			mensaje = "tiene 30 días";
		break;

		case "Diciembre" :
			mensaje = "tiene 31 días";
		break;
	}
	alert(mensaje);
}