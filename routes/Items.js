import express from "express";
import controller from "../controllers/cart/cart.js";
import passport from "./../middlewares/passport.js";

const {create, getAll, deleteOne, deleteAll} = controller
const router = express.Router()

router.post("/", passport.authenticate('jwt',{ session:false }), create)
router.get("/", passport.authenticate('jwt',{ session:false }), getAll)
router.put("/:id", deleteOne)
router.put("/", passport.authenticate('jwt',{ session:false }), deleteAll)


export default router


