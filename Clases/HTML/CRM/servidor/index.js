//Paquetes y modulos
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//conexión base de datos
mongoose
  .connect(
    "mongodb+srv://danzaky:KguywsELA7f2pZ0P@cluster0.mr255xp.mongodb.net/CRM?retryWrites=true&w=majority"
    )
  .then(function (db) {
    console.log('conectado a la base de datos');
  })
  .catch(function (err) {
    console.log(err);
  });

//configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/script', express.static(path.resolve('../cliente/script')));

// modelo de datos
const cliente = require('./modelos/modelo_cliente');
const contacto = require('./modelos/modelo_contacto');

// Rutas

//Ruta principal
app.get('/', function (req, res) {
  res.sendFile(path.resolve('../cliente/html/index.html'));
});

//Ruta listado de clientes
app.get('/lista-clientes', function (req, res) {
  res.sendFile(path.resolve('../cliente/html/listaclientes.html'));
});

//Ruta pedir clientes de base de datos
app.get('/request-database-cliente', async function (req, res) {
  let clienteDocumento = await cliente.find();
  console.log(clienteDocumento);
  res.send(clienteDocumento);
});

//Ruta listado de contactos
app.get('/lista-contactos', function (req, res) {
  res.sendFile(path.resolve('../cliente/html/listacontactos.html'));
  /*  let customer_documents = await customer.find(); */
  /* console.log(customer_documents);
    res.send(customer_documents); */
});

//Ruta pedir contactos con clientes de base de datos
app.get('/request-database-contacto', async function (req, res) {
  let contactosDocumento = await contacto.find();
  console.log(contactosDocumento);
  res.send(contactosDocumento);
});

//Ruta formulario nuevo cliente
app.get('/nuevo-cliente', function (req, res) {
  res.sendFile(path.resolve('../cliente/html/nuevocliente.html'));
});

//ruta guardar nuevo cliente
app.post('/guardar-cliente', async function (req, res) {
  let nuevoCliente = new cliente(req.body);
  await nuevoCliente.save();
  res.send('Contacto agregado exitosamente');
});

//Ruta formulario nuevo contacto
app.get('/nuevo-contacto', function (req, res) {
  res.sendFile(path.resolve('../cliente/html/nuevocontacto.html'));
});

//ruta guardar nuevo contacto
app.post('/guardar-contacto', async function (req, res) {
  let nuevoContacto = new contacto(req.body);
  console.log('datos de contacto' + nuevoContacto);
  await nuevoContacto.save();
  res.send('Contacto agregado exitosamente');
});

// Ruta bucar en la base de datos el cliente para crear contacto
app.get('/request-database-search', async function (req, res) {
  let nombre = req.body.exists;
  console.log(nombre);
  let datos = await cliente.findOne({
    $or: [{ nombre: nombre }, { apellido: nombre }],
  });
  console.log({ datos });
  if (datos != null) {
    res.send(datos);
  } else {
    datos = false;
    res.status(404).send('Usuario no encontrado');
  }
});

app.delete('/contacto-delete/:id', async function (req, res) {
  let contactoId = req.params.id;

  await contacto.findByIdAndRemove(contactoId);
  res.send('Borrado exitoso');
});

app.delete('/cliente-delete/:id', async function (req, res) {
  let clienteId = req.params.id;

  await cliente.findByIdAndRemove(clienteId);
  res.send('Borrado exitoso');
});

app.listen(3000, function () {
  console.log('Servidor listo en el puerto 3000');
});