function mostrar()
{   var precio;
    var descuento;
    var precioConDescuento;
    var porcantaje;

    precio=prompt("Ingrese el precio");
    precio=parseInt(precio);
    porcantaje=prompt("Ingrese el descuento");
    porcantaje=parseInt(porcantaje);
    descuento=(precio*porcantaje)/100;
    precioConDescuento=precio-descuento;
    document.getElementById("elPrecioFinal").value=precioConDescuento;


}
