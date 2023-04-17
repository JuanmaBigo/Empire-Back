import Order from '../../models/Order.js';
import Item from '../../models/Item.js';

const controller = {
    
     new_order: async (req, res) => {
        try {
          // Crea la orden en la colección de "orders"
          const order = await Order.create(req.body);
      
          // Obtiene los productos del carrito que coincidan con el user_id en la colección de "items"
          const items = await Item.find({ user_id: req.body.user_id });
      
          // Asigna los productos del carrito a la orden
          order.products = items;
      
          // Guarda los cambios en la orden
          await order.save();
      
          // Envía la respuesta con la orden y los detalles de los items del carrito
          res.status(201).json({
            success: true,
            order
          })
          await Item.deleteMany({ user_id: order.user_id });
        } catch (error) {
            console.log(error)
          // Manejo de errores...
        }
      },
    get_paymentId: async(req, res) => {
        let order = await Order.find({payment_id: req.params.payment_id})
        res.status(200)
           .json({message: "Already exists!"})
    },
    get_order: async(req,res)=>{
        let order = await Order.find({_id: req.params.id})
        res.status(200)
           .json({success: true, order})
    },
    get_orders_user: async(req,res)=>{
        let orders = await Order.find({user_id: req.user.id})
        res.status(200)
           .json({success: true, orders})
    },
    get_orders:async(req,res)=>{ //esta es para el admin
        let orders = await Order.find()
        res.status(200)
           .json({success: true, orders})
    }
}
export default controller