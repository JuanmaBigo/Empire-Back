import  mongoose  from "mongoose";
import Item from './Item.js'

const orderSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', // Referenciar a la colección de "users"
      required: true
    },
    payment_id: {
      type: Number,
      required: true
    },
    products: [{  
      type: mongoose.Schema.Types.ObjectId,
      ref: 'items', // Referenciar a la colección de "cart"
}],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true
    },
    payment_method: {
        type: String,
        default: "MercadoPago" // Valor predeterminado para el método de pago
      },
      created_at: {
        type: Date,
        default: Date.now
      }
  });
  
 const Order = mongoose.model('orders', orderSchema);
 export default Order