import express from "express"
import readAll from "../controllers/cars/get_all.js"
import getCar from "../controllers/cars/get_one.js"

const router = express.Router()

const{get_all}=readAll
const {get_one} = getCar

router.get("/",get_all)
router.get("/:id", get_one)


export default router;