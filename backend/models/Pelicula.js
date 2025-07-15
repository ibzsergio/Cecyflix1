const mongoose = require('mongoose');
// Definimos el esquema de una película
const peliculasSchema = new mongoose.Schema({
titulo: { type: String, required: true },
descripcion: String,
genero: String,
poster: String
});
// Exportamos el modelo para usarlo en otras partes del backend
module.exports = mongoose.model('Peliculas', peliculasSchema);