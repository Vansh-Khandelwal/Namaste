import bcrypt from "bcrypt"
import cloudinary from "cloudinary"

import PostModel from "../Models/postModel.js"
import mongoose from "mongoose"
import UserModel from "../Models/userModel.js"

// Create new post

export const createPost = async(req, res) => {

    // Adding images making its url and id --> Cloudinary
    let images = [];

    if (typeof(req.body.images) === "string") {
        images.push(req.body.images);
    } else {
        images = req.body.images;
    }
    // console.log(req.body.images)
    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
            folder: "posts",
        });

        imagesLinks.push({
            public_id: result.public_id,
            url: result.secure_url,
        });
    }

    req.body.images = imagesLinks;

    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get a post

export const getPost = async(req, res) => {

    const postid = req.params.id

    try {

        const post = await PostModel.findById(postid)
        res.status(200).json(post)

    } catch (error) {
        res.status(500).json(error)
    }
}

// Update a post 

export const updatePost = async(req, res) => {

    const postid = req.params.id
    const { userId } = req.body

    try {

        const post = await PostModel.findById(postid)

        if (post.userId === userId) {

            await post.updateOne({ $set: req.body })
            res.status(200).json("Post Updated")

        } else {
            res.status(403).json("Action Forbidden!!")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

// Delete a post

export const deletePost = async(req, res) => {

    const postid = req.params.id
    const { userId } = req.body

    try {

        const post = await PostModel.findById(postid)

        if (post.userId === userId) {

            await post.deleteOne()
            res.status(200).json("Post Deleted")

        } else {
            res.status(403).json("Action Forbidden!!")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

// Like/Dislike a post

export const likeDislikePost = async(req, res) => {

    const postid = req.params.id
    const { userId } = req.body

    try {

        const post = await PostModel.findById(postid)

        if (!post.likes.includes(userId)) {

            await post.updateOne({ $push: { likes: userId } })
            res.status(200).json("Post liked")

        } else {

            await post.updateOne({ $pull: { likes: userId } })
            res.status(200).json("Post Disliked")

        }

    } catch (error) {
        res.status(500).json(error)
    }
}

// Timeline of post

export const getTimelinePost = async(req, res) => {

    const userId = req.params.id

    try {

        const currentUserPosts = await PostModel.find({ userId: userId })
        const followingPosts = await UserModel.aggregate([{
                    $match: {
                        _id: new mongoose.Types.ObjectId(userId)
                            // when this will run it will return us a single document which will have _id as the userId
                    }
                },
                {
                    $lookup: {
                        // we use this when we have to match a document with another model by placing the query in other model
                        // Here we are placing the query in User Model and we want to get result from Post Model while remaining in the User Model
                        from: "posts",
                        // from which model/data base name (in mongoDB)
                        localField: "Following",
                        // local field is like local key / Local key name, here it is "Following"
                        foreignField: "userId",
                        // foreign field is like foreign key / Foreign key name, here it is "userId"
                        as: "followingPosts"
                            // where the result is to be stored
                    }
                },
                {
                    $project: {
                        followingPosts: 1,
                        // return type of the result / which fields you want to return 
                        // By default _id field is also transferred so neglect that
                        _id: 0
                    }
                }
            ])
            // aggregate is array of steps here each step is written within {}

        res.status(200).json(currentUserPosts.concat(...followingPosts[0].followingPosts).sort((a, b) => { return b.createdAt - a.createdAt }))
            // ... is spread function
            // to show both current user posts and the following users posts therefore concated them together

    } catch (error) {
        res.status(500).json(error)
    }
}