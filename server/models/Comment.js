const mongoose = require('mongoose');


const CommentSchema = mongoose.Schema({
    body: String,
    author: String,
    redditID: String,
    isHateSpeech: Boolean,
    subreddit: String
});

const Comment = mongoose.model("comment", CommentSchema);
module.exports = Comment;