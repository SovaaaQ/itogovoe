const {model, Schema, ObjectID} = require('mongoose')

const Comment = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    text: {type: String, required: true},
    postid: {type: Schema.Types.ObjectId, ref: "Comment", required: true},
})
module.exports = model('Comment', Comment)