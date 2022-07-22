function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numero;
	var numeroMaximo;
	var numeroMinimo;

	numeroMaximo = 10;
	numeroMinimo = 1;

	numero = Math.round(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo);

	alert(numero);	

}