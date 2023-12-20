const Post = require("../models/post")
const Theme = require("../models/themes")

class PostControl {

    async getPost(req, res) {
        const post = await Post.findById(req.params.id)

        const theme = await Theme.findById(post.themeid)

        const newPost = {...post.toJSON(), theme: theme.name}

        return res.json(newPost)
    }
}

module.exports = new PostControl()