/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let AcumBari=0;
	let AcumCata=0;
	let AcumSal=0;

	do{	
		sexo = (prompt("Ingrese Sexo: F/M")).toUpperCase(sexo);
    	lugar = parseInt(prompt("Ingrese lugar: 1)Bariloche , 2)Cataratas , 3)Salta")); 
		tempoprada = parseInt(prompt("Ingrese temporada: 1)Otoño , 2)Invierno , 3)Verano , 4)Primavera"));
		cantidad = parseInt(prompt("Ingrese cantidad de personas que viajan"));
	
		switch (lugar){
		case 1:
			AcumBari++

		
	
	
	}
	
	}
}
	
	
	//alert("tres");

