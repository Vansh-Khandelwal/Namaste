import UserModel from "../Models/userModel.js";

// getting the user

export const getUser = async(req, res) => {

    const id = req.params.id;
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


// update a user