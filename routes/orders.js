import express from "express";
import controller from "../controllers/Orders/order.js";
import passport from "./../middlewares/passport.js";

const {new_order, get_order, get_orders_user, get_orders, get_paymentId } = controller
const router = express.Router()

router.post("/", passport.authenticate('jwt',{ session:false }), new_order)
router.get("/:id", passport.authenticate('jwt',{ session:false }), get_order)
router.get("/:payment_id", passport.authenticate('jwt',{ session:false }), get_paymentId)
router.get("/", passport.authenticate('jwt',{ session:false }), get_orders_user)
router.get("/", passport.authenticate('jwt',{ session:false }), get_orders)


export default router