function mostrar()
{
	let numeros=0;
	let contadorDivisores=0;

	numeros=parseInt(prompt("Ingrese un numero "));
	
	while(isNaN(numeros)){
		numeros=parseInt(prompt("Eso no es un numero. Ingrese un numero "));
		
	}
	
	for(let i=2 ; i< numeros ; i++/*let i=1; i<=numeros; i++*/){
		
		if(numeros % i==0){	
			contadorDivisores++;
		}
	}
	if(contadorDivisores !=0 || numeros<=1 ){
		alert(numeros + " no es primo ");
	}
	else{
		alert(numeros + "  es primo");
	}
	

}//FIN DE LA FUNCIÓN