function mostrar()
{	/*Al ingresar una edad debemos informar si la persona es mayor de edad, 
	sino informar que es un menor de edad.*/
	
	//declaro variables
	var edad;
	var mensaje;

	//asigno valor a las variables
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	//logica
	if (edad > 17) {

		mensaje = "Es mayor de edad y tiene " + edad + " años";

	} else {

		mensaje = "Es menor de edad y " + edad + " años";

	}

	alert(mensaje);

	/*
	//logica
	if (edad >17) {

		mensaje = " Es mayor de edad y tiene " + edad + " años";
	}
	if (edad <18) {
		mensaje = "Es menor de edad y tiene " + edad + " años";
	}

	//resultado
	alert(mensaje);*/
} 