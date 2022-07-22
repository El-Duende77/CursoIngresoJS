/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{	
	//declaro variables
	var sexo;

	//pido el dato por prompt
	sexo = prompt('Ingrese sexo "f" o "m" ');

	//evaluo la iteracion
	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("Error, ingrese sexo ");

	}
	document.getElementById("txtIdSexo").value = sexo;












	/*var sexo;
	var continuar;

	continuar=true;

	while(continuar){
		sexo=prompt("Ingrese sexo f, m, nb ");
		if(sexo=="f" || sexo=="m" || sexo=="nb"){
			continuar=false;
		}
		else{
			alert("Ingresó sexo incorrecto, intente nuevamente ");
		}
	}
	document.getElementById("txtIdSexo").value=sexo;*/


	/*var sexo;
	var continuar;

	continuar=true; //variable de control inicializada en true
	//se crea el bucle 
	while(continuar){
		sexo=prompt("Ingrese sexo f, m, nb"); //se ppide el dato al usuario
		if(sexo=="f" || sexo=="m" || sexo=="nb"){
			continuar=false; //se cambia el valor a la variable de control para qie salga del bucle
		}
	}
	document.getElementById("txtIdSexo").value=sexo;*/



	/*var sexoIngresado;
	var continuar;

	continuar=true;
	while(continuar)
	{	
		sexoIngresado=prompt("Ingrese sexo f , m , nb ")
		if(sexoIngresado=="f" || sexoIngresado=="m" || sexoIngresado=="nb")
		{
			continuar=false;
		}
	}
	document.getElementById("txtIdSexo").value=sexoIngresado*/


	/*var sexo;
	var ingreso;

	ingreso=true;

	while(ingreso)
	{
		sexo=prompt("Ingrese sexo f ,  m , nb ");
		if(sexo=="f" || sexo=="m" ||sexo=="nb")
		{
			ingreso=false;
		}
	}
	document.getElementById("txtIdSexo").value=sexo;*/
		
	
	/*var ingreso;
	var sexoIngresado;
	ingreso=false;
	sexoIngresado = prompt("ingrese f ó m .");

	while (ingreso)
	{	
		if(sexoIngresado=="f" || sexoIngresado=="m"){
			ingreso=true;
		}
	}
	document.getElementById("txtIdSexo").value=sexoIngresado;*/
	
	
}//FIN DE LA FUNCIÓN