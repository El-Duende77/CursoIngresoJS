function mostrar()
{	/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
	NO HACER NADA, pero si no es asi, y es soltero y no es menor, 
	mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

	//declaro variables
	var edad;
	var estadoCivil;
	var mensaje;

	//asigno valores
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	//condicional

	
	if ( edad > 17 && estadoCivil == "Soltero") 
	{
		mensaje = "Es soltero y no es menor";
	}
	
	/*
	if (! ( edad < 18 || estadoCivil != "Soltero"))
	{
		mensaje = "Es soltero y no es menor";
	}*/
	

	alert(mensaje);
}