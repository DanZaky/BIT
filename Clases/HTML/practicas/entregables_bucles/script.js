/* PROYECTO CON NOTA

1) Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius y el programa muestre en una alert la temperatura 
en grados Fahrenheit.
 */

var temperaturaCelsius = parseInt(prompt("Ingresa la temperatura en grados Celsius"));

var temperaturaFahrenheit = ((temperaturaCelsius * (9 / 5)) + 32);

alert(temperaturaCelsius + "°C = " + temperaturaFahrenheit + "°F");


/* 2) El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado
Ej: numero ingresado = 5

*
**
***
****
*****
****
***
**
* 

*/

var numeroAsteriscos = parseInt(prompt("Ingrese la altura de la pirámide"));
var cadenaAsteriscos = "*";

for (let i = 1; i < numeroAsteriscos; i++) {
  console.log(cadenaAsteriscos);
  cadenaAsteriscos += "*";
}

for (let j = numeroAsteriscos; j > 1; j--) {
  cadenaAsteriscos = cadenaAsteriscos.slice(0, -1);
  console.log(cadenaAsteriscos);
}

/* 3) Según un numero ingresado por el usuario, calcular su factorial

Ej:
Factorial 5 = 5 * 4 * 3 * 2 * 1 = 120
factorial de 5 = 120

factorial de 10 = 10*9*8*7*6*5*4*3*2*1 = 3628800 */

var numFactorial = parseInt(prompt("Ingresa un número positivo para calcular su factorial"));

var factorial = 1;

for (let i = 1; i <= numFactorial; i++) {
  factorial *= i;
}

console.log(numFactorial + "! = " + factorial);



/* 4) ATM (cajero automático)

Crear un programa que tenga un dinero inicial.
El programa también deberá contar con un menú con las siguientes opciones:
  - EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
  - DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
  - CONSULTAR SALDO: debe mostrar el saldo actual
  - VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
  - SALIR: debe terminar la ejecución del programa

El programa debe mostrar el menú de opciones, y permitir ingresar una opción. 
Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. 
Si se elige SALIR, debe terminar el programa. 
Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, 
volver al menú de opciones. 
Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder 
consultarse luego, por ejemplo:

ULTIMOS MOVIMIENTOS
 - Extraido: $50
 - Depositado: $550
 - Extraido: $1000
 - Consultado saldo: $3400
 - Depositado: $100
 - otra operacion
 - otra operacion */

var menu = 0;
var saldo = 0;
var retiro = 0;
var deposito = 0;
var ultimosMovimientos = "";

do{
  menu = parseInt(prompt("Ingrese un número de opción\n1 - EXTRAER\n2 - DEPOSITAR\n3 - CONSULTAR\n4 - VER ULTIMOS MOVIMIENTOS\n5 - SALIR"));

  switch (menu) {
    case 1:
      retiro = parseInt(prompt("Ingrese la cantidad de dinero a retirar"));
      saldo -= retiro;
      ultimosMovimientos += ("Usted ha retirado $" + retiro.toString() + "\n");
      console.log("Usted ha retirado $" + retiro + "\nSu nuevo saldo es $" + saldo);
      break;
  
    case 2:
      deposito = parseInt(prompt("Ingrese la cantidad de dinero a depositar"));
      saldo += deposito;
      ultimosMovimientos += ("Usted ha depositdo $" + deposito.toString() + "\n");
      console.log("Usted ha depositado $" + deposito + "\nSu nuevo saldo es $" + saldo);
      break;
  
    case 3:
      console.log("Su saldo es $" + saldo);
      ultimosMovimientos += ("Usted ha consultado su saldo\n");
      break;
  
    case 4:
      console.log(ultimosMovimientos);
      ultimosMovimientos += ("Usted ha consultado sus ultimos movimientos\n");
      break;
    
    case 5:
      console.log("Vuelva Pronto!");
      break;

    default:
      alert("La opción ingresada NO está dentro del menú, intente nuevamente");
      break;
  }

}while(menu != 5);

/* 5) Fibonacci

Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34 */

var numFibonacci = parseInt(prompt("Ingrese un número positivo para visualizar la serie de fibonnacci hasta ese número"));
var fiboSerie = "0 1";
var fiboUno = 0;
var fiboDos = 1;
var temp = 0;


for (let i = 1; i <= numFibonacci; i++) {
  temp = fiboDos + fiboUno;
  fiboSerie = fiboSerie + " " + temp.toString();
  fiboUno = fiboDos;
  fiboDos = temp;
}

console.log("La serie de Fibonnacci hasta " + numFibonacci + " es:\n" + fiboSerie);