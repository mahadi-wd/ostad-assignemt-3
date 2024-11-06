import express from "express";

import * as blogController from "../app/controllers/blogController.js"
const router = express.Router()


// creat route
router.post("/create-blog", blogController.createBlog)

// read route
router.get("/read-blog", blogController.readBlog)

// update route
router.put("/update-blog", blogController.updateBlog)

// delete route
router.delete("/delete-blog", blogController.deleteBlog)



export default router