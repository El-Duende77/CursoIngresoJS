/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;

	var resultado;
	var porcentaje;
	
	porcentaje = prompt("Ingrese un porcentaje");

	porcentaje = parseInt(porcentaje);

	importe = parseInt(document.getElementById("txtIdImporte").value);

	 

	resultado = importe - (importe * porcentaje / 100);

	document.getElementById("txtIdResultado").value =  resultado;
}
