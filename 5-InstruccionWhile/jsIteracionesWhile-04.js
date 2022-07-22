/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{	
	//declaro variables
	var numero;
	
	//inicio la variable de control
	numero = 0;
	
	//pido el dato y asigno valor a la variable luego hago parseInt
	numero = prompt("Ingrese un num. entre 0 y 9 ");
	numero = parseInt(numero);

	//evaluo la iteracion
	while(numero > 9)
	{
		numero = prompt("Numero fuera de rango, ingrese un numero");
	}
	document.getElementById("txtIdNumero").value = numero;
	
	
	
	
	
	/*
	//declaro variables
	var numero;

	//inicio la variable de control
	numero = 0;

	//pido un numero y parseo
	numero = prompt("Ingrese un numero entre 0 y 9");
	numero = parseInt(numero);

	//evaluo la iteracion, si el num. es mayor a 9 entra al bucle 
	while(numero > 9)
	{	
		//si el numero no esta en el rango lo vuelvo a pedir
		numero = prompt("Error, ingrese num. entre 0 y 9 ");
		
	}
	document.getElementById("txtIdNumero").value = numero;*/


	/*
	var numero;
	var datos;

	datos=true;

	while(datos){
		numero=prompt("Ingrese un numero entre 0 y 9");
		if(numero>-1 && numero<10){
			datos=false;
		}
		else if(numero>9){
			alert("El numero esta fuera del rango");
		}
	}
	document.getElementById("txtIdNumero").value=numero;
	*/


	/*var numero;
	var datos;

	datos=true; //variable de control inicializada en true

	while(datos){
		numero=prompt("Ingrese un numero");
		if(numero>=0 && numero<9){
			datos=false; //se cambia el valor de la variable control para que salga del bucle
		}
		else if(numero>9){
			alert("El numero esta fuera de rango");
		}
	}
	document.getElementById("txtIdNumero").value=numero;*/


	/*var numeroIngresado;
	var datos;

	datos=true;

	while(datos)
	{	
		numeroIngresado=prompt("Ingrese un numero entre el 0 y 9");
		if(numeroIngresado>=0 && numeroIngresado<=9)
		{
			datos=false;
		}
	}
	document.getElementById("txtIdNumero").value=numeroIngresado;*/


	/*var numero;
	var datos;

	datos=true;

	while(datos){
		numero=prompt("Ingrese un numero ");	
		if(numero>=0 && numero<=9){
			datos=false;
		}
	}
	document.getElementById("txtIdNumero").value=numero;*/
}//FIN DE LA FUNCIÓN