import express from "express";
// import * as featureController from "../app/controllers/featureController.js"
import * as blogController from "../app/controllers/blogController.js"
const router = express.Router()


// router.post('/feature1' , featureController.feature1)
router.post("/create-blog", blogController.createBlog)



export default router