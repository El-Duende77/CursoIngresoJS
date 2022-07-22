function mostrar()
{	/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4*/
	
	//declaro variables 
	var nota;
	var mensaje;
	var numeroMaximo;
	var numeroMinimo;

	//variables de control
	numeroMaximo = 10;
	numeroMinimo = 1;
	
	//realizo operacion 
	nota = Math.round( Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo );

	//condicional
	if (nota > 8) 
	{
		mensaje = "EXCELENTE " + nota;
	}
	else 
	{
		if( nota < 4 ) 
		{
			mensaje = "vamos, la proxima se puede " + nota;
	
		}
		else 
		{
		mensaje = " Aprobó " + nota;
		}
	}

	alert(mensaje);

}