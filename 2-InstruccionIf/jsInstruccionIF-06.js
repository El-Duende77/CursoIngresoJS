function mostrar()
{	/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
	o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/
	
	//declaro variables
	var edad;
	var mensaje;
	
	//asigno valores
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	//logica
	if ( edad < 13) {

		mensaje = "Es un niño y tiene " + edad + " años ";

	} else {

		if ( edad > 12 && edad < 18) {

			mensaje = "Es adolescente y tiene " + edad + " años ";

		} else {

			mensaje = "Es mayor de edad y tiene " + edad + " años ";

		}
	}
	/*
	if (edad > 17) {

		mensaje = "Es mayor de edad y tiene " + edad + " años ";

	} else {

		if ( edad < 13) {

			mensaje = "Es niño y tiene " + edad + " años ";

		} else {

			mensaje = "Es adolescente y tiene " + edad + " años ";

		}
	}*/
	
	alert(mensaje);

}