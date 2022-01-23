import express from "express";
import { GetPostsByCategory, GetPostsByTag, PostBySlug, Posts } from "../../controllers/posts";
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

export default router;
