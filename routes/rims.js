import express from "express"
import getPhoto from "../controllers/rims/get_photo.js"

const router = express.Router()

const {get_photo}= getPhoto

router.get("/",get_photo)

export default router;