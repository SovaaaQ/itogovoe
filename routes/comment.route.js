const comment = require("../control/comment")
const {Router} = require("express")

const router = new Router();

router.post('/create', comment.createComment)

module.exports = router;