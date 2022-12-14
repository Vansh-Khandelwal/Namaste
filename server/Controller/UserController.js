import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// get all the users

export const getAllUsers = async(req, res) => {
    try {
        let users = await UserModel.find()

        users = users.map((user) => {
            const { Password, ...otherDetails } = user._doc
            return otherDetails
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}


// getting the user

export const getUser = async(req, res) => {

    const id = req.params.id
    const user = await UserModel.findById(id)

    try {
        const { Password, ...otherdetails } = user._doc //to separate the paswword from the other details and only show other details
        if (user) {
            res.status(200).json(otherdetails);
        } else {
            res.status(404).json("No such user exists");
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


// updating the user

export const updateUser = async(req, res) => {
    const id = req.params.id
    const { _id, currentUserAdminStatus, Password } = req.body

    if (id === _id) {
        try {

            if (Password) {
                const salt = await bcrypt.genSalt(10);
                req.body.Password = await bcrypt.hash(Password, salt)
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

            const token = jwt.sign({
                Username: user.Username,
                id: user._id
            }, process.env.JWT_KEY, { expiresIn: '1h' })

            res.status(200).json({ user, token })
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("Acces Denied! You can only change your own status")
    }
}

// Deleting a user

export const deleteUser = async(req, res) => {
    const id = req.params.id
    const { currentUserId, currentUserAdminStatus } = req.body

    if (currentUserId === id || currentUserAdminStatus) {
        try {

            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted")

        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("Access Denied! you can only delete your own profile")
    }

}

// follow another user

export const followUser = async(req, res) => {
    const id = req.params.id //id of user to be followed
    const { _id } = req.body

    if (id === _id) {
        res.status(403).json("Action forbidden")
    } else {
        try {

            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(_id)

            if (!followUser.Followers.includes(_id)) {
                await followUser.updateOne({ $push: { Followers: _id } })
                await followingUser.updateOne({ $push: { Following: id } })
                res.status(200).json("User followed")
            } else {
                res.status(403).json("User is already followed by you")
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

// unfollow a user


export const unfollowUser = async(req, res) => {
    const id = req.params.id //id of user to be followed
    const { _id } = req.body

    if (id === _id) {
        res.status(403).json("Action forbidden")
    } else {
        try {

            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(_id)

            if (followUser.Followers.includes(_id)) {
                await followUser.updateOne({ $pull: { Followers: _id } })
                await followingUser.updateOne({ $pull: { Following: id } })
                res.status(200).json("User Unfollowed!")
            } else {
                res.status(403).json("User is already followed by you")
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}