/* 1) El usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2. */
var numero;

do{
  numero=parseInt(prompt("Ingrese un número positivo"));
}while(numero<0);

for(let i = numero; i >= 0; i--){

  if(i % 3 == 2){
    console.log(i + "%3 = 2");
  }

}

/* 2) El usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
Ej: Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x */
var letra = "";
do{
  letra = prompt("Ingresa una letra");
}while(letra.length>1);

var repeticionCadena;
do{
  repeticionCadena = parseInt(prompt("Ingresa la cantidad de veces que quieres que se repita la letra \nDebe ser mayor a 0"))
}while(repeticionCadena<1);

var letraRepetida="";

for(let i=0; i<repeticionCadena; i++){
  letraRepetida += letra;
}
console.log(letra + " repetida " + repeticionCadena + " veces: " + letraRepetida);

/* 3) Se le solicita al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4 */

var contador = 1;
var sumatoria = 0;
var tope = 4;

do{
  sumatoria += parseInt(prompt("Ingrese el " + contador + " número"));
  contador++;
}while(contador<=tope);

console.log("La media aritmética de los 4 números ingresados es: " + sumatoria/tope);

/* 4) Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.
Ej: si ingresamos el valor 5, el resultado será:

*
**
***
****
***** 
*/

var numeroAsteriscos = 0;
var cadenaAsteriscos = "*";

do{
  numeroAsteriscos = parseInt(prompt("Ingrese la cantidad de asterisco que quiere ver en pantalla, debe ser un número positivo"));
}while(numeroAsteriscos<1);

for(let i=0; i<numeroAsteriscos; i++){
  console.log(cadenaAsteriscos);
  cadenaAsteriscos += "*";
}

/* 5) Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4

Aclaración: Usamos un console.log para ir mostrando los valores de los dígitos, deberá quedar algo así:

0:0
0:1
0:2
...
...
1:4 será el final del conteo */

for(let i=0; i<2; i++){
  for(let j=0; j<5; j++){
    console.log(i + ":" + j);
  }
}

/* 6) Crear un script para controlar las vueltas de una deportista. 
Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo (en segundos) de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas).
Ejemplo: 
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s */

var cantidadVueltas;
var tiempoVuelta;
var sumatoriaTiempos = 0;
var contador = 1;

cantidadVueltas = parseInt(prompt("Ingresa la cantidad de vueltas a realizar"));

do{
  tiempoVuelta = parseInt(prompt("Ingresa el tiempo de la vuelta en segundos " + contador));
  console.log("Vuelta " + contador + ": " + tiempoVuelta + "s");
  sumatoriaTiempos += tiempoVuelta;
  contador++;
}while(contador <= cantidadVueltas);

console.log("⏱ Promedio: " + (sumatoriaTiempos/cantidadVueltas) + "s");

