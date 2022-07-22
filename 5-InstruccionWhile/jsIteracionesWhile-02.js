/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{	
	//declaro variables
	var numero;
	var mensaje;

	//inicio variable de control
	numero =0;
	mensaje = "";

	//evaluo la iteracion
	while(numero < 10)
	{
		numero = numero + 1;
		mensaje = numero + " " + mensaje;

	}
	console.log(mensaje);
	
	
	
	
	/*var contador;
	//declaro variables 
	var numero;
	var mensaje;

	//seteo las variables de control
	numero = 0;
	mensaje = "";

	//evaluo las iteracion de forma descendente
	while(numero < 10)
	{
		numero = numero + 1;
		mensaje = numero + " " + mensaje;
	}
	//las iteraciones se muestran por consola
	console.log(mensaje);



	contador=10;

	while(contador>0){
		//contador--;
		console.log(contador);
		contador=contador-1;

	}*/

	
	/*let i=10;

	while( i>=1 ){
		//i++;	//cuando la variable "i" está por encima de console "i" toma el valor 1
		console.log(i);
		i--;	//cuando "i" esta debajo de console "i" toma el valor "0"
	}*/

	/*var contador;
	contador = 11;

	while (contador >0 ){
		contador = contador - 1;
		alert("Cantidad de repeticiones  : " + contador);
	} */
	
}//FIN DE LA FUNCIÓN