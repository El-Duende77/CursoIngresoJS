/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	
	var numero;
	var positivos;
	var negativos;
	var flag;
	var continuar;

	positivos=0;
	negativos=1;
	flag=0;

	do{
		numero=prompt("Ingrese un numero ");
		numero=parseInt(numero);
		if(numero>=0){
			positivos=positivos+numero;
		}
		else{
			flag=1;
			negativos=negativos+numero;
		}
		continuar=prompt("Quiere ingresar otro numero ? ");

	}while(continuar=="si");

	if(flag==0){
		negativos=0;
	}
	document.getElementById("txtIdSuma").value=positivos;
	document.getElementById("txtIdProducto").value=negativos*numero;



	/*var numero;
	var sumaPositivos;
	var multiplicarNegativos;
	var continuar;
	var flag;

	sumaPositivos=0;
	multiplicarNegativos=1;
	flag=0;

	do
	{
		numero=prompt("Ingrese numeros ");
		numero=parseInt(numero);

		if(numero>=0)
		{
			sumaPositivos=sumaPositivos+numero;
		}
		else
		{	
			flag=1;
			multiplicarNegativos=multiplicarNegativos*numero;
		}
		continuar=prompt("Quiere ingresar otro numero ? ");
	}while(continuar=="si");
	if(flag==0)
	{
		multiplicarNegativos=0;
	}
	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicarNegativos;*/

	/*var numero;
	var positivos;
	var negativos;
	var seguir;
	var flag;

	flag=0;
	positivos=0;
	negativos=1;
	//debemos realizar un bucle del tipo mientras el usuario quiera (do whikle)
	do{
		//pedir los numeros dentro del bucle
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		//analizar el signo de cada numero
		//acumular en el acumulador
		if(numero>=0){
			//alert("Positivo");
			positivos=positivos+numero;
		}
		else{
			//alert("Negativo");
			flag=1; //sirve para saber si pasa por esa parte del codigo
			negativos=negativos*numero;
		}
		seguir=prompt("Quiere ingresar otro numero? ");
		
	}while(seguir == "si");
	//mostrar el resultado fuera del bucle
	if(flag==0){ //flag=0; es para q al pasar por esa parte del codigo nos muestre el valor 0 
		negativos=0;
	}
	document.getElementById("txtIdSuma").value=positivos;
	document.getElementById("txtIdProducto").value=negativos;*/
}//FIN DE LA FUNCIÓN