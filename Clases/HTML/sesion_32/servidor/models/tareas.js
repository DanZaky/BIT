const mongoose = require("mongoose");
const schema = mongoose.Schema;

//Un schema/esquema es el modelo de datos o la forma del documento

let modeloTareas = new schema({
  nombre: String,
  detalle: String,
  finalizada: {
    type:Boolean,
    default: false
  },
  fecha: String
});

module.exports = mongoose.model("Tareas", modeloTareas);