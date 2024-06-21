"use strict";
let Models = require("../models"); // matches index.js

const getPosts = (res) => {
    // finds all users
    Models.Post.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createPost = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data)
    new Models.Post(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const addLike = (req, res) => {
    const { id } = req.params;
    const { user_id } = req.body;
    
    console.log(req.body)
    Models.Post.findByIdAndUpdate(id, {$addToSet: { like_ids : user_id }}, {new: true})
        .then(updatedPost => {
            if(!updatedPost) { res.send({result: 404, error: "Post not found"})}
            res.send({ result: 200, data: updatedPost})
        })
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createComment = (req, res) => {
    const { id } = req.params;

    console.log(req.body)
    Models.Post.findById(id)
        .then(post => {
            if(!post) res.send({ result: 404, error: "Post not found"});
            post.comments.push(req.body);
            return post.save();
        })
        .then(updatedPost => res.send({ result: 200, data: updatedPost }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const updatePost = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deletePost = (req, res) => {
    // deletes the user matching the ID from the param
    Models.Post.findByIdAndDelete(req.params.id)
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getPosts, createPost, updatePost, deletePost, addLike, createComment
}