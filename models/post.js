const {model, Schema, ObjectID} = require('mongoose')

const Post = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    numlike: {type: Number, required: true},
    date: {type: Date, required:true},
    themeid: {type: Schema.Types.ObjectId, ref: "Post"},
})
module.exports = model('Post', Post)