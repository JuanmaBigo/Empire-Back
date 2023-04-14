import express from "express"
import getPhoto from "../controllers/rims/get_photo.js"
import getRims from "../controllers/rims/get_rims.js"
import getCarPhoto from "../controllers/rims/get_car_photo.js"

const router = express.Router()

const {get_photo}= getPhoto
const{get_rims}=getRims
const{get_car_photo}=getCarPhoto


router.get("/",get_photo)
router.get("/all",get_rims)
router.get("/:id", get_car_photo)


export default router;