/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{	
	var numero;
	var mensaje;

	numero = 0;
	mensaje = "";

	while(numero < 10)
	{
		numero = numero + 1;
		mensaje = mensaje + numero + " ";
	}
	console.log(mensaje);




	/*var mensaje;
	var numero;

	numero = 0;
	mensaje = "";

	while(numero < 10)
	{
		numero = numero + 1;
		mensaje = mensaje + numero + " ";
	}
	console.log(mensaje);*/


	/*var contador;

	contador=1;

	while(contador<11){
		console.log(contador);
		contador++;
	}*/
	
	
	/*
	//declarar la variable e iniciar la variable de control
	var i=1;
	//variable de control(condicion)
	while(i<11){
		//i++; //cuando la variable esta encima de console el valor q toma el contador es 2,3,4...11	
		console.log(i);
		i++; //cuando la variable de control està debajo el valor que toma el contyador es 1,2,3...10
	}*/

	
	/*let i=1;	//declaracion e inicializacion de variable de control

	while( i<11 ){		//variable de control (condicion)
		//i++;	//cuando la variable i está debajo de de console toma valor "1"
		console.log(i);		//modificacion de variable de control
		i++;//cuando la variable i está debajo de de console toma valor "0"
	}*/


	/*let x="1234";
	console.log(parseInt(x));*/
	
	/*var contador;
	contador = 0;

	while (contador < 10){
		contador = contador + 1;
		alert("Cantidad de repeticiones  : " + contador);
	}*/
	
}//FIN DE LA FUNCIÓN