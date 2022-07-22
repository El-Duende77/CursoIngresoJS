function mostrar()
{	/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/
	
	//declaro variables
	var edad;
	var mensaje;

	//asigno valores
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	//condicional 
	if (!(edad >12 && edad < 18)) {

		mensaje = " No es adolescente ";

	} else {

		mensaje = "Es adolescente ";

	}

	alert(mensaje);

	/*
	//condicional
	if ( edad < 13) {

		mensaje = "No es adolescente y tiene " + edad + " años ";

	} else {

		if ( edad > 17) {

			mensaje = "No es adolescente y tiene " + edad + " años ";

		} else {

			mensaje = "Es adolescente ";
		}

	}

	alert(mensaje);*/

}