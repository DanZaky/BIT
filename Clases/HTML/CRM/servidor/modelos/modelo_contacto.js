const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let modelo_contacto = new Schema({
  nombre: String,
  estado: String,
  tipo_de_contacto: String,
  fecha_de_registro: String,
});

module.exports = mongoose.model('contactos', modelo_contacto);