import { Router } from "express";
import Post from "../models/Post.js";
import User from "../models/User.js";

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
        if (post.userId === req.body.userId) {
            console.log(req.params.id)
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
//like  & dislike post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId }});
            res.status(200).json("Post has been liked");
        } else {
            await post.updateOne({$pull: {likes: req.body.userId} });
            res.status(200).json("Post has been unliked")
        }
    } catch(err) {
        res.status(500).json(err);
    }
});
//get post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});
//get timeline post
router.get("/timeline/all", async (req, res) => {
    try {
       const currentUser =  await User.findById(req.body.userId);
       const userPost = await Post.find({ userId: currentUser._id });
       const friendPost = await Promise.all(
        currentUser.following.map((friendId) => {
            return Post.find({ userId: friendId });
        })
       );
       res.json(userPost.concat(...friendPost));
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

export default router;