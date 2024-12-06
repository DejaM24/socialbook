import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = Router();

//register 
router.post("/register", async (req, res) => {

    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        //saves user and response
        const user = await newUser.save();
        res.status(200).json(user);

    } catch(err) {
        console.log(err);
    }
});

export default router;