"use strict";

const Models = require("../models");

const getPosts = (res) => {
    Models.Post.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const createPost = (data, res) => {
    Models.Post.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const addLike = (req, res) => {
    const { id } = req.params;
    const { user_id } = req.body;
    
    console.log(req.body)
    Models.Like.create({ postId: id, userId: user_id }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const createComment = (req, res) => {
    const { id } = req.params;
    const { content, user_id } = req.body;

    console.log(req.body)
    Models.Comment.create({ postId: id, userId: user_id, content: content }).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const updatePost = (req, res) => {
    Models.Post.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deletePost = (req, res) => {
    Models.Post.destroy({ where: { id: req.params.id } })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getPosts, createPost, updatePost, deletePost, addLike, createComment
}