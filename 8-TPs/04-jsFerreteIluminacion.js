/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

 function CalcularPrecio () 
{   
    //declaro variables
    var cantidadLamparas;
    var descuento;
    var marca;
    var precio;
    var precioBruto;
    var precioConDescuento;
    var porcentaje;
    var ingresosBrutos;
    var mensaje;
    
    //inicio el valor de la variable
    precio = 35;
    
    //asigno valores y parseo
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marca = document.getElementById("Marca").value;


    switch(marca)
    {   //evaluo los casos desde cantidad 5 a 1 y por default 6 o mas cantidad
        case "ArgentinaLuz" :
            switch(cantidadLamparas)
            {   //
                case 5 :
                    porcentaje = 40;
                break;
                case 4 :
                    porcentaje = 25;
                break;
                case 3 :
                    porcentaje = 15;
                break;
                case 2 :
                case 1 :
                    porcentaje = 0;
                break;
                default :   //si pongo cant.mas de 6 abajo en default no hace el calculo
                    porcentaje =50;
                break;
            }
        break;
        //evaluo los casos desde cantidad 5 a 1 y por default 6 o mas cantidad
        case "FelipeLamparas" :
            switch(cantidadLamparas)
            {   //eva
                case 5 :
                    porcentaje = 30;
                break;
                case 4 :
                    porcentaje = 25;
                break;
                case 3 :
                    porcentaje = 10;
                break;
                case 2 :
                case 1 :
                    porcentaje = 0;
                break;
                default :   //si pongo cant.mas de 6 abajo en default no hace el calculo
                    porcentaje = 50;
                break;
            }
        break;
        //evaluo los casos desde cantidad 5 a 1 y por default 6 o mas cantidad
        case "JeLuz" :
        case "HazIluminacion" :
        case "Osram" :
            switch(cantidadLamparas)
            {   
                case 5 :
                    porcentaje = 30;
                break;
                case 4 :
                    porcentaje = 20;
                break;
                case 3 :
                    porcentaje = 5;
                break;
                case 2 :
                case 1 :
                    porcentaje = 0;
                break;
                default :
                    porcentaje = 50;
                break;
            }
        break;        
    }
    //desarrollo las operaciones matematicas
    precioBruto = precio * cantidadLamparas;
    descuento = precioBruto * porcentaje / 100;
    precioConDescuento = precioBruto - descuento;

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    
    //evalua una condicion si el precio es mayor a 120 le suma un 10%
    if (precioConDescuento > 120)
    {
        ingresosBrutos = precioConDescuento * 10 / 100;
        mensaje = " Pago de ingresos bruto $ " + ingresosBrutos;
        alert(mensaje);
    }

}

    /*
    switch(cantidadLamparas)
    {
        case 5 : //tomo case de cantidad y marcas
            switch(marca)
            {
                case "ArgentinaLuz" :
                    porcentaje = 40;
                break;
                default :
                    porcentaje = 30;
                break;
            }
        break;
        case 4 :
            switch(marca)
            {
                case "ArgentinaLuz" :
                case "FelipeLamparas" :
                    porcentaje = 25;
                break;
                default :
                    porcentaje = 20;
                break;
            }
        break;
        case 3 :
            switch(marca)
            {
                case "ArgentinaLuz" :
                    porcentaje = 15;
                break;
                case "FelipeLamparas" :
                    porcentaje = 10;
                break;
                default :
                    porcentaje = 5;
                break;
            }
        break;
        case 2 :
            switch(marca)
            {
                default :
                    porcentaje = 0;
                break;
            }
        break;
        case 1 :
            switch(marca)
            {
                default :
                    porcentaje = 0;
                break;
            }
        break;
        default :
            switch(marca)
            {
                default :
                    porcentaje = 50;
                break;
            }
        break;
    }
    
    precioBruto = precio * cantidadLamparas;
    descuento = precioBruto * porcentaje / 100;
    precioConDescuento = precioBruto - descuento;

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
    
    if (precioConDescuento > 120)
    {
        ingresosBrutos = precioConDescuento * 10 / 100;
    }

    mensaje = " Pago de ingresos bruto " + ingresosBrutos;
    alert(mensaje);*/
    /*
    //declaro variables 
    
    var cantidadLamparas;
    var descuento;
    var marca;
    var ingresosBrutos;
    var precio;
    var precioConDescuento;
    var precioBruto;
    var porcentajeDescuento;
    var porcentajeIngresosBrutos;
    var pagoIngresosBrutos;


    precio = 35;
    porcentajeDescuento = 0;
    porcentajeIngresosBrutos = 10;

    //tomo el dato y asigno valores a las variables
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marca = document.getElementById("Marca").value;

    //A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.

    if ( cantidadLamparas >5 )
    {
        porcentajeDescuento = 50;        
    }
    else
    {   
        
        //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y 
        //si es de otra marca el descuento es del 30%.

        if ( cantidadLamparas == 5 )
        {

            if ( marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 40;
            }
            else
            {
                porcentajeDescuento = 30;
            }
        }
        
        //C. Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y 
        //si es de otra marca el descuento es del 20%.

        if ( cantidadLamparas == 4 ) 
        {   
            if ( marca == "ArgentinaLuz" ) 
            {
                porcentajeDescuento = 25;

                if ( marca == "FelipeLamparas")
                {
                    porcentajeDescuento = 25;
                }
                else
                {
                    porcentajeDescuento = 20;
                }
            }  
            
        }

        //D. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
        //si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

        if ( cantidadLamparas == 3 ) 
        {
            if ( marca == "ArgentinaLuz")
            {
                porcentajeDescuento = 15;

            }
            else
            {
                if ( marca == "FelipeLamparas")
                {
                    porcentajeDescuento = 10;
                }
                else
                {
                    porcentajeDescuento = 5;
                }
            }
        }
    }
    //E. Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
    //en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

    
    precioBruto = precio * cantidadLamparas;

    descuento = precioBruto * porcentajeDescuento / 100;

    precioConDescuento = precioBruto - descuento;

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    if ( precioConDescuento > 120 )
    {
        pagoIngresosBrutos = porcentajeIngresosBrutos * precioConDescuento /100;
        //ingresosBrutos = precioConDescuento + pagoIngresosBrutos; "esto está de mas, no lo pide el enunciado"
    }

    alert(" Ud. pago  $ "  + pagoIngresosBrutos + " de ingresos brutos ");
    */
