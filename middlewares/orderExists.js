import Order from "../models/Order.js"

async function orderExists (req, res, next){
    const order = await Order.findOne({ payment_id: req.body.payment_id, user_id: req.user.id})
    if (order){
        return res.status(400).json({ 
        success: false,
        message: "Order already exists",
        })
    }
    return next()
}
export default orderExists