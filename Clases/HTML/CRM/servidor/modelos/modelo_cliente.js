const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let modelo_cliente = new Schema({
  nombre: String,
  apellido: String,
  pais: String,
  telefono: Number,
  email: String,
  fecha_de_registro: String,
});

module.exports = mongoose.model('clientes', modelo_cliente);