function mostrar()
{	/*Al ingresar una edad debemos informar solo si la persona es mayor de edad*/
	
	//declaro variables
	var edad;
	var mensaje;

	//asigno valor a la variable
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//logica
	if (edad > 17) {
		mensaje = "Es mayor de edad y tiene  " + edad + " años ";
	}

	alert(mensaje);
}