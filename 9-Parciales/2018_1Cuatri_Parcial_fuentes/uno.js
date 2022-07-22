/*Realizar el algoritmo que pida el ancho y el largo de un 
rectángulo por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
    var largo;
    var ancho;
    var resultado;

    largo=prompt("Ingrese largo " );
    largo=parseInt(largo);
    ancho=prompt("Ingrese ancho " );
    ancho=parseInt(ancho);
    resultado=(largo*2)+(ancho*2);
    
    alert(resultado);
}
