/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{	//declaro vriables
	var clave;
	var mensaje;

	//pido el dato por prompt y asigno valor a la variables
	clave = prompt("Ingrese una clave ");
	mensaje = "Clave correcta ";

	//evaluo la iteracion
	while(clave != "utn750")
	{
		clave = prompt("Error, ingrese clave ");
	}
	alert(mensaje);
	
	
	/*
	//declaro variables
	var clave;
	var mensaje;

	//doy valor a la variable
	mensaje = "Clave correcta";

	//pido el dato por prompt
	clave = prompt("Ingrese una clave ");

	//evaluo la estructura repetitiva
	while(clave != "utn750")
	{
		clave = prompt("Error, ingrese clave correcta ");
	}
	alert(mensaje);*/
	
	/*var clave;

	clave=prompt("Ingrese una clave");

	while(clave!="utn750"){
		clave=prompt("Clave incorrecta, ingrese clave");
	}
	alert("Clave correcta");*/



	/*var clave;

	clave=prompt("Ingrese clave");

	while(clave!="utn750"){
		clave=prompt("Clave incorrecta, ingrese clave");
	}
	alert("Clave correcta");*/

	/*var claveIngresada;
	var flag;
	flag=0;
	do{
		if(flag==0){
			claveIngresada=prompt("Ingrese clave");
			flag=1;
		}
		else{
			claveIngresada=prompt("Clave incorrecta, ingrese clave");
		}
	}while(claveIngresada!="utn750");
	alert("Clave correcta");*/

	/*claveIngresada=prompt("Ingrese una clave alfanumerica :");
	//acá debo colocar un condición que sea verdadera cuando el dato sea invalido
	//opcion1 cuando el dato es invalido
	//while(claveIngresada !="utn750"){
	//cuando el dato No sea valido
	while(!(claveIngresada=="utn750"))	
	 
		claveIngresada=prompt("Reingrese la clave ");
		
	}
	alert("La clave es correcta ");*/
	
	
	/*var claveIngresada;

	claveIngresada=prompt("Ingrese clave alfanomerica");

	while(claveIngresada !="utn750"){
		//mensaje="La clave ingresada es incorrecta";
		alert("La clave es incorrecta");
		claveIngresada=prompt("Ingrese clave alfanomerica");
	}
	alert("La clave es correcta ");*/


	/*var claveIngresada;
	claveIngresada = prompt("ingrese clave alfanumerica");
	
	while(claveIngresada  != "utn750"){
		mensaje = "La clave es incorrecta";
		alert(mensaje);
		claveIngresada = prompt("Ingrese clave alfanumerica");
	}
	mensaje = "La clave es correcta";
	alert(mensaje);*/

}//FIN DE LA FUNCIÓN
