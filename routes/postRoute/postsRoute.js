const express = require("express");
const router = express.Router();
const postUserController = require("/home/user-6-c1/Xclonebackend/controller/postcontroller/postUserController.js");

router.get("/post", postUserController.getAllPosts);
router.get("/post/:id", postUserController.getPostById);
router.post("/post", postUserController.createPost);
router.put("/post/:id", postUserController.updatePost);
router.delete("/post/:id", postUserController.deletePost);
module.exports = router;