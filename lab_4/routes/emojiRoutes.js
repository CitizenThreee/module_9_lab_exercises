const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/random', (req, res) => {
    Controllers.emojiController.getRandomEmoji(res);
})

module.exports = router;