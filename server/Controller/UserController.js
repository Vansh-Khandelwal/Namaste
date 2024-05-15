import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cloudinary from "cloudinary";

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

            // Image Changes (ProfileImg/CoverImg) ------------------------------------------
            // Adding images making its url and id --> Cloudinary

            // ProfileImg ----------------------
            if (req.body.ProfileImg && typeof(req.body.ProfileImg) === "string") {
                let image = "";

                image = req.body.ProfileImg;
                // console.log(req.body.ProfileImg);

                // Deleting Image
                const user = await UserModel.findById(_id);

                if (user.ProfileImg.public_id) {
                    const delImg = await cloudinary.v2.uploader.destroy(user.ProfileImg.public_id);
                }

                const result_prof = await cloudinary.v2.uploader.upload(image, {
                    folder: "profile",
                });

                req.body.ProfileImg = {
                    public_id: result_prof.public_id,
                    url: result_prof.secure_url,
                };
            } else {
                const user = await UserModel.findById(_id);
                req.body.ProfileImg = user.ProfileImg
            }

            // CoverImg -----------------------
            if (req.body.CoverImg && typeof(req.body.CoverImg) === "string") {
                let image = "";

                image = req.body.CoverImg;
                // console.log(req.body.CoverImg)

                const user = await UserModel.findById(_id);

                // console.log(user.CoverImg)
                if (user.CoverImg.public_id) {
                    const delImg = await cloudinary.v2.uploader.destroy(user.CoverImg.public_id);
                }

                const result_cov = await cloudinary.v2.uploader.upload(image, {
                    folder: "cover",
                });

                // console.log(req.body)

                req.body.CoverImg = {
                    public_id: result_cov.public_id,
                    url: result_cov.secure_url,
                };
            } else {
                const user = await UserModel.findById(_id);
                req.body.CoverImg = user.CoverImg
            }

            // console.log(req.body)
            // Updating user ----------------------------------------------------------
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

            const token = jwt.sign({
                Username: user.Username,
                id: user._id
            }, process.env.JWT_KEY, { expiresIn: '1h' })

            // Don't Touch the format correlates to the frontend states
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

    // console.log(id, _id)

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

    // console.log(id, _id)

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
                res.status(403).json("User is already unfollowed by you")
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}