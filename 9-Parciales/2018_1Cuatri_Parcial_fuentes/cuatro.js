/*Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/

function mostrar()
{   
    //declaro variables
    
    var numeroUno;
    var numeroDos;
    var resultado;


    //pido un dato, asigno valores 
    numeroUno = prompt("Ingrese un numero ");
    
    numeroDos = prompt("Ingrese un segundo numero ");
    

    //condicional. 
    //Si los numeros son iguales los muestro concatenados
   
    if ( numeroUno == numeroDos )
    {
        resultado = numeroUno + numeroDos;
    }
    else
    {   //Si el primero es mayor, los resto

        numeroUno = parseInt(numeroUno);
        numeroDos = parseInt(numeroDos);

        if ( numeroUno > numeroDos )
        {   

            resultado = numeroUno - numeroDos;
        }
        else
        {   //de lo contrario los sumo

            if ( numeroUno < numeroDos )
            {
                resultado = numeroUno + numeroDos;

                //Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
                //"la suma es xxx y supero el 10"

                if ( resultado > 10 )
                {
                    resultado = "La suma es " + resultado + " y supero el numero 10 ";
                }
            }
        }
    }

    alert(resultado);
}
