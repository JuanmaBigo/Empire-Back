import express from "express"
import readAll from "../controllers/cars/get_all.js"
import getCar from "../controllers/cars/get_one.js"
import getRecommendation from "../controllers/AI/get_recommendation.js"

const router = express.Router()

const{get_all} = readAll
const {get_one} = getCar

const {get_recommendation} = getRecommendation

router.get("/", get_all)
router.get("/:id", get_one)

router.post("/AI", get_recommendation)


export default router;