/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   //declaro variables
    var ancho;
    var largo;
    var perimetro;
    var resultado;
    var respuesta;
    
    //asigno valores a las variables
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);

    largo = document.getElementById("txtIdLargo").value;
    largo = parseFloat(largo);

    //realizo operaciones 
    perimetro = (largo*2) + (ancho*2);
    resultado = perimetro*3;

    //desarrollo la respuesta
    respuesta = "La cantidad de alambre para el perimetro es de : " + resultado + " mts ";

    alert(respuesta);
    
}
function Circulo () 
{   //declaro variables
    var radioTerreno;
    var resultado;
    var vueltasDeTerreno;
    var respuesta;

    //asigno valores
    radioTerreno = document.getElementById("txtIdRadio").value;
    radioTerreno = parseInt(radioTerreno);

    vueltasDeTerreno = prompt("Ingrese vueltas al terreno");
    vueltasDeTerreno = parseInt(vueltasDeTerreno);

    //realizo calculos
    resultado = radioTerreno*vueltasDeTerreno;

    //respuesta
    respuesta = "La cantidad de alambre es : " + resultado + " mts "

    alert(respuesta);

	
}
function Materiales () 
{   //declaro variables
    var anchoDeTerreno;
    var bolDeCementoMts2;
    var bolCalMts2;
    var largoDeTerreno;
    var metrosCuadradosTerreno;
    var respuesta;
    var totalCal;
    var totalCemento;

    //inicializo las variables
    bolCalMts2 = 3;
    bolDeCementoMts2 = 2;

    //asigno valores
    largoDeTerreno = document.getElementById("txtIdLargo").value;
    largoDeTerreno = parseFloat(largoDeTerreno);

    anchoDeTerreno = document.getElementById("txtIdAncho").value;
    anchoDeTerreno = parseFloat(anchoDeTerreno);

    //realizo los calculos
    metrosCuadradosTerreno = largoDeTerreno*anchoDeTerreno;

    totalCal = metrosCuadradosTerreno*bolCalMts2;
    
    totalCemento = metrosCuadradosTerreno*bolDeCementoMts2;

    //respuesta
    respuesta = "La cantidad de bolsas de cal es " + totalCal + " y, la cantidad de bolsas de cemento es " + totalCemento;

    alert(respuesta);

}