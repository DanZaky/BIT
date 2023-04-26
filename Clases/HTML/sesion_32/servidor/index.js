//Paquetes y módulos
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

mongoose.connect(
  "mongodb+srv://danzaky:KguywsELA7f2pZ0P@cluster0.mr255xp.mongodb.net/QSD_TodoList?retryWrites=true&w=majority"
  )
.then(function (db) {
  console.log("Conectado a la Base de Datos");
})
.catch(function (err) {
    console.log(err);
});

//Configuraciones
app.use(bodyParser.urlencoded({ extended:true }));
app.use("/", express.static(path.resolve("../cliente/")));

//Modelo de datos
const tarea = require("./models/tareas");

//Rutas
app.get("/", function (req, res){
});

app.get("/prueba", async function(req, res){
  //buscar en una base de datos y mostrar el resultado

  let documentos = await tarea.find();

  console.log(documentos);

  res.send("Hola Mundo");
});

//Puerto del servidor
app.listen(3000, function(){
  console.log("Servidor OK!!!");
});