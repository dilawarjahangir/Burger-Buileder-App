const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  user: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  deliveryMethod: {
    type: String,
    required: true,
  },
  cart: {
    type: Map,
    of: cartItemSchema,
    required: true,
  },
  totalprice: {
    type: Number,
    required: true,
  },
}, );

module.exports = mongoose.model('Order', orderSchema);
