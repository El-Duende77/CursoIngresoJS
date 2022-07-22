function mostrar()
{   var numeroUno;
    var numeroDos;
    var resultado;


    numeroUno=prompt("Ingrese un numero ");
    numeroUno=parseInt(numeroUno);
    numeroDos=prompt("Ingrese otro numero");
    numeroDos=parseInt(numeroDos);

    if(numeroUno == numeroDos )
    {
        alert(" Los numeros son iguales " + numeroUno + numeroDos );
    }else
    {
        if(numeroUno>numeroDos)
        {   resultado=numeroUno-numeroDos;
            alert(resultado);
            if(resultado>10)
            {
                alert("La resta es " + resultado + " y superó el 10");
            }
        }else
        {
            if(numeroUno<numeroDos)
            {
                resultado=numeroUno+numeroDos;
                alert(resultado);
            }
        }
    }
}
