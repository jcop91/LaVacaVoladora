const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  correo:{
      type: String, //mongoose.SchemaTypes.Email,
      required: true,
      unique: true
  },
  productos_arr:[{
        productos: {
          type:  mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        cantidad:{
          type: String
        },
        comentarios:{
          type: String
        }
  }],
  total:{
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('cart', cartSchema)
