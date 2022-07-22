/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	alert("La suma es : " + resultado);

		
}

function restar()
{	var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno-numeroDos;
	alert("La resta es : " + resultado );

}

function multiplicar()
{ 	var numUno;
	var numDos;
	var resultado;
	
	numUno = document.getElementById("txtIdNumeroUno").value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value;
	numDos = parseInt(numDos);

	resultado = numUno * numDos;

	alert("La multiplicación es : " + resultado);
	
}

function dividir()
{	var numUno;
	var numDos;
	var resultado;
	
	numUno = document.getElementById("txtIdNumeroUno").value;
	numUno = parseInt(numUno);

	numDos = document.getElementById("txtIdNumeroDos").value;
	numDos = parseInt(numDos);
	
	resultado = numUno / numDos;

	alert("La división es : " + resultado);
	
}

