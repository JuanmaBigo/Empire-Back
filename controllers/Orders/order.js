import Order from '../../models/Order.js';
import Item from '../../models/Item.js';
import transporter from '../../config/verificationMail.js'

const controller = {
    
  new_order: async (req, res) => {
    try {
      // Crea la orden en la colección de "orders"
      const order = await Order.create(req.body);

      // Obtiene los productos del carrito que coincidan con el user_id en la colección de "items"
      const items = await Item.find({ user_id: req.body.user_id })
                          .populate("car_id", "name photo price reservePrice stock")
                          .populate("color_id", "name price_color")
                          .populate("rim_id", "name price_rim photo")
                          .exec(); // Agregar exec() para ejecutar la consulta
                          
      // Asigna los productos del carrito a la orden
      order.products = items;
  
      // Guarda los cambios en la orden
      await order.save();
  
      // Envía la respuesta con la orden y los detalles de los items del carrito
      // Actualiza los documentos de los items del carrito para marcarlos como comprados
      await Item.updateMany({ user_id: req.body.user_id }, { bought: true });
      res.status(201).json({
        success: true,
        order
      })
    } catch (error) {
        console.log(error)
      // Manejo de errores...
    }
  },
    get_orders_user: async(req,res)=>{
      try {
        const items = await Item.find({ user_id: req.user.id, bought: true }).exec();
        const orders = await Order.find({ products: { $in: items } })
      .populate("user_id", "name email")
      .populate({
        path: "products",
        populate: [
          { path: "car_id", select: "name photo price reservePrice stock" },
          { path: "color_id", select: "name price_color" },
          { path: "rim_id", select: "name price_rim photo" }
        ]
      })
      .exec();
        res.status(200)
           .json({success: true, orders})
    } catch (error) {
        console.log(error)
        
      }
}
}
export default controller