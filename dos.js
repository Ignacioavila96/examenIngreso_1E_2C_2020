/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let pesoKg;
  let tipo;
  let acumPeso=0;
  let Respuesta;
  let max;
  let min;
  let marcaCara;
  let marcaBarata;

   do {
      marca = prompt("Ingrese marca");
      precio = parseInt(prompt("Ingrese precio")); 
      pesoKg = parseInt(prompt("Ingrese peso"));
      tipo = (prompt("Ingrese tipo: Solido/Liquido")).toUpperCase(tipo);

      acumPeso= acumPeso + pesoKg;

      if (tipo=="LIQUIDO"){
        max=precio;
        if (precio > max){
          max = precio;
        }
        marcaCara=marca;
      }
      if (tipo=="SOLIDO"){
        min=precio;
        if (precio < min){
          min = precio;
        }
        marcaBarata=marca;
      }	
      
      Respuesta = (prompt("Desea ingresar otro Producto? SI/NO")).toUpperCase(Respuesta);
   
   switch (Respuesta){
    case "SI":
      validacion = false;
      break;
    case "NO":
      validacion = true;
      break;
  }
} while (validacion==false);
  
  document.write("La cantidad total de Kilos de la compra es: " + acumPeso);
  document.writeln(`<br>`);
  document.write("La marca del producto más caro de los líquidos es: " + marcaCara);
  document.writeln(`<br>`);
  document.write("La marca del producto más barato de los sólidos es: " + marcaBarata);
  
  
  
  
  
  //alert("dos");
}
