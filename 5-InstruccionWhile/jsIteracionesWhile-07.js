/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	var numeros;
	var sumaAcumulada;
	var contador;
	var promedio;
	var continuar;

	sumaAcumulada=0;
	promedio=0;
	continuar="si";
	contador=0;

	do{
		numeros=prompt("Ingrese numero ");
		numeros=parseInt(numeros);
		sumaAcumulada=sumaAcumulada+numeros;
		contador++;
		continuar=prompt("Quiere ingresar otro numero ? ");
	}while(continuar=="si");

	document.getElementById("txtIdSuma").value=sumaAcumulada;
	document.getElementById("txtIdPromedio").value=sumaAcumulada/contador;
	
	

	
	/*var numeroIngresado;
	var pregunta;
	var sumaAcumulada;

	pregunta="si";
	sumaAcumulada=0;

	do
	{
		numeroIngresado=prompt("Ingrese numeros ");
		numeroIngresado=parseInt(numeroIngresado);
		sumaAcumulada=sumaAcumulada+numeroIngresado;
		pregunta=prompt("Quiere ingresar otro numero ? ");
	}while(pregunta=="si");
	document.getElementById("txtIdSuma").value=sumaAcumulada;
	document.getElementById("txtIdPromedio").value=sumaAcumulada/numeroIngresado;*/


	
	/*var numeroIngresado;
	var contador;
	var acumulador;
	var continuar;
	var promedio;
	contador=0;
	acumulador=0;
	
	do{
		numeroIngresado=prompt("Ingtese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador++;
		continuar=prompt("Quiere continuar? si o no ?");
	}while(continuar=="si");
	
	promedio=acumulador/contador;
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;*/


	/*var contador;
	var acumulador;
	var numeroIngresado;
	var pregunta;
	var quiereContinuar;
	
	pregunta=true;
	contador=0;
	acumulador=0;

	while(pregunta)
	{	
		numeroIngresado = prompt("Ingrese numeros");
		numeroIngresado = parseInt(numeroIngresado);
		contador++;
		acumulador = acumulador + numeroIngresado;
		quiereContinuar=prompt("Quiere continuar? Si o No? ");
		if(quiereContinuar=="No"){
			pregunta=false;
		}	
	}
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;*/

}//FIN DE LA FUNCIÓN