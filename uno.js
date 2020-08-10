/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let contPers=1;
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contFem=0;
	let promedioEdad;
	let acumEdad=0;
	let min;
	let max;
	
	
	do {
		nombre = prompt("Ingrese Nombre");
		peso = parseInt(prompt("Ingrese Peso"));
		sexo = (prompt("Ingrese Sexo: F/M")).toUpperCase(sexo);
		edad = parseInt(prompt("Ingrese Edad"));

		if (sexo=="F"){
			contFem++
		}
		else if (sexo=="M"){
			max=peso;
			min=peso;
			if (peso < min) {
				min = peso;	
			}
			else if (peso > max){
				max = num;
			}	
		}
		acumEdad= acumEdad+edad;
		contPers++
	} while (contPers<=5)
	
	promedioEdad= acumEdad/(contPers-1);
	document.write("La cantidad de mujeres es: " + contFem);
	document.writeln(`<br>`);
	document.write("La Edad promedio es: " + promedioEdad);
	document.writeln(`<br>`);
	document.write("El hombre mas pesado pesa: " + max + " " + "Kg.");

	//alert("uno");
}
