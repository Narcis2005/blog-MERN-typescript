import express from "express";
import { PostBySlug, Posts } from "../../controllers/posts";
const router = express.Router();

// @router  GET api/post/posts
// @desc    Get All Posts using parameters page and perPage
// @access  Public
router.get("/posts", Posts);

// @router  GET api/post/post/:slug
// @desc    Get Specific Post by slug
// @access  Public
router.get("/post/:slug", PostBySlug);

export default router;
