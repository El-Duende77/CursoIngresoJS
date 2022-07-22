
function mostrar()
{	
	//Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
	//de cada una debo obtener los siguientes datos:
	//el tipo (validar "barbijo" , "jabón" o "alcohol") ,
	//el precio (validar entre 100 y 300),
	//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
	//la Marca y el fabricante.
	//Se debe Informar al usuario lo siguiente:
	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	//b) Del tipo con mas unidades, el promedio por compra
	//c) Cuántas unidades de jabones hay en total

	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var i;
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var flagAlcohol;
	var precioAlcoholBarato;
	var cantidadAlcoholBarato;
	var fabricanteAlcoholBarato;
	var tipoConMasUnidades;
	var promedioCompra;
	var mensajeAlcohol=" A - no hizo ninguna compra";
	var mensajeBarbijo;
	var mensajeJabon;

	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorJabon=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	flagAlcohol=0;
	i=0;
	//crear una iteracion que repita 5 veces
	for(i=0;i<5;i++)
	{	
		//validar datos

		tipo=prompt("Ingrese tipo de producto : ");
		while(!(tipo=="barbijo" || tipo=="jabon" || tipo=="alcohol"))
		{
			tipo=prompt("error. ingrese tipo : ");
		}

		precio=prompt("Ingrese un precio : ");
		precio=parseInt(precio);
		while(precio<100||precio>300||isNaN(precio))
		{
			precio=prompt("error. ingrese precio : ");
			precio=parseInt(precio);
		}

		cantidad=prompt("Ingrese cantidad : ");
		cantidad=parseInt(cantidad);
		while(!(cantidad>0||cantidad<1001))
		{
			cantidad=prompt("error. ingrese cantidad : ");
			cantidad=parseInt(cantidad);
		}
		//tomar datos por prompt
		marca=prompt("Ingrese una marca : ");
		fabricante=prompt("Ingrese un fabricante : ");

		//con un switch se utilizan acumuladores y contadores para luego usar los datos

		switch(tipo)
		{
			case "alcohol":
				acumuladorAlcohol=acumuladorAlcohol+cantidad;
				contadorAlcohol++;
				if(flagAlcohol==0||precioAlcoholBarato>precio)
				{
					precioAlcoholBarato=precio;
					cantidadAlcoholBarato=cantidad;
					fabricanteAlcoholBarato=fabricante;
					flagAlcohol=1;
				}
				break;
			case "barbijo":
				acumuladorBarbijo=acumuladorBarbijo+cantidad;
				contadorBarbijo++;
				break;
			case "jabon":
				acumuladorJabon=acumuladorJabon+cantidad;
				contadorJabon++;
				break;
		}
	}
	if(acumuladorAlcohol>acumuladorBarbijo&&acumuladorAlcohol>acumuladorJabon)
	{
		tipoConMasUnidades="alcohol";
		promedioCompra=acumuladorAlcohol/contadorAlcohol;
	}
	else if(acumuladorBarbijo>acumuladorJabon&&acumuladorBarbijo>acumuladorAlcohol)
	{
		tipoConMasUnidades="barbijo";
		promedioCompra=acumuladorBarbijo/contadorBarbijo;
	}
	else
	{
		tipoConMasUnidades="jabon";
		promedioCompra=acumuladorJabon/contadorJabon;
	}
	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	//b) Del tipo con mas unidades, el promedio por compra
	//c) Cuántas unidades de jabones hay en total
	if(flagAlcohol==1)
	{
		mensajeAlcohol=" A - alcohol barato " + precioAlcoholBarato + 
		"\nCantidad alcohol barato : " + cantidadAlcoholBarato +
		"\nFabricante alcohol : " + fabricanteAlcoholBarato;
		console.log(mensajeAlcohol);
	}

	mensajeBarbijo=" B - tipo con mas unidades " + tipoConMasUnidades + 
	"\nPromedio de compras " + promedioCompra;

	mensajeJabon=" C - cantidad de jabon " + acumuladorJabon;

	alert(mensajeAlcohol + "\n" + mensajeBarbijo + "\n" + mensajeJabon);
	
	
	/*var acumuladorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var cantidad;
	var cantidadAlcoholBarato;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var fabricante;
	var fabricanteAlcoholBarato
	var flagAlcohol;
	var i;
	var marca;
	var mayorTipo;
	var mensajeAlcohol;
	var mensajeBarbijo;
	var mensajeJabon;
	var precio;
	var precioAlcoholBarato;
	var promedioCompra;
	var tipo;

	contadorJabon=0;
	acumuladorJabon=0;
	contadorBarbijo=0;
	acumuladorBarbijo=0;
	cantidadAlcoholBarato=0;
	acumuladorAlcohol=0;
	contadorAlcohol=0;
	flagAlcohol=0;

	//se crea un bucle con la cantidad de repeticiones 
	//iniciando la variable de control (i=0), repeticiones de var de control (i<5), incrementacion de var de control (i++)
	for( i=0 ; i<5 ; i++ ){
		//se valida los datos solicitados
		tipo=prompt("Ingrese tipo de producto ");
		while(tipo != "jabon" && tipo != "alcohol" && tipo != "barbijo"){
			tipo=prompt("ERROR. Ingrese un tipo de producto : ");
		}

		precio=prompt("Ingrese precio ");
		precio=parseInt(precio);
		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio=prompt("ERROR. Ingrese un precio : ");
			precio=parseInt(precio);
		}

		cantidad=prompt("Ingrese una cantidad : ");
		cantidad=parseInt(cantidad);
		while(!(cantidad>0 && cantidad <1001)){
			cantidad=prompt("ERROR. Ingrese cantidad ");
			cantidad=parseInt(cantidad);
		}
		
		//se pide datos de marca y fabricante
		marca=prompt("Ingrese marca ");
		fabricante=prompt("Ingrese fabricante ");

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		//cantidad y contador
		switch(tipo){
			case "alcohol":
				acumuladorAlcohol+=cantidad;
				contadorAlcohol++;
			//todo el resto va dentro de un if, xq debo averiguar precio minimo
				if(flagAlcohol==0 || precioAlcoholBarato> precio){
					fabricanteAlcoholBarato=fabricante;
					cantidadAlcoholBarato=cantidad;
					precioAlcoholBarato=precio;
					flagAlcohol=1;
				}
				break;
			case "barbijo":
				acumuladorBarbijo+=cantidad;
				contadorBarbijo++;
				break;
			case "jabon":
				acumuladorJabon+=cantidad;
				contadorJabon++;
				break;
		}
	}
	//b) Del tipo con mas unidades, el promedio por compra
	if(acumuladorAlcohol>acumuladorBarbijo&&acumuladorAlcohol>acumuladorJabon){
		mayorTipo="Alcohol";
		promedioCompra=acumuladorAlcohol/contadorAlcohol;
		
	}
	else if(acumuladorBarbijo>acumuladorAlcohol&&acumuladorBarbijo>acumuladorJabon){
		mayorTipo="barbijo";
		promedioCompra=acumuladorBarbijo/contadorBarbijo;
	}
	else{
		mayorTipo="jabon";
		promedioCompra=acumuladorJabon/contadorJabon;
	}

	//armo la respuesta 
	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	if(flagAlcohol==1){
		mensajeAlcohol=" A - Alcohol barato : " + precioAlcoholBarato + 
		"\nCantidad de unidades de alcohol barato : " + cantidadAlcoholBarato +
		"\nFabricante de alcohol barato : " + fabricanteAlcoholBarato;
	}

	//b) Del tipo con mas unidades, el promedio por compra
	mensajeBarbijo=" B - tipo con mas unidades : " + mayorTipo + 
	"\nEl promedio de compra es : " + promedioCompra;

	 //c) Cuántas unidades de jabones hay en total
	 mensajeJabon="Cantidad de unidades de jabon : " + acumuladorJabon;

	 alert(mensajeAlcohol + "\n" + mensajeBarbijo + "\n" + mensajeJabon );*/


	/*var contadorAlcohol;
	var contadorJabon;
	var contadorBarbijo;
	var cantidad;
	var contador;
	var cantidadAlcoholBarato;
	var fabricante;
	var flagAlcohol;
	var fabricanteAlcoholBarato;
	var i;
	var marca;
	var mayorTipo;
	var mensajeAlcohol= " A - No se hizo ninguna compra ";
	var mensajeBarbijo;
	var mensajeJabon;
	var precio;
	var precioAlcoholBarato;
	var promedioCompra;
	var sumadorAlcohol;
	var sumadorJabon;
	var sumadorBarbijo;
	var tipo;
	

	contador=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	cantidadAlcoholBarato=0;
	flagAlcohol=0;
	precioAlcoholBarato=0;
	pregunta="si";
	sumadorAlcohol=0;
	sumadorBarbijo=0;
	sumadorJabon=0;


	for( i=0 ; i=5 ; i++ )
	{	//validacion de tipo, precio, cantidad
		tipo=prompt("Ingrese tipo de producto ");
		while( tipo != 'jabon' && tipo != 'barbijo' && tipo != 'alcohol' )
		{
			tipo=prompt("ERROR. Ingrese tipo de producto ");
		}
		precio=prompt("Ingrese precio ");
		precio=parseInt(precio);
		while(precio <100 || precio >300 || isNaN(precio))
		{
			precio=prompt("ERROR. Ingrese un precio ");
			precio=parseInt(precio);
		}
		cantidad=prompt("Ingrese cantidad ");
		cantidad=parseInt(cantidad);
		while(!(cantidad>0 && cantidad <1000))
		{
			cantidad=prompt("Error. Ingrese cantidad");
			cantidad=parseInt(cantidad);
		}
		marca=prompt("Ingrese una marca ");

		fabricante=prompt("Ingrese fabricante ");

		//dentro del switch ponemos los contadores, acumuladores
		switch(tipo)
		{	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			case "alcohol":
				sumadorAlcohol+=cantidad;
				contadorAlcohol++;
				if(flagAlcohol==0 || precioAlcoholBarato>precio)
				{
					precioAlcoholBarato=precio;
					cantidadAlcoholBarato=cantidad;
					fabricanteAlcoholBarato=fabricante;
					flagAlcohol=1;
				}
				break;
			case "barbijo":
				sumadorBarbijo+=cantidad;
				contadorBarbijo++;
				break;
			//c) Cuántas unidades de jabones hay en total
			case "jabon":
				sumadorJabon+=cantidad;
				contadorJabon++;
				break;
		}
		
	}
	//se usa if xq debo averiguar si uno es mayor que otro
	//b) Del tipo con mas unidades, el promedio por compra
	if(sumadorAlcohol>sumadorJabon&&sumadorAlcohol>sumadorBarbijo)
	{
		mayorTipo="Alcohol";
		promedioCompra=sumadorAlcohol/contadorAlcohol;
	}
	else if(sumadorBarbijo>sumadorJabon&&sumadorBarbijo>=sumadorAlcohol)
	{
		mayorTipo="Barbijo";
		promedioCompra=sumadorBarbijo/contadorBarbijo;
	}
	else
	{
		mayorTipo="jabon";
		promedioCompra=sumadorJabon/contadorJabon;
	}
	//aca seteo el flag=1 para armar la respuesta A 
	if(flagAlcohol==1)
	{
		mensajeAlcohol=" A - El precio del alcohol mas barato es : " + precioAlcoholBarato +
		"\nCantidad de unidades de alcohol barato : " + cantidadAlcoholBarato + 
		"\nFabricante de alcohol barato : " + fabricanteAlcoholBarato;
	}

	mensajeBarbijo=" B - tipo con mas unidades : " + mayorTipo + 
	"\nPromedio de compras : " + promedioCompra;

	mensajeJabon=" C - Unidades de jabones en total : " + sumadorJabon;

	alert(mensajeAlcohol + "\n" + mensajeBarbijo + "\n" + mensajeJabon );*/

	/*declaro variables
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let promedioCompra;
	let mayorTipo;
	let acumuladorBarbijo=0;
	let acumuladorJabon=0;
	let acumuladorAlcohol=0;
	let contBarbijo=0;
	let contAlcohol=0;
	let contJabon=0;
	let flagAlcohol=0;
	let mensajeAlcohol="A - No se compraron alcoholes";
	let mensajeBarbijo;
	let mensajeJabon;

	//debo crear un bucle que repita 5 veces
	//(tipo, precio, cantidad, marca, fabricante)valido todo segun corresponda
	//(utilizo un for porque conozco de ante mano la cantidad de repeticiones)

	for(let i=0; i<5 ; i++){
		tipo=prompt('Ingrese un tipo "barbijo" , "jabon" o "alcohol"');
		while(tipo!="barbijo" && tipo!="jabon" && tipo!="alcohol" ){
			tipo=prompt('Tipo invalido. Ingrese un tipo "barbijo" , "jabón" o "alcohol"');
		}
		precio=parseFloat(prompt("Ingrese un precio (100-300): "));
		while(precio <100 || precio>300 || isNaN(precio)){
			precio=parseFloat(prompt("Error. Ingrese un precio (100-300): "));
		}
		cantidad=parseInt(prompt("Ingrese cantidad maximo 1000 "));
		while(!(cantidad>0 && cantidad<=1000)){
			cantidad=parseInt(prompt("Error. Ingrese cantidad maximo 1000 "));
		}
		marca=prompt("Ingrese una marca ");
		fabricante=prompt("Ingrese fabricante");
		//utilizo switch para acumular sumar los tipos de productos
		switch(tipo){
			//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			case "alcohol":
				acumuladorAlcohol+=cantidad;
				contAlcohol++;
				if(flagAlcohol==0 || precioAlcoholBarato>precio){
					precioAlcoholBarato=precio;
					cantidadAlcoholBarato=cantidad;
					fabricanteAlcoholBarato=fabricante;
					flagAlcohol=1;
				}
				break;
			case "barbijo":
				acumuladorBarbijo+=cantidad;
				contBarbijo++;
				break;
			case "jabon":
				acumuladorJabon+=cantidad;
				contJabon++;
				break;
		}
	}
	//no se usa un switch xq hay q averiguar si uno es mayor que oto y no un igualdad
	if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon){
		//acá entro cuando acumuladorAlcohol sea mayor
		mayorTipo="Alcohol";
		promedioCompra=acumuladorAlcohol/contAlcohol;
	}
	else if(acumuladorBarbijo>acumuladorJabon && acumuladorBarbijo>=acumuladorAlcohol ){
		//acá entro cuanto acumuladorBarbijo sea mayor
		mayorTipo="Barbijo";
		promedioCompra=acumuladorBarbijo/contBarbijo;
	}
	else{	
		//acá entro por descarte cuando acumuladorJabon sea mayor
		mayorTipo="Jabon";
		promedioCompra=acumuladorJabon/contJabon;
	}
	if(flagAlcohol==1){
		mensajeAlcohol="A- Fabricante alcohol barato: " + fabricanteAlcoholBarato +
		"\nCantidad: " + cantidadAlcoholBarato + 
		"\nPrecios: " + precioAlcoholBarato;
	}
	
	mensajeBarbijo="B- Tipo con mas unidades: " + mayorTipo + 
	"\nPromedio " + promedioCompra;
	mensajeJabon="C- Unidades de jabon: " + acumuladorJabon;
	alert(mensajeAlcohol + "\n" + mensajeBarbijo + "\n" + mensajeJabon );

	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	//b) Del tipo con mas unidades, el promedio por compra
	//c) Cuántas unidades de jabones hay en total*/
}
