//Servidor creado con node puro
/* const http = require("http");
const fs = require("fs");

//creamos un servidor HTTP que maneje las "peticiones" (request) del cliente
//y le devuelva una "respuesta" (response)

http.createServer(function (req, res) {
  console.log("Gracias, se comunicó con el SERVIDOR");

  //Creando la CABECERA/HEAD de la respuesta
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': '*'
  });

  //Acceder al archivo que quiero enviarle al cliente
  var leerArchivo = fs.createReadStream(__dirname + '/index.html');

  //Enviamos la respuesta
  leerArchivo.pipe(res);


}).listen(3000, function(){
  console.log("Servidor escuchando el puerto 3000");
}); */

//Servidor creado con Express
const express = require("express");
const app = express();

//Creamos URL + Método
app.get("/ejemplo", function(req, res){
  //hago algo
  console.log("El CLIENTE ingresó por GET a http://localhost:3000/ejemplo");

  //respuesta del servidor
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
  console.log("Servidor listo y preparado en el puerto 3000");
});