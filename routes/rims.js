import express from "express"
import getPhoto from "../controllers/rims/get_photo.js"
import getRims from "../controllers/rims/get_rims.js"

const router = express.Router()

const {get_photo}= getPhoto
const{get_rims}=getRims


router.get("/",get_photo)
router.get("/all",get_rims)

export default router;