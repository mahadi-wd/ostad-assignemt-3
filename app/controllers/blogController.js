import {json} from "express"

// create route 

export const createBlog = async (req, res) => {
    // let reqBody = req.body;
    return res.json({massage: `Blog created successfully`})
}

// read route 

export const readBlog = async (req, res) => {
    return res.json({massage: "Blog read successfully"})
}

// update route 

export const updateBlog = async (req, res) => {
    return res.json({massage: "Blog upload successfully"})
}

// delete route 

export const deleteBlog = async (req, res) => {
    return res.json({massage: "Blog delete successfully"})
}

