
//Ejercicio 9 bis

/*idem al 9 pero se pide el porcentaje por prompt... 
y se hace todo lo necesario para que funcione*/

/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{	//declaro variable
	var sueldo;
	var aumento;
	var resultado;
	var porcentaje;

	//asigno valores
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	porcentaje = prompt("Ingrese un porcentaje : ");
	porcentaje = parseInt(porcentaje);

	//realizo operaciones
	aumento = (sueldo * porcentaje)/100;
	resultado = sueldo + aumento;

	//desarrollo respuesta
	document.getElementById("txtIdResultado").value = resultado;


	
	/*sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);
	
	aumento=(sueldo* 10)/100;
	resultado= sueldo +  aumento;
	
	document.getElementById("txtIdResultado").value=resultado;*/
	
}