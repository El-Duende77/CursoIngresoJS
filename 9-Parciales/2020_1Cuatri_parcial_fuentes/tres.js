function mostrar()
{	
	// primer parcial de marzo 2022
	//De 5  personas que suben a un avión necesitamos tomar y validar los siguientes datos:
	//nombre ,nacinalidad( nativo o extranjero ) asiento [1 al 100],importe del pasaje de 0 a 300000, sexo [m,f o nb] y edad [1 a 100].
	//a)La edad promedio de los  nativos de sexo NB.
	//b)nombre y sexo del maximo importe ingresado por un pasaje de un nativo.
	//c)nombre y sexo del minimo importe ingresado por un pasaje de un extranjero.
	//Pedir datos por prompt y mostrar por document.write o console.log
	
	let acumuladorEdad;
	let asiento;
	let contadorEdad;
	let edad;
	let edadPromedio;
	let flagImporte;
	let flagMinimoImporte;
	let i;
	let importe;
	let importeMaximo;
	let importeMinimo;
	let nacionalidad;
	let nacionalidadImpMaximo;
	let nacionalidadImpMinimo;
	let nombreYapellido;
	let nombrePersMaximoImporte;
	let nombrePersMiniImporte;
	let sexo;
	let sexoPersMaxiImporte
	let sexoPersMiniImporte;
	 

	acumuladorEdad=0;
	contadorEdad=0;
	flagImporte=0;
	flagMinimoImporte=0;
	i=0;

	for( i=0;i<5;i++)
	{	//valido datos
		nombreYapellido=prompt("ingrese nombre y apellido : " );
		while(nombreYapellido==null){
			nombreYapellido=prompt("error. ingrese nombre y apellido : ");
		}

		nacionalidad=prompt("ingrese nacionalidad nativo o extranjero : ");
		while(nacionalidad==null){
			nacionalidad=prompt("error. ingrese nacionalidad nativo o extranjeero :");
		}

		asiento=prompt("ingrese asiento del 1 al 100 : ");
		asiento=parseInt(asiento);
		while(asiento==null){
			asiento=prompt("error . ingrese un asiento del 1 al 100 : ");
		}

		importe=prompt("ingrese importe del 0 al 300000 : ");
		importe=parseInt(importe);
		while(importe==0){
			importe=prompt("error. ingrese un importe del 0 al 300000 : ");
			importe=parseInt(importe);
		}

		sexo=prompt("ingrese sexo 'f' , 'nb', 'm' : ");
		while(!(sexo == 'f' || sexo == 'nb' || sexo == 'm' )){
			sexo=prompt("error. ingrese sexo 'f' , 'nb' , 'm' :");
		}

		edad=prompt("ingrese edad : ");
		edad=parseInt(edad);
		while(!(edad>0 && edad <101)){
			edad=prompt("error. ingrese edad : ");
		}
		
		//a)La edad promedio de los  nativos de sexo NB.
		if(nacionalidad=="nativo" && sexo=="nb"){
			acumuladorEdad=acumuladorEdad+edad;
			contadorEdad++;
			edadPromedio=acumuladorEdad/contadorEdad;
		}

		//b)nombre y sexo del maximo importe ingresado por un pasaje de un nativo.
		if(flagImporte==0||(importe>importeMaximo&&nacionalidad=="nativo")){
			importeMaximo=importe;
			nombrePersMaximoImporte=nombreYapellido;
			sexoPersMaxiImporte=sexo;
			nacionalidadImpMaximo=nacionalidad;
			flagImporte=1;
			
		}
		//c)nombre y sexo del minimo importe ingresado por un pasaje de un extranjero.
		if(flagMinimoImporte==0||(importe>importeMinimo&&nacionalidad=="extranjero")){
			importeMinimo=importe;
			nombrePersMiniImporte=nombreYapellido;
			sexoPersMiniImporte=sexo;
			nacionalidadImpMinimo=nacionalidad;
			flagMinimoImporte=1;	
		}
	}
	console.log("edad promedio nativos nb : " + edadPromedio);

	console.log("nombre pers. max. importe : " + nombrePersMaximoImporte +  
	"\nSexo :" + sexoPersMaxiImporte +
	"\nimporte maximo por pasaje : " + importeMaximo +
	"\nnacionalidad : " + nacionalidadImpMaximo);
	
	console.log("nombre pers. min. importe : " + nombrePersMiniImporte +  "\nsexo : " + sexoPersMiniImporte  + 
	"\nimporte minimo por pasajes : " + importeMinimo + 
	"\nnacionalidad : " + nacionalidadImpMinimo);


	/*
	//En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y 
	//estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	//a) El nombre de la persona con mas temperatura.
	//b) Cuantos mayores de edad estan viudos
	//c) La cantidad de hombres que hay solteros o viudos.
	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	//e) El promedio de edad entre los hombres solteros.
	
	//Declaro variables

	var acumuladorEdadHombreSoltero;
	var acumuladorTemperatura;
	var contadorMayoresDeSesenta;
	var contadorMenoresDeSesenta;
	var contadorHombresSolteros;
	var contadorHombresSolterosOviudos;
	var contadorViudos;
	var contadorTemperatura;
	var continuar;
	var estadoCivil;
	var edad;
	var nombrePersonaMayorTemp;
	var nombreYApellido;
	var personaMayorTemperatura;
	var promedioEdadHombresSolteros;
	var sexo;
	var temperatura;
	var flagTemperatura;

	acumuladorEdadHombreSoltero=0;
	acumuladorTemperatura=0;
	contadorMayoresDeSesenta=0;
	contadorMenoresDeSesenta=0;
	contadorTemperatura=0;
	contadorHombresSolteros=0;
	contadorHombresSolterosOviudos=0;
	contadorViudos=0;
	continuar="si";
	flagTemperatura=0;
	temperatura=0;
	temperaturaMayorTreintaYOcho=0;
	temperaturaMenorTreintaYOcho=0;

	do
	{
		//valido los datos
		nombreYApellido=prompt("Ingrese nombre y apellido ");
		while(nombreYApellido==null)
		{
			nombreYApellido=prompt("error. ingrese nombre y apellido ");
		}
		edad=prompt("ingrese edad ");
		edad=parseInt(edad);
		while(!(edad>0&&edad<100))
		{
			edad=prompt("error. ingrese edad ");
			edad=parseInt(edad);
		}
		sexo=prompt("ingrese su sexo 'f' , 'm' , 'nb' ");
		while(!(sexo=="f" || sexo=="m" || sexo=="nb"))
		{
			sexo=prompt("error. ingrese sexo ");
		}
		estadoCivil=prompt("ingrese su estado civil ");
		while(!(estadoCivil=="casado" || estadoCivil=="soltero" || estadoCivil=="viudo"))
		{
			estadoCivil=prompt("error. ingrese su estado civil ");
		}
		temperatura=prompt("ingrese temperatura ");
		temperatura=parseFloat(temperatura);
		while(!(temperatura>34 && temperatura<43))
		{	
			temperatura=prompt("fuera del rango");
			temperatura=parseFloat(temperatura);
		}
		
		
		switch(temperatura)
		{
			case 35:
				acumuladorTemperatura=acumuladorTemperatura+temperatura;
				contadorTemperatura++;
				
				break;
			case 36:
				acumuladorTemperatura=acumuladorTemperatura+temperatura;
				contadorTemperatura++;

				break;
			case 37:
				acumuladorTemperatura=acumuladorTemperatura+temperatura;
				contadorTemperatura++;
			
				break;
			case 38:
				acumuladorTemperatura=acumuladorTemperatura+temperatura;
				contadorTemperatura++;

				break;
			case 39:
				acumuladorTemperatura=acumuladorTemperatura+temperatura;
				contadorTemperatura++;

				break;
			case 40:
				acumuladorTemperatura=acumuladorTemperatura+temperatura;
				contadorTemperatura++;

				break;
			case 41:
				acumuladorTemperatura=acumuladorTemperatura+temperatura;
				contadorTemperatura++;

				break;
			case 42:
				acumuladorTemperatura=acumuladorTemperatura+temperatura;
				contadorTemperatura++;

				break;
		}
		
		continuar=prompt("quiere continuar ? si o no ");

	}while(continuar=="si");

	//a) El nombre de la persona con mas temperatura

	if(flagTemperatura==0 || temperatura> personaMayorTemperatura)
	{	
		acumuladorTemperatura=temperatura;
		personaMayorTemperatura=acumuladorTemperatura;
		nombrePersonaMayorTemp=nombreYApellido;
		flagTemperatura=1;
	}

	//b) Cuantos mayores de edad estan viudos
	if(edad>17 && estadoCivil=="viudo")
	{	
		contadorViudos++;
	}
	
	//c) La cantidad de hombres que hay solteros o viudos.
	if(sexo=="m"&&(estadoCivil=="soltero"||estadoCivil=="viudo"))
	{
		contadorHombresSolterosOviudos++;
	}

	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	if(edad>60 && temperatura>38)
	{	
		contadorMayoresDeSesenta++;
	}
	console.log(contadorMayoresDeSesenta);
	
	//e) El promedio de edad entre los hombres solteros
	if(sexo=="m" && estadoCivil=="soltero")
	{
		contadorHombresSolteros++;
	}
	if(contadorHombresSolteros>0)
	{
		promedioEdadHombresSolteros=acumuladorEdadHombreSoltero/ contadorHombresSolteros;
	}
	
	console.log(promedioEdadHombresSolteros);*/


	/*var nombreYapellido;
	var edad;
	var sexo;
	var temperatura;
	var estadoCivil;
	var banderaSalir;
	var mensaje;
	var quiereIngresarDatos;
	var temperatura;
	var mayoresEdadViudos;
	var mayorTemperatura=0;
	var personaMayorTemperatura;
	var contadorMayoresEdadViudos=0;
	var hombresSolterosOviudos=0;
	var cantidadPersonasTerceraEdadConTemperatura=0;
	var promedioHombresSolteros=0;
	var contadorCantidadHomberesSolteros=0
	var promedio=0;

	quiereIngresarDatos=true;
	banderaSalir=true;
	
	while(quiereIngresarDatos=true)
	{	
		banderaSalir=true;
		do
		{
			nombreYapellido=prompt("Ingrese su nombre y apellido");
			if(nombreYapellido!="" && nombreYapellido!=null)banderaSalir=false;
		}while(banderaSalir);

		banderaSalir=true;
		do
		{
			edad=prompt("Ingrese su edad");
			edad=parseInt(edad);
			if(edad>8 && edad<101)banderaSalir=false;
		}while(banderaSalir);

		banderaSalir=true;
		do
		{
			sexo=prompt("Ingrese su sexo");
			if(sexo== "m" )banderaSalir=false;
			if(sexo== "f")banderaSalir=false;
		}while(banderaSalir);

		banderaSalir=true;
		do
		{
			temperatura=prompt("Ingrese su temperatura");
			temperatura=parseInt(temperatura);
			if(temperatura>34 && temperatura<101)banderaSalir=false;
		}while(banderaSalir);

		banderaSalir=true;
		do
		{
			estadoCivil=prompt("Ingrese su estado civil: Casado, Divorsiado, Viudo");
			if(estadoCivil=="casado" )banderaSalir=false;
			if(estadoCivil == "divorsiado")banderaSalir=false;
			if(estadoCivil== "viudo")banderaSalir=false;
		}while(banderaSalir);

		//a) El nombre de la persona con mas temperatura.
		if(temperatura> mayorTemperatura )
		{
			personaMayorTemperatura = nombreYapellido;
			temperatura = mayorTemperatura;
		}
		
		//b) Cuantos mayores de edad estan viudos
		if( edad >17 && estadoCivil =="viudo")
		{
			contadorMayoresEdadViudos++;
		}

		//c) La cantidad de hombres que hay solteros o viudos.
		if(sexo=="m" && (estadoCivil == "soltero" || estadoCivil == "viudo") )
		{
			hombresSolterosOviudos++;
		}

		//d) cuantas personas de la tercera edad( mas de 60 años)tienen mas de 38 de temperatura
		if(edad > 60 && temperatura > 38)
		{
			cantidadPersonasTerceraEdadConTemperatura++;
		}

		//e) El promedio de edad entre los hombres solteros.
		if(sexo == "m" && estadoCivil == "soltero")
		{

			contadorCantidadHomberesSolteros++;
		}

		if(contadorCantidadHomberesSolteros > 0)
		{
			promedio= contadorCantidadHomberesSolteros/promedioHombresSolteros;	
		}
		mensaje=" Promedio cantidad Hombres Solteros:	"	+	promedio	+ 
		" Cantidad personas mayores de edad que estan viudos:	"	+	mayoresEdadViudos	+
		" Cantidad de hombres solteros o viudos:	"	+	hombresSolterosOviudos	+ 
		" El nombre de la persona con mas temperatura:	"	+	personaMayorTemperatura	+
		" Personas tercera edad con mas de 38 grados de temperatura:	"	+	cantidadPersonasTerceraEdadConTemperatura;
		alert(mensaje);
	}*/
	
}
