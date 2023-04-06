import express from "express"
import readAll from "../controllers/cars/get_all.js"

const router = express.Router()

const{get_all}=readAll

router.get("/",get_all)


export default router;