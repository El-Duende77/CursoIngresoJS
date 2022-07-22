function mostrar()
{	/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/
	
	//declaro variables
	var edad;
	var mensaje;

	//asigno valores
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	
	//logica
	if (edad > 12 && edad < 18) {

		mensaje = "Es adolecente y tiene " + edad + " años ";

	}

 	//resultado
	alert(mensaje);

}