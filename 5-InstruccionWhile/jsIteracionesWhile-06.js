function mostrar()
{	//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
	
	var numero;
	var sumaAcumulada;
	var promedio;
	var contador;
	var continuar;
	
	continuar="si;"
	contador=0;
	sumaAcumulada=0;
	promedio=0;

	while(contador<5){
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		sumaAcumulada=sumaAcumulada+numero;
		contador++;
		//continuar=false;
	}
	document.getElementById("txtIdSuma").value=sumaAcumulada;
	document.getElementById("txtIdPromedio").value=sumaAcumulada/contador;



	/*var numeroIngresado;
	var contador;
	var acumulador;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese numeros ");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		acumulador=acumulador+numeroIngresado;

	}
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;*/


	/*var numero;
	var i;
	var suma;

	i=0;
	suma=0;

	while(i<5)
	{
		numero=prompt("Ingrese un numero ");
		numero=parseInt(numero);
		i=i+1;
		suma=suma+numero;
	}
	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=suma/5;*/


	/*var i;
	var numero;
	var acumulador;

	i=0;
	acumulador=0;
	
	while(i<5){
		numero=prompt("Ingrese numero ");
		numero=parseInt(numero);
		i=i+1;
		acumulador=acumulador+numero;
	}
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;*/



	/*var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while (contador < 5) 
	{	
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador +1;
		acumulador = acumulador + numeroIngresado;
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;*/
}//FIN DE LA FUNCIÓN