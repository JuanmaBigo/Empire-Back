import express from "express"
import getColors from "../controllers/colors/get_colors.js"


const router = express.Router()

const {get_colors}=getColors

router.get("/",get_colors)



export default router;