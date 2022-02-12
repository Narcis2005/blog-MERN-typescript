import express from "express";
import {
    GetPostsByCategory,
    GetPostsByTag,
    PostBySlug,
    Posts,
    AddPost,
    AddComment,
    DeletePost,
    DeleteComment,
    UpdatePost,
} from "../../controllers/posts";
import check from "../../middleware/tokenCheck";
const router = express.Router();

// @router  GET api/post/posts
// @desc    Get All Posts using parameters page and perPage
// @access  Public
router.get("/posts", Posts);

// @router  GET api/post/post/:slug
// @desc    Get Specific Post by slug
// @access  Public
router.get("/post/:slug", PostBySlug);

// @router  GET api/post/posts-by-tag
// @desc    Get posts by specific tag
// @access  Public
router.get("/posts-by-tag", GetPostsByTag);

// @router  GET api/post/posts-by-category
// @desc    Get posts by specific category
// @access  Public
router.get("/posts-by-category", GetPostsByCategory);

// @router  POST api/post/add-post
// @desc    Add a new post
// @access  Private
router.post("/add-post", check, AddPost);

// @router  POST api/post/add-comment
// @desc    Add a new comment to a post
// @access  Private
router.post("/add-comment", check, AddComment);

// @router  Delete api/post/delete-post
// @desc    Delete a post
// @access  Private
router.delete("/delete-post", check, DeletePost);

// @router  Delete api/post/delete-comment
// @desc    Delete a comment
// @access  Private
router.delete("/delete-comment", check, DeleteComment);

// @router  PUT api/post/update-post
// @desc    Update an existent post
// @access  Private
router.put("/update-post", check, UpdatePost);

export default router;
