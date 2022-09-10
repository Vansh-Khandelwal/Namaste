import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// Register user

export const registerUser = async(req, res) => {
    const { Username, Password, Firstname, Lastname } = req.body;

    const salt = await bcrypt.genSalt(10) //salt used to hash the password
    const hashedPass = await bcrypt.hash(Password, salt) //to hash the password so that we can't see the passswords of the users

    const newUser = new UserModel({ Username, Password: hashedPass, Firstname, Lastname })

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// login user

export const loginUser = async(req, res) => {
    const { Username, Password } = req.body;

    try {
        const user = await UserModel.findOne({ Username: Username })

        if (user) {
            const validity = await bcrypt.compare(Password, user.Password)
            validity ? res.status(200).json(user) : res.status(400).json("Wrong Password")
        } else {
            res.status(400).json("User doesn't exist")
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}