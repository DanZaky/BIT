var operacion = parseInt(prompt("Ingrese una opción: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - División"))

switch (operacion) {
  case 1:
    alert("Operación suma");
    break;

  case 2:
    alert("Operación resta");
    break;

  case 3:
    alert("Operación multiplicación");
    break;

  case 4:
    alert("Operación división");
    break;

  default:
    alert("La operación ingresada no está en el menú");
}