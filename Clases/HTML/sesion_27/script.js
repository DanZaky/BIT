//Operador Ternario
// (condición) ? si_es_true : si_es_false
let numero = parseInt(prompt("Ingrese un número: "));

let texto = (numero%2==0)?`El número ${numero} es par`:`El número ${numero} es impar`;

alert(texto);

let opcion = parseInt(prompt("Ingresa una de las siguientes opciones\n1 - Hola\n2 - ¿Cómo estás?\n3 - Chau"));

texto = (opcion==1)?`Hola`:(opcion==2)?`¿Cómo estás?`:(opcion==3)?`Chau`:``;

alert(texto);