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

    } catch (err) {
        res.status(500).json(err);
    }
});

//login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).send("User not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(404).send("Incorrect password");

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }

});

export default router;