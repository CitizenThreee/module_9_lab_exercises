let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
})

// Adds a POST route to create a new user
router.post('/create', (req, res) => {
    Controllers.postController.createPost(req.body, res);
})

router.post('/:id/likes/add', (req, res) => {
    Controllers.postController.addLike(req, res);
})

router.post('/:id/comments/create', (req, res) => {
    Controllers.postController.createComment(req, res);
})

router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req, res)
})

module.exports = router;