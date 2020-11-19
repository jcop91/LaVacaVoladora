const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
    correo:{
        type: String, //mongoose.SchemaTypes.Email,
        required: true,
        unique: true
    },
    password:{
        type: String,
        select: false
    },
    telefono:{
        type: String,
        required: false,
    },
    descripcion:{
        type: String,
        required: false,
    },
    imagen:{
        type: String,
        required: false,
    },
    admin:{
        type: Number,
        required: false,
    }
})


module.exports = mongoose.model('users', userSchema)