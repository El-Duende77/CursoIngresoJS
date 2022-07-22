function mostrar()
{	/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
	y mostrar la cantidad de numeros pares encontrados.*/
	

	//declaro variables
	let numeros;
	let contadorPares=0;

	//pido un numero
	numeros=parseInt(prompt("Ingrese un numero "));
	//tengo q hacer q una variable tome los 
	//valores desde el 1 hasta el numero ingresado
	for(let i=1; i<=numeros; i++){
		//para c/u de los valores de las variables analizo la pariodad
		
		if(i %2==0){	//cuando encuentro un par lo cuento y los muestro
			contadorPares++;
			console.log(i);
		}

	}
	//una vez q analice todos los valores muestro la cantidad de pares 
	console.log("Pares encontrados " + contadorPares);


}//FIN DE LA FUNCIÓN