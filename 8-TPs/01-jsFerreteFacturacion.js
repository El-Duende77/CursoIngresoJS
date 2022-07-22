/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   //declaro variables
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var resultado;
    var respuesta;

    //asigno valores
    numeroUno=document.getElementById("txtIdPrecioUno").value;
    numeroUno=parseInt(numeroUno);

    numeroDos=document.getElementById("txtIdPrecioDos").value;
    numeroDos=parseInt(numeroDos);

    numeroTres=document.getElementById("txtIdPrecioTres").value;
    numeroTres=parseInt(numeroTres);

    //realizo operaciones
    resultado=numeroUno+numeroDos+numeroTres;

    //respuesta
    respuesta = "El resultado es : " + resultado;

    alert(respuesta);
    
}

function Promedio () 
{   //declaro variables
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var promedio;
    var respuesta;

    //asigno valores
    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroUno = parseFloat(numeroUno);

    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroDos = parseFloat(numeroDos);

    numeroTres = document.getElementById("txtIdPrecioTres").value;
    numeroTres = parseFloat(numeroTres);

    //realizo operaciones
    promedio = (numeroUno+numeroDos+numeroTres)/3;

    respuesta = "El resultado es : " + promedio;

    alert(respuesta);
    
}
function PrecioFinal () 
{   //declaro variables
    var numeroUno;
    var numeroDos;
    var numeroTres;
    var porcentaje;
    var precioFinal;
    var respuesta;
    var suma;
    
    //asigno valores
    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroUno = parseFloat(numeroUno);

    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroDos = parseFloat(numeroDos);

    numeroTres = document.getElementById("txtIdPrecioDos").value;
    numeroTres = parseFloat(numeroTres);

    //realizo las operaciones
    suma = numeroUno + numeroDos + numeroTres;
    
    porcentaje = (suma * 21) /100;

    precioFinal = suma + porcentaje;

    //respuesta
    respuesta = "El precio final es : " + precioFinal;

    alert(respuesta);

}