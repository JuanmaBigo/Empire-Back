import express from "express"
import readAll from "../controllers/cars/get_all.js"
import getCar from "../controllers/cars/get_one.js"
import getRecommendation from "../controllers/AI/get_recommendation.js"
import addStock from "../controllers/cars/add_stock.js"
import isAdmin from "../middlewares/isAdmin.js"
import passport from "../middlewares/passport.js"

const router = express.Router()

const{get_all} = readAll
const {get_one} = getCar

const {get_recommendation} = getRecommendation
const {add_stock} = addStock

router.get("/", get_all)
router.get("/:id", get_one)

router.post('/stock', passport.authenticate('jwt', {session: false}), isAdmin, add_stock)
router.post("/AI", get_recommendation)


export default router;