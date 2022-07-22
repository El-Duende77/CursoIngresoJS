function mostrar()
{   var nombreYapellidouno;
    var nombreYapellidoDos;
    var kilosUno;
    var kilosDos;
    var kilosSumados;
    var promedioDeKilos;
    var mensaje;

    nombreYapellidouno=prompt("Ingrese su nombre y apellido uno");
    nombreYapellidoDos=prompt("Ingrese su nombre y apellido dos");
    kilosUno=prompt("Ingreso su peso UNO");
    kilosUno=parseInt(kilosUno);
    kilosDos=prompt("Ingrese su peso DOS");
    kilosDos=parseInt(kilosDos);
    kilosSumados= kilosUno+kilosDos;
    promedioDeKilos=kilosSumados/2;

    mensaje="Ustedes se llaman " + nombreYapellidoDos + " y " + nombreYapellidouno + " pesan " + 
    kilosUno + "kg" + " y " + kilosDos + "kg" + " los kg sumados son " +
    kilosSumados + " y el promedio de pesos es :" + promedioDeKilos;
    alert(mensaje);




    



  
}
