import PostModel from "../Models/postModel.js"
import bcrypt from "bcrypt"

// Create new post

export const createPost = async(req, res) => {

    const newPost = new PostModel(req.body)

    try {

        await newPost.save()
        res.status(200).json("Post Created!")

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