const mongoose = require("mongoose");
const config = require("config")
const express = require("express");
const postsRouter = require("./routes/post.router")
const commentsRouter = require("./routes/comment.route")

const app = express();
const PORT = config.get("serverPort");

app.use(express.json())

app.use("/posts", postsRouter)
app.use("/comments", commentsRouter)

const start = async () => {
    mongoose.connect(config.get("mongo"), {
        dbName: "blog"
    }).then(() => {

    })
    app.listen(PORT, () => {
        console.log(`Server started on http://localhost:${PORT}`)
    })
}
start()