function mostrar()
{   var destino;
    var mensaje;
    var cantidadDeDias;
    var precioPorDia;
    var descuentoAmerica;
    var descuentoAfrica;
    var descuentoEuropa;
    var recargoOtroContinente;
    var descuentoDebitoAmerica;
    var descuentoEfectivoAfrica;
    var descuentoMpAfrica;
    var descuentoEfectivoEuropa;
    var descuentoMpEuropa;
    var precioEstadia;
    var efectivo;
    var debito;
    var Mp;
    var precioFinal;
    var precioFinalEstadia;
    var estadiaFinal;

    /*descuento=descuentoAmerica;
    descuento=descuentoAfrica;
    descuento=descuentoEuropa*/
    
    
    
    precioPorDia=100;
    destino=document.getElementById("Marca").value;
    cantidadDeDias=prompt(" Ingrese la cantidad de dias para la estadía ");
    cantidadDeDias=parseInt(cantidadDeDias);
    
    precioEstadia=precioPorDia*cantidadDeDias;

    switch(destino)
    {
        case "América":
            switch(cantidadDeDias)
            {
                case 1:
                    descuentoAmerica=50;
                    descuentoDebitoAmerica=10;
                    break;
                default:
                    descuentoAmerica=50;
                    descuentoDebitoAmerica=10;
                    break;
            }
            break;
        case "África":
            switch(cantidadDeDias)
            {
                case 1:
                    descuentoAfrica=60;
                    descuentoEfectivoAfrica=15;
                    descuentoMpAfrica=15;
                    break;
                default:
                    descuentoAfrica=60;
                    descuentoEfectivoAfrica=15;
                    descuentoMpAfrica=15;
                    break;
            }
            break;
        case "Europa":
            switch(cantidadDeDias)
            {
                case 1:
                    descuentoEuropa=20;
                    descuentoMpEuropa=10;
                    descuentoEfectivoEuropa=15;
                    break;
                default:
                    descuentoEuropa=20;
                    descuentoEfectivoEuropa=15;
                    descuentoMpEuropa=15;
                    break;
            }
            break;
        case "Otro continente":
            switch(cantidadDeDias)
            {
                case 1:
                    recargoOtroContinente=20;
                    break;
                default:
                    recargoOtroContinente=20;
                    break;
            }
            break;
    }
    descuento=(precioEstadia*descuentoAmerica)/100;
    precioFinal=precioEstadia-descuento;
    estadiaFinal=(precioFinal*descuentoDebitoAmerica)/100;
    precioFinalEstadia= precioFinal-estadiaFinal;
    alert("El precio final de la estadia es $ " + precioFinalEstadia);
}
