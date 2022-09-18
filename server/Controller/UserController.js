import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

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
    const { currentUserId, currentUserAdminStatus, Password } = req.body

    if (id === currentUserId || currentUserAdminStatus) {
        try {

            if (Password) {
                const salt = await bcrypt.genSalt(10);
                req.body.Password = await bcrypt.hash(Password, salt)
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

            res.status(200).json(user)
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
    const { currentUserId } = req.body

    if (id === currentUserId) {
        res.status(403).json("Action forbidden")
    } else {
        try {

            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)

            if (!followUser.Followers.includes(currentUserId)) {
                await followUser.updateOne({ $push: { Followers: currentUserId } })
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
    const { currentUserId } = req.body

    if (id === currentUserId) {
        res.status(403).json("Action forbidden")
    } else {
        try {

            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)

            if (followUser.Followers.includes(currentUserId)) {
                await followUser.updateOne({ $pull: { Followers: currentUserId } })
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