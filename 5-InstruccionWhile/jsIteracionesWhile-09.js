/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numero;
	var maximo;
	var minimo;
	var continuar;
	var flag;

	maximo=0;
	minimo=0;
	flag=0
	
	do
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if(flag==0 || numero>maximo)
		{
			maximo=numero;
		}
		if(flag==0||numero<minimo)
		{
			minimo=numero;
			flag=1;
		}
		continuar=prompt("Quiere ingresar otro numero ? ");

	}while(continuar=="si");

	document.getElementById("txtIdMaximo").value=maximo;
	document.getElementById("txtIdMinimo").value=minimo;


	/*var numero;
	var maxino;
	var minimo;
	var continuar;
	var flag;
	
	flag=0;
	maxino=0;
	minimo=0;
	
	do{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);

		if(flag==0 || numero>maxino){
			maxino=numero;
		}
		if(flag==0 || numero<minimo){
			minimo=numero;
			flag=1;
		}
		continuar=prompt("Quiere ingresar otro numero? ");
	}while(continuar=="si");
	
	document.getElementById("txtIdMaximo").value=maxino;
	document.getElementById("txtIdMinimo").value=minimo;*/


	/*var numero;
	var maxino;
	var minimo;
	var seguir;
	var flag;

	flag=0;

	do{
		numero=prompt("Ingrese un numero ");
		numero=parseInt(numero);
		if(flag==0 || numero>maxino){
			maxino=numero;
		}
		if(flag==0 || numero<minimo){
			minimo=numero;
			flag=1;
		}
		seguir=prompt("Quiere ingresar otro numero? ");
	}while(seguir=="si");
	document.getElementById("txtIdMaximo").value=maxino;
	document.getElementById("txtIdMinimo").value=minimo;*/
	
	
	/*
	// declaro las variables
	var numero;
	var maxino;
	var minimo;
	var seguir;
	var flag;

	flag=0;

	//armo un bucle del tipo mientras el usuario quiera (do while)
	do{	// pido un numero
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		// debo conocer si estoy pidiendo por primera vez
		if(flag==0 || numero>maxino) //ctrl+alt+1 esa convinacion da "||"
		{	// si es así inicializo max y min
			maxino=numero;
		}
		// caso contrario me fijo si tengo un nuevo max o min
		// y los actualizo de ser necesario
		if(flag==0 || numero<minimo)
		{	// si es así inicializo max y min
			minimo=numero;
			flag=1;
		}
		seguir=prompt("Quiere ingresar otro numero? ");
	}while(seguir=="si");
	//muestro la informacion max y  min
	document.getElementById("txtIdMaximo").value=maxino;
	document.getElementById("txtIdMinimo").value=minimo;*/
		
	
	/* declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/
}//FIN DE LA FUNCIÓN