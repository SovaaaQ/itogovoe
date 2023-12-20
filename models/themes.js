const {Schema, model} = require("mongoose");

const Theme = new Schema({
    name: {type: String, required: true}
})
module.exports = model('Theme', Theme)