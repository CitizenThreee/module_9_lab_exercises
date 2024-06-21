"use strict";

const axios = require("axios");

const getRandomEmoji = async (res) => {
    const emoji = await axios.get('https://emojihub.yurace.pro/api/random');
    res.send({ result: '200', data: emoji.data.htmlCode[0]})
}

module.exports = {
    getRandomEmoji
}