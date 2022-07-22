/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{	
	var numero;
	var positivos;
	var negativos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCero;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var seguir;

	positivos=0;
	negativos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCero=0;
	cantidadPares=0;
	promedioNegativos=0;
	promedioPositivos=0;

	do{
		numero=prompt("Ingrese un  numero ");
		numero=parseInt(numero);
		if(numero<0){
			negativos=negativos+numero;
			cantidadNegativos++;
		}
		else if(numero>=0){
			positivos=positivos+numero;
			cantidadPositivos++;
		}
		if(numero==0){
			cantidadCero++;
		}
		if(numero %2 ==0){              
			cantidadPares++;
		}
		seguir=prompt("Quiere ingresar otro numero ? ");

	}while(seguir=="si");

	if(cantidadPositivos>0){
		promedioPositivos=positivos/cantidadPositivos;
	}
	if(cantidadNegativos<0){
		promedioNegativos=negativos/cantidadNegativos;
	}

	diferencia=positivos-negativos;

	console.log("1-Suma de los negativos " + negativos)
	console.log("2-Suma de los positivos " + positivos)
	console.log("3-Cantidad de positivos " + cantidadPositivos)
	console.log("4-Cantidad de negativos " + cantidadNegativos)
	console.log("5-Cantidad de ceros" + cantidadCero)
	console.log("6-Cantidad de números pares " + cantidadPares)
	console.log("7-Promedio de positivos " + promedioPositivos)
	console.log("8-Promedios de negativos " +promedioNegativos)
	console.log("9-Diferencia entre positivos y negativos " + diferencia)
	













	/*var numero;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivo;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var seguir;

	sumaNegativos=0;
	sumaPositivos=0;
	contadorPositivo=0;
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;
	promedioNegativos=0;
	promedioPositivos=0;
	
	do{
		numero=prompt("Ingrese un  numero ");
		numero=parseFloat(numero);

		if(numero<0){

			sumaNegativos=sumaNegativos+numero;
			contadorNegativos++;
		}
		else if(numero>=0){
			sumaPositivos=sumaPositivos+numero;
			contadorPositivo++;
		}
		if(numero==0){
			contadorCeros++;
		}
		else if(numero %2 ==0){
			contadorPares++;
		}
		seguir=prompt("Quiere ingresar otro numero ?");

		}while(seguir=="si");

	 	if(contadorPositivo>=0){
		promedioPositivos=sumaPositivos/contadorPositivo;
		}
		if(contadorNegativos<0){
			promedioNegativos=sumaNegativos/contadorNegativos;
		}

		diferencia=contadorPositivo-contadorNegativos;

		console.log("1-Suma de los negativos " + sumaNegativos)
		console.log("2-Suma de los positivos " + sumaPositivos)
		console.log("3-Cantidad de positivos " + contadorPositivo)
		console.log("4-Cantidad de negativos " + contadorNegativos)
		console.log("5-Cantidad de ceros " + contadorCeros)
		console.log("6-Cantidad de números pares " + contadorPares)
		console.log("7-Promedio de positivos " + promedioPositivos)
		console.log("8-Promedios de negativos " + promedioNegativos)
		console.log("9-Diferencia entre positivos y negativos " + diferencia)*/



	/*
	//declarar contadores y variables 
	var numero;
	var seguir;
	var contadorNegativos =0;
	var contadorPositivo=0;
	var contadorCeros=0;
	var contadorPares=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var promedioPositivos=0; //los inicializo en 0 por las dudas que el usuario no ingrese ningun positivo y para ahorrar un bloque "else" al final del codigo
	var promedioNegativos=0; //los inicializo en 0 por las dudas que el usuario no ingrese ningun negativo y para ahorrar un bloque "else" al final del codigo
	var diferencia;

	//generar un bucle del tipo hasta que el usuario quiera (do while)
	
	do{
		//pido un numero
		numero=parseInt(prompt("Ingrese un numero "));
		
		//analizar el signo del numero y actuar en consecuencia
		//negativos
		if(numero<0){
			acumuladorNegativos+=numero;
			contadorNegativos++;
		}
		//ceros
		else if(numero==0){
			contadorCeros++;
		}
		//positivos
		else{	
			acumuladorPositivos+=numero;		
			contadorPositivo++;
		}
		//analizar si el numero es par
		if(numero % 2 ==0){ //el operador aritmetico % (modulo) se usa para determinar si un numero es par
			contadorPares++;
		}

		seguir=prompt("Quiere ingresar otro numero? ");
	}while(seguir=="si");

	//hacer los calculos que necesitan los datos conseguidos durante el bucle

	if(contadorPositivo>0){
		promedioPositivos=acumuladorPositivos/contadorPositivo;
	}

	if(contadorNegativos<0){
		promedioNegativos=acumuladorNegativos/contadorNegativos;
	}

	diferencia=contadorPositivo-contadorNegativos;
	//mostrar los resultados
	console.log("1-Suma de los negativos " + acumuladorNegativos)
	console.log("2-Suma de los positivos " + acumuladorPositivos)
	console.log("3-Cantidad de positivos " + contadorPositivo)
	console.log("4-Cantidad de negativos " + contadorNegativos)
	console.log("5-Cantidad de ceros " + contadorCeros)
	console.log("6-Cantidad de números pares " + contadorPares)
	console.log("7-Promedio de positivos " + promedioPositivos)
	console.log("8-Promedios de negativos " + promedioNegativos)
	console.log("9-Diferencia " + diferencia)*/
}//FIN DE LA FUNCIÓN