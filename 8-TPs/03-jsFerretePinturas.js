/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   //declaro variables
    var temperatura;
    var fahrenheit;
    var centigrados;
    var resultado;
    var mensaje;

    //inicializo variables
    fahrenheit = 32;
    centigrados = 0;

    //asigno valores
    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);

    //realizo calculos
    resultado = (temperatura-32)*5/9;

    //respuesta
    mensaje = "La temperatura es de : " + resultado + " Cº " + "\n"   + " 32º farenheit son 0º centigrados "

    alert(mensaje);
}

function CentigradosFahrenheit () 
{   //declaro variables
    var temperatura;
    var centigrados;
    var fahrenheit;
    var resultado;
    var mensaje;

    //inicializo variables
    centigrados = 0;
    fahrenheit = 32;

    //asigno valores
    temperatura = document.getElementById("txtIdTemperatura").value;
    temperatura = parseFloat(temperatura);
    
    //realizo operaciones
    resultado = (temperatura*9/5)+32;

    //respuesta
    mensaje = "La temperatura es de : " + resultado + " Fº " + "\n " + " 0º centigrados son 32º farenheit "
    
    alert(mensaje);
}
