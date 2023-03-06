var numero = parseInt(prompt("Ingrese un número positivo: "));

if(numero >= 0){
  var contador = 0;
  for(var i = 0; i <= numero; i++){
    if(i % 2 == 0){
      contador++;
    }
  }
  alert("Hay " + contador + " números pares hasta " + numero);
}else{
  alert("El valor ingresado no es positivo o no es número");
}

//ejercicio2
var numero2 = parseInt(prompt("Ingrese un número: "));

for(var i = 1; i<= 10; i++){
  console.log(numero2 + "x" + i + " = " + numero2 * i);
}

for(var i = 10; i>0; i--){
  document.write("<h2> "+i+" </h2>");
}
document.write("<h2>Despegue!!!!!</h2>");
