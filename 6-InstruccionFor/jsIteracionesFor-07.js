function mostrar()
{	//al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
	//y mostrar la cantidad de numeros divisores encontrados.

	let numeros=0;
	let contadorDivisores=0;

	numeros=parseInt(prompt("Ingrese un numero "));
	
	for(let i=1; i<=numeros; i++){
		
		if(numeros % i==0){	//para saber los divisores se usa esa formula 
			contadorDivisores++;
			console.log(i);
		}
	}
	console.log("Divisores encontrados " + contadorDivisores);




}//FIN DE LA FUNCIÓN