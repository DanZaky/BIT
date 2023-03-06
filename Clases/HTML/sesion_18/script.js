/* var numero;
do {
  numero = parseInt(prompt("Ingresa un número positivo: "));
} while (numero < 0);

//ejemplo con FOR
var sumatoria = 0;
for (var i = 1; i <= numero; i++) {
  sumatoria += i; //sumatoria = sumatoria + i;
}
console.log("(FOR)La sumatoria hasta " + numero + " es: " + sumatoria);

//ejemplo con WHILE
sumatoria = 0;
var aux = numero;
while (aux > 0) {
  sumatoria += aux;
  aux--;
}
console.log("(WHILE)La sumatoria hasta " + numero + " es: " + sumatoria);

//ejemplo con DO WHILE
sumatoria = 0;
aux = numero;
do {
  sumatoria += aux;
  aux--;
} while (aux > 0);

console.log("(DO WHILE)La sumatoria hasta " + numero + " es: " + sumatoria); */

var cadena = prompt("Ingresa una cadena de texto: ");
var contador = 0;
var cadenaMinusculas = cadena.toLowerCase();
var i=0;

//Cantidad de "a" en la cadena
for(i = 0; i < cadena.length; i++){

  if (i == (cadena.length-1)){
    if(cadenaMinusculas.slice(-1) == "a"){
      contador++;
    }
  }else{
    if(cadenaMinusculas.slice(i, i+1) == "a"){
      contador++;
    }
  }
 
}
console.log("La cantidad de 'a' que hay en la cadena es: " + contador);

//Cadena al revés
var cadenaCambiada = "";
for(i = (cadena.length-1); i>=0; i--){
  if( i == (cadena.length-1) ){
    cadenaCambiada += cadena.slice(-1);
  }else{
    cadenaCambiada += cadena.slice(i, i+1);
  }
  
}
console.log("La cadena al revés: " + cadenaCambiada);

//Cadena modificada con a|4, e|3, i|1, o|0
cadenaCambiada="";
for(i = 0; i < cadena.length; i++){

  if (i == (cadena.length-1)){
    if( cadena.slice(-1) == "a" ){
      cadenaCambiada += "4";
    }else if( cadena.slice(-1) == "e" ){
      cadenaCambiada += "3";
    }else if( cadena.slice(-1) == "i" ){
      cadenaCambiada += "1";
    }else if( cadena.slice(-1) == "o" ){
      cadenaCambiada += "0";
    }else{
      cadenaCambiada += cadena.slice(-1);
    }
  }else{
    if( cadena.slice(i,i+1) == "a" ){
      cadenaCambiada += "4";
    }else if( cadena.slice(i,i+1) == "e" ){
      cadenaCambiada += "3";
    }else if( cadena.slice(i,i+1) == "i" ){
      cadenaCambiada += "1";
    }else if( cadena.slice(i,i+1) == "o" ){
      cadenaCambiada += "0";
    }else{
      cadenaCambiada += cadena.slice(i, i+1);
    }
  }
}
console.log("La cadena modificada es: " + cadenaCambiada);
