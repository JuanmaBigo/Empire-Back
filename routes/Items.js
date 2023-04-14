import express from "express";
import controller from "../controllers/cart/cart.js";
import passport from "./../middlewares/passport.js";

const {create} = controller
const router = express.Router()

router.post("/", passport.authenticate('jwt',{ session:false }), create)


export default router


