/*Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.*/

function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var descuento;
    var precioFinal;
    

    precio = prompt("Ingrese un precio ");
    precio = parseFloat(precio);

    porcentajeDescuento = prompt("Ingrese un porcentaje de descuento ");
    porcentajeDescuento = parseFloat(porcentajeDescuento);

    descuento = (precio * porcentajeDescuento)/100;

    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;

}
