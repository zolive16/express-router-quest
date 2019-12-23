const express = require("express");
const router = express.Router({mergeParams: true});
const tags = require("../data/tags");
const posts = require("../data/posts");

router.use("/", (req, res) => {
    res.json(tags)
});

router.use("/:tagId/posts", (req, res) => {
    let tagId = Number(req.params.tagId);
    console.log(tagId);
    res.json(posts.filter(post => post.tag_ids.includes(tagId) === true));
});

module.exports = router;