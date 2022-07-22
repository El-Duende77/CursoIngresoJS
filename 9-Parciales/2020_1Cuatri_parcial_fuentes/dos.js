function mostrar()
{   
    //Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
    //Tipo validad("arena";"cal";"cemento")
    //Cantidad de bolsas,
    //Precio por bolsa (más de cero ),
    
    //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
    //a) El importe total a pagar , bruto sin descuento y...
    //b) el importe total a pagar con descuento(solo si corresponde)
    //d) Informar el tipo con mas cantidad de bolsas.
    //f) El tipo mas caro

    //declarar variables

    /*var acumuladorArena;
    var acumuladorBolsas;
    var acumuladorCal;
    var acumuladorCemento;
    var banderaDelPrimerProducto;
    var cantidadDeBolsas;
    var descuento;
    var precio;
    var pregunta;
    var porcentaje;
    var precioBrutoProducto;
    var precioBrutoConDescuento;
    var precioBrutoTotal;
    var tipo;
    var tipoConMasUnidades;
    var tipoMasCaro;
    var tipoMasCaroPrecio;

    acumuladorArena=0;
    acumuladorCal=0;
    acumuladorCemento=0;
    acumuladorBolsas=0;
    banderaDelPrimerProducto="es el primero";
    porcentaje=0;
    pregunta="si";
    precioBrutoTotal=0;

    //Realizar el algoritmo que permita ingresar los datos de una 
    //compra productos de la construccion, hasta que el cliente quiera:

    while(pregunta=="si")
    {   
        //validar precio, cantidad, tipo

        tipo=prompt("Ingrese tipo de producto : ");
        while(!(tipo=="arena" || tipo=="cal" || tipo=="cemento"))
        {
            tipo=prompt("ERROR. Ingrese un tipo : ");

        }

        cantidadDeBolsas=prompt("ingrese cantidad de bolsas : ");
        cantidadDeBolsas=parseInt(cantidadDeBolsas);
        while(cantidadDeBolsas<1)
        {
            cantidadDeBolsas=prompt("ERROR. Ingrese cantidad : ");
            cantidadDeBolsas=parseInt(cantidadDeBolsas);

        }

        precio=prompt("Ingrese precio : ");
        precio=parseInt(precio);
        while(precio<=0)
        {
            precio=prompt("ERROR. Ingrese un precio : ");
            precio=parseInt(precio);

        }

        //acumuladores generales para poder tomar los precios de distintos productos

        acumuladorBolsas=acumuladorBolsas+cantidadDeBolsas;
        precioBrutoProducto=precio*cantidadDeBolsas;
        precioBrutoTotal=precioBrutoTotal+precioBrutoProducto;

        //bandera para saber cual es el mas caro

        if(banderaDelPrimerProducto=="es el primero")
        {
            banderaDelPrimerProducto="ya paso";
            tipoMasCaro=tipo;
            tipoMasCaroPrecio=precio;
        }
        else
        {
            if(precio>tipoMasCaroPrecio)
            {
                tipoMasCaro=tipo;
                tipoMasCaroPrecio=precio;
            }
        }

        //acumula las cantidades para luego ser evaluadas

        switch(tipo)
        {
            case "arena":
                acumuladorArena=acumuladorArena+cantidadDeBolsas;
                break;
            case "cal":
                acumuladorCal=acumuladorCal+cantidadDeBolsas;
                break;
            case "cemento":
                acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
                break;
        }

        pregunta=prompt("Quiere continuar ? si o no ");

    }

    if(acumuladorArena>acumuladorCal && acumuladorArena>acumuladorCemento)
    {
        tipoConMasUnidades="arena";
    }
    else
    {
        if(acumuladorCal>acumuladorArena && acumuladorCal>acumuladorCemento)
        {
            tipoConMasUnidades="cal";
        }
        else{
            tipoConMasUnidades="cemento";
        }
    }

    //a traves de los acumuladores evalua los porcentajes de descuento

    if(acumuladorBolsas>30)
    {
        porcentaje=25;
    }
    else
    {
        if(acumuladorBolsas>10)
        {
            porcentaje=15;
        }
        else
        {
            porcentaje=0;
        }
    }
    
    if(porcentaje!=0)
    {
        descuento=precioBrutoTotal*porcentaje/100;
        precioBrutoConDescuento=precioBrutoTotal-descuento;
    }

    console.log("el bruto sin descuento : " + precioBrutoTotal);
    console.log("el tipo mas comprado : " + tipoConMasUnidades);
    console.log("el tipo mas caro : " + tipoMasCaro);*/




    /*var acumuladorCemento;
    var acumuladorArena;
    var acumuladorCal;
    var cantidadDeBolsas;
    var contadorArena;
    var contadorCal;
    var contadorCemento;
    var descuento;
    var flagArena;
    var flagCal;
    var flagCemento;
    var mensaje;
    var precioArenaCaro;
    var precioBruto;
    var precioBrutoArena;
    var precioBrutoCal;
    var precioBrutoCemento;
    var precioBrutoTotal;
    var precioCalCaro;
    var precioCementoCaro;
    var precioConDescuento;
    var precioPorBolsa;
    var porcentaje;
    var precioPorBolsa;
    var pregunta;
    var tipo;
    var tipoMayorCantidad;
    var tipoMasCaro;
    

    acumuladorBolsas=0;
    acumuladorCal=0;
    acumuladorCemento=0;
    acumuladorArena=0;
    contadorArena=0;
    contadorCal=0;
    contadorCemento=0;
    descuento=0;
    flagArena=0;
    flagCal=0;
    flagCemento=0;
    pregunta="si";
    porcentaje=0;
    precioBrutoArena=0;
    precioBrutoCal=0;
    precioBrutoCemento=0;
    precioBrutoTotal=0;
    
    
    //crear un bucle "hasta que el usurario quiera del tipo while"
    do{ 
        //valido tipo
        tipo=prompt("Ingrese tipo : ");
        while(!(tipo=="arena" || tipo=="cal" || tipo=="cemento")){
            tipo=prompt("ERROR. Ingrese un tipo : ");
        }
        //valido cantidad
        cantidadDeBolsas=prompt("Ingrese cantidad de bolsas : ");
        cantidadDeBolsas=parseInt(cantidadDeBolsas);
        while(cantidadDeBolsas<1){
            cantidadDeBolsas=prompt("ERROR. Ingrese cantidad de bolsas : ");
            cantidadDeBolsas=parseInt(cantidadDeBolsas);
        }
        //valido precio
        precioPorBolsa=prompt("Ingrese precio $ : ");
        precioPorBolsa=parseInt(precioPorBolsa);
        while(precioPorBolsa<=0){
            precioPorBolsa=prompt("ERROR. Ingrese precio $ : ");
            precioPorBolsa=parseInt(precioPorBolsa);
        }
        pregunta=prompt("Quiere continuar ? si o no ");

        switch(tipo){
            case "arena":
                acumuladorArena=acumuladorArena+cantidadDeBolsas;
                contadorArena++;
                if(flagArena==0||precioArenaCaro>precioPorBolsa){
                    tipoMayorCantidad=cantidadDeBolsas;
                    precioArenaCaro=precioPorBolsa;
                    precioBrutoArena=precioPorBolsa*cantidadDeBolsas;
                    flagArena=1;
                }
                break;
            case "cal":
                acumuladorCal=acumuladorCal+cantidadDeBolsas;
                contadorCal++;
                if(flagCal==0||precioCalCaro>precioPorBolsa){
                    tipoMayorCantidad=cantidadDeBolsas;
                    precioCalCaro=precioPorBolsa;
                    precioBrutoCal=precioPorBolsa*cantidadDeBolsas;
                    flagCal=1;
                }
                break;
            case "cemento":
                acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
                contadorCemento++;
                if(flagCemento==0||precioCementoCaro>precioPorBolsa){
                    tipoMayorCantidad=cantidadDeBolsas;
                    precioCementoCaro=precioPorBolsa;
                    precioBrutoCemento=precioPorBolsa*cantidadDeBolsas;
                    flagCemento=1;
                }
                break;
        }
    }while(pregunta=="si");
    //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar
    if(cantidadDeBolsas>10){
        porcentaje=15;
        precioBruto=cantidadDeBolsas*precioPorBolsa;
        descuento=precioBruto*porcentaje/100;
        precioConDescuento=precioBruto-descuento;
    }
    //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
    if(cantidadDeBolsas>30){
        porcentaje=25;
        precioBruto=cantidadDeBolsas*precioPorBolsa;
        descuento=precioBruto*porcentaje/100;
        precioConDescuento=precioBruto-descuento;
    }

    if(acumuladorArena>acumuladorCal&&acumuladorArena>acumuladorCemento){
      tipoMayorCantidad="arena";
      tipoMasCaro=tipoMayorCantidad;
    }
    else if(acumuladorCal>acumuladorArena&&acumuladorCal>acumuladorCemento){
      tipoMayorCantidad="cal";
      tipoMasCaro=tipoMayorCantidad;
    }
    else{
      tipoMayorCantidad="cemento";
      tipoMasCaro=tipoMayorCantidad;
    }
    precioBrutoTotal=precioBrutoArena+precioBrutoCal+precioBrutoCemento;
    //a) El importe total a pagar , bruto sin descuento y...
    //b) el importe total a pagar con descuento(solo si corresponde)
    //d) Informar el tipo con mas cantidad de bolsas.
    //f) El tipo mas caro
    if(flagArena==1){
        mensaje= " A - El importe tota a pagar es : $ " + precioBrutoTotal + 
        "\nImporte sin descuento : $ " + precioBruto + 
        "\nB - EL importe total con descuento : $ " + precioConDescuento +
        "\nC - El tipo con más cantidad es : " + tipoMayorCantidad +
        "\nD - Tipo más caro : " + tipoMasCaro;
    }
    
    alert(mensaje);*/

  
  
  /*var tipoDeMaterial;
    var cantidadDeBolsas;
    var precioPorBolsa;
    var precioBruto;
    var contadorTipo;
    var acumuladorTipo;
    var importeTotal;
    var importeConDescuento;
    var banderaSalir;

    banderaSalir=true;
    contadorTipo = 0;
    acumuladorTipo = 0;
    precioBruto;

    banderaSalir=true;
    while(tipoDeMaterial == "Cal" || tipoDeMaterial == "Cemento" || tipoDeMaterial == "Arena")
    {
      tipoDeMaterial = prompt("Ingrese material");
      acumuladorTipo=acumuladorTipo+contadorTipo+1;
    }banderaSalir=false;
    banderaSalir=true;
    while(cantidadDeBolsas !=0)
    {
      cantidadDeBolsas = prompt("Ingrese cantidad de bolsas");
      cantidadDeBolsas=parseInt(cantidadDeBolsas).banderaSalir=false;
      acumuladorTipo=acumuladorTipo+contadorTipo+1;
    }
    banderaSalir=true
    while(precioPorBolsa !=0 )
    {
      precioPorBolsa = prompt("Ingrese precio");
      precioPorBolsa = parseInt(precioPorBolsa).banderaSalir=false;
      acumuladorTipo=acumuladorTipo+contadorTipo+1;
    }
    //a) El importe total a pagar , bruto sin descuento
    if(precioBruto)
    {
      importeTotal=precioBruto*cantidadDeBolsas;
      acumuladorTipo=acumuladorTipo+contadorTipo+1;
    }
    else
    //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    if(cantidadDeBolsas >10 )
    {
      importeConDescuento=(cantidadDeBolsas*precioPorBolsa)*15/100;
      acumuladorTipo=acumuladorTipo+contadorTipo+1;
    }
    //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
    else
    {
      if(cantidadDeBolsas>30);
        {
          importeConDescuento=(cantidadDeBolsas*precioPorBolsa)*25/100;
          acumuladorTipo=acumuladorTipo+importeConDescuento+1;
        } 
    }
  alert(importeConDescuento);*/
}
