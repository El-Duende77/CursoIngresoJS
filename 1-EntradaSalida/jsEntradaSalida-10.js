/*
idem al 10 pero se pide el porcentaje por prompt... 
y se hace todo lo necesario para que funcione

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{	//declaro variables
	var descuento;
	var importe;
	var importeConDescuento;
	var porcentaje;
	
	//asigno valores
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentaje = prompt("Ingrese un porcentaje de descuento : ");
	porcentaje = parseInt(porcentaje);
	
	//realizo operaciones
	descuento = (importe * porcentaje)/100;
	importeConDescuento = importe - descuento;

	//resultado
	document.getElementById("txtIdResultado").value = importeConDescuento;


	/*importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

	descuento=(importe*25)/100;
	importeConDescuento=importe-descuento;

	document.getElementById("txtIdResultado").value=importeConDescuento;*/
	
}
