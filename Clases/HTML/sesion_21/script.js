/* Según un texto ingresado por el usuario, van a crear 3 funciones:

- mayusculas (que reciba un parametro y devuelva eso mismo en mayúsculas)
- minusculas (que reciba un paramentro y devuelva eso mismo en minúsculas)
- mostrar (que reciba un parametro y muestre por consola eso mismo)

Darle a elegir al usuario, como desea transformar el texto (a may o min) y luego se muestra */

// palindromo

function eliminarEspacios(cadenaEspacios){
  cadenaEspacios = cadenaEspacios.toLowerCase();
  let cadenaSinEspacios = "";
  let cadenaTemp = cadenaEspacios;
  for (let i = 0; i < cadenaEspacios.length; i++){
    if(cadenaTemp.slice(0, 1) != " "){
      cadenaSinEspacios += cadenaTemp.slice(0, 1);
      cadenaTemp = cadenaTemp.slice(1);
    }else{
      cadenaTemp = cadenaTemp.slice(1);
    }
  }
  return cadenaSinEspacios;
}

function palindromo (cadenaPalindromo){
  let cadenaContraria = "";
  cadenaPalindromo = eliminarEspacios(cadenaPalindromo);
  let cadenaTemp = cadenaPalindromo;
  

  for (let i = 0; i < cadenaPalindromo.length; i++){
    cadenaContraria += cadenaTemp.slice(-1);
    cadenaTemp = cadenaTemp.slice(0,-1);
  }

  if (cadenaPalindromo === cadenaContraria){
    console.log("La cadena ingresada es un palíndromo");
  }else{
    console.log("La cadena ingresada NO es un palíndromo");
  }
}

let menu;

do{
  
  menu = parseInt(prompt("Ingresa una opicón del menú\n1 - Verificar si una cadena es palíndromo\n2 - Salir"));

  switch(menu){
    case 1:
      let cadenaPalindromo = prompt("Ingresa una frase");
      palindromo(cadenaPalindromo);
      break;

    case 2: 
      alert("Gracias por usar el programa!");
      break;

    default:
      alert("La opción ingresada no se encuentra en el menú!");
  }
  
}while(menu != 2);
