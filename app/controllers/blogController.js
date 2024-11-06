import {json} from "express"

export const createBlog = async (req, res) => {
    // let reqBody = req.body;
    return res.json({massage: ` My name is Mahaid Hassan `})
}

// export const feature2 = async (req, res) => {
//     let reqData = req.params()
//     return res.json({massage:`this is our ${reqData}`})
// }