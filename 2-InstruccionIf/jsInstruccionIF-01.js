//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita"

function mostrar()
{	
	//Declaro variables
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	//inicio con el condicional luego hago la logica
	if (edad == 15) {	
		mensaje = "Niña bonita";
	}
	
	alert(mensaje);
}	