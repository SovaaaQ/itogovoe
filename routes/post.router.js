const post = require ("../control/post")
const {Router} = require("express")

const router = new Router();

router.get('/:id', post.getPost)

module.exports = router;