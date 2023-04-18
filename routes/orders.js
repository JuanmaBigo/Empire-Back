import express from "express";
import controller from "../controllers/Orders/order.js";
import passport from "./../middlewares/passport.js";
import orderExists from "../middlewares/orderExists.js";

const {new_order, get_orders_user } = controller
const router = express.Router()

router.post("/", passport.authenticate('jwt',{ session:false }), orderExists, new_order)

router.get("/", passport.authenticate('jwt',{ session:false }), get_orders_user)
// router.get("/", passport.authenticate('jwt',{ session:false }), get_orders)


export default router