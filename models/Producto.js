const mongoose = require('mongoose')
const productoSchema = mongoose.Schema({
        nombre: {
            type: String, 
            required: true
            ,
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' } },
        precio: {
            type: Number
        },
    },
    {
        timestamps: true
    }
)
const Producto = mongoose.model('Producto', guitarraSchema)

module.exports = Guitarra