const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    content: { type: String, trim: true, required: true },
    created_at: { type: Date, default: Date.now }
});

const postSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    title: { type: String, trim: true, required: true },
    content: { type: String, trim: true, required: true },
    like_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    comments: [commentSchema],
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", postSchema);