const mongoose = require('mongoose')

let categorySchema = mongoose.Schema({
    categoria:{
        type: String,
        required: true
    },
    hidden:{
        type: Boolean,
        required: true
    },
    deleted:{
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('categories', categorySchema);