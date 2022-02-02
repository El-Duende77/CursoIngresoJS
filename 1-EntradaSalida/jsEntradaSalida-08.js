/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	
	var numeroDividendo;
	var numDivisor;
	var resto;

	numDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = numDividendo % numDivisor;
	alert("El resto es : " + resto );
}
