function mostrar()
{	/*Al ingresar una hora, informar:
	si está entre las 7 y las 11 : "Es de mañana.".*/

	var horaDelDia;
	var mensaje;

	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia = parseInt(horaDelDia);

	switch( horaDelDia )
	{
		case 7 :
		case 8 :
		case 9 :
		case 10 :
		case 11 :
			mensaje = "Es de mañana.";
		break;
		
		default :
			mensaje = "No es de mañana";
		break;
	}
	alert(mensaje);
}