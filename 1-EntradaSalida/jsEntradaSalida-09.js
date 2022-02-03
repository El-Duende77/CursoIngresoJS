/*
Ejercicio 9 bis

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	
	var sueldo;
	var resultado;
	var porcentaje;
	

	porcentaje = prompt("Ingrese un porcentaje");

	sueldo = document.getElementById("txtIdSueldo");

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	
	document.getElementById("txtIdResultado").value = resultado;

	resultado = (sueldo * porcentaje / 100) + sueldo;
	document.getElementById("txtIdResultado").value = "Resultado" + resultado;


	
}
