import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register user

export const registerUser = async(req, res) => {

    const { Password } = req.body

    if (Password !== undefined) {
        const salt = await bcrypt.genSalt(10) //salt used to hash the password
        const hashedPass = await bcrypt.hash(req.body.Password, salt) //to hash the password so that we can't see the passswords of the users
        req.body.Password = hashedPass

        const newUser = new UserModel(req.body);

        const { Username } = req.body

        try {

            const oldUser = await UserModel.findOne({ Username })

            if (oldUser) {
                return res.status(400).json({ message: "Username is already registered!" })
            } else {
                const user = await newUser.save();

                const token = jwt.sign({
                    username: user.Username,
                    id: user._id
                }, process.env.JWT_KEY, { expiresIn: '1h' })

                res.status(200).json({ user, token });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

// login user

export const loginUser = async(req, res) => {
    const { Username, Password } = req.body;

    try {
        const user = await UserModel.findOne({ Username: Username })

        if (user) {
            const validity = await bcrypt.compare(Password, user.Password)

            if (!validity) {
                res.status(400).json("Wrong Password")
            } else {
                const token = jwt.sign({
                    username: user.Username,
                    id: user._id
                }, process.env.JWT_KEY, { expiresIn: '1h' })
                res.status(200).json({ user, token })
            }

        } else {
            res.status(400).json("User doesn't exist")
        }

    } catch (error) {
        res.status(500).json(error);
    }
}