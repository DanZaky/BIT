//Según 5 numeros ingresados por el usario (en un FOR), ordenarlos de menor a mayor

var arregloNumeros = [];
var cantidadNumeros = 0;

cantidadNumeros = parseInt(prompt("Ingresa la cantidad de números que quieres organizar debe ser un número positivo"));

for(let i = 0; i < cantidadNumeros; i++){
  arregloNumeros[i] = parseInt(prompt("Ingresa el " + i + " número del arreglo"));
}

for(let i = 0; i < arregloNumeros.length; i++){

}


/* -------
Ejercicio 2
Crear un programa que permite ingresar distintos valores, y luego preguntar qué valor se desea averiguar si existe. 
El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no.
Ej: 
- se ingresa los valores: 5 7 99 34 54 2 12
 - valor a buscar: 54
 - RESULTADO: El valor 54 se encuentra entre los valores originales
---------- */

var arregloOriginal = [];
var valorBuscar = 0;

cantidadNumeros = parseInt(prompt("Ingresa la cantidad de números que quieres ingresar debe ser un número positivo"));

for(let i = 0; i < cantidadNumeros; i++){

  arregloOriginal[i] = parseInt(prompt("Ingresa el " + i + " número del arreglo"));

}

valorBuscar = parseInt(prompt("Ingrese el número que desea buscar debe ser un número positivo"));
var contador = 0;

for (let i = 0; i < cantidadNumeros; i++){
  if(arregloOriginal[i] == valorBuscar){
    contador++;
  }
}

if(contador > 0){
  console.log("El valor "+ valorBuscar +" se encuentra " + contador +" veces entre los valores originales");
}else{
  console.log("El valor "+ valorBuscar +" NO se encuentra entre los valores originales");
}

/* Ejercicio 3pos
Crear un programa que pida ingresar las siguientes frutas: Manzana, Naranja o Pera.
Y devuelva un mensaje con la cantidad que hay de cada fruta.

Aclaración: puede utilizar un menú, y cuando selecciones "Salir", finaliza el programa */

