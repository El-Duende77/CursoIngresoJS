function mostrar()
{   /*Bienvenidos (SWITCH +IF).
    Se ingresa una hora.
    Si está entre las 6 y las 11 mostrar:"es de mañana",
    si es desde las 12 a las 19: "es de tarde",
    de lo contrario informar que es de noche.
    Informar si la hora no es válida.
    Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".*/
    
    var hora;
    var mensaje;
    var mensajeDos;
    var horaIngresada;

    hora=document.getElementById("laHora").value;
    hora=parseInt(hora);
    horaIngresada=hora;
    
    switch(hora)
    {
        case "Hora ingresada":
            if(hora > 6 && hora < 11)
            {
                mensaje="Es de mañana";
            }
            break;
    }
    alert(mensaje);

}
