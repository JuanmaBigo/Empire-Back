import express from "express"
import allController from "../controllers/categories/get_all.js"

const router = express.Router()

const { all } = allController

router.get("/", all)

export default router


