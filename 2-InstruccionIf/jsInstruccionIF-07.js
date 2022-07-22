function mostrar()
{	/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
	mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/

	//declaro variables
	var edad;
	var estadoCivil;
	var mensaje;

	//asigno valores
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;
	
	//condicional
	if ( edad < 18 && estadoCivil != "Soltero" ) 
	{
		mensaje = "Es muy pequeño para no ser soltero";

	} 
	else 
	{	if ( edad > 17 && estadoCivil == "Casado" ) 
		{

			mensaje = "Es mayor y está casado";

		} 
		else 
		{	if ( edad < 18 && estadoCivil == "Soltero" ) 
			{
				mensaje = "Es soltero y menor";
			}
			else
			{
				mensaje = "Es mayor y está divorciado";
			}
		}
	}
	
	alert(mensaje);

}