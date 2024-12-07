import { Router } from "express";
import Post from "../models/Post.js";

const router = Router();

//create post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});
//update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        //START HERE!!! TypeError usedId is null
        if (post.userId.userId === req.body.userId) {
            await post.updateOne( {$set: req.body} );
            res.status(200).json("Post has been updated");
        } else {
            res.status(403).json("Access denied: Users can only update their own post");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
//delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne( {$set: req.body} );
            res.status(200).json("Post has been deleted");
        } else {
            res.status(403).json("Access denied: Users can only delete their own post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});
//like post
//get post
//get timeline post

export default router;