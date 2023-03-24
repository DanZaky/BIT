/* EJERCICIO

Se le solicita al usuario que ingrse:
- Nombre, Apellido, Email y Telefono
- Fecha
- Productos (cantidad, nombre del producto y precio)

Cuando haga click en un botón "Generar factura": 
- mostrar todos los datos (ordenados), calculando el total a pagar


FACTURA

nombre apellido
email
telefono

fecha

CANT.  PRODUCTOS    PRECIO
1      Zapatilla    $100
3      Caramelos    $67

Total a pagar= $167 */

var btn = document.getElementById("submitButton");

var nameClient = document.getElementById("nameInput");
var lastNameClient = document.getElementById("lastNameInput");
var emailClient = document.getElementById("emailInput");
var phoneClient = document.getElementById("phoneInput");
var dateInvoice = document.getElementById("dateInput");
var quantityProduct = document.getElementById("quantityInput");
var nameProduct = document.getElementById("productInput");
var valueProduct = document.getElementById("valueInput");

var nameClientResult = document.getElementById("nameResult");
var emailClientResult = document.getElementById("emailResult");
var phoneClientResult = document.getElementById("phoneResult");
var dateInvoiceResult = document.getElementById("dateResult");
var quantityProductResult = document.getElementById("quantityInput");
var nameProductResult = document.getElementById("productInput");
var valueProductResult = document.getElementById("valueInput");

var table = document.getElementById("table");
var row = document.createElement("tr"); //crear una etiqueta "tr"
var colQuantity = document.createElement("td");
var colProduct = document.createElement("td");
var colValue = document.createElement("td");
var myTable = "";

var totalResult = document.getElementById("totalResult");


btn.addEventListener("click", function(){
  
  nameClientResult.innerText = nameClient.value + " " + lastNameClient.value;
  emailClientResult.innerHTML = "<em>" + emailClient.value + "</em>";
  phoneClientResult.innerText = phoneClient.value;
  dateInvoiceResult.innerText = dateInvoice.value;

  colQuantity.appendChild(quantityProductResult);
  colProduct.appendChild(nameProductResult); //le agregamos un "hijo" a la columna
  colValue.appendChild(valueProductResult);
  row.appendChild(colQuantity); //le agregamos un "hijo" a la fila
  row.appendChild(colProduct);
  row.appendChild(colValue);

  table.appendChild(row); //le agregamos a la tabla, una fila, que adentro tiene una columna con un dato

  //forma 2
  myTable = myTable + "<tr><td>Hola chicos como están</td></tr>";
  table.innerHTML = myTable;

  totalResult.innerText = "1000";


});