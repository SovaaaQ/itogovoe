const Comment = require("../models/comment")

class CommentControl {

    async createComment(req,res) {
        try {
            const {name, email, text, postid} = req.body;
            const comment = new Comment({name, email, text, postid});
            await comment.save();
            return res.json({message: "201 created"});
        } catch (e) {
            console.log(e)
            res.send({message: "500 Server Error"})
        }
    }
}

module.exports = new CommentControl()