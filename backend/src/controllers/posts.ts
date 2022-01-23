import { Request, Response } from "express";
import Post from "../models/post";

export const Posts = (req: Request, res: Response) => {
    const page = req.query.page as string;
    const perPage = req.query.perPage as string;
    if (page && perPage) {
        Post.find()
            .then((posts) => {
                //Alghoritm to send data based on page and perPage params
                const slicedData = posts.slice(
                    Number(page) * Number(perPage) - Number(perPage),
                    Number(page) * Number(perPage),
                );
                //Sending only some parts of the post to be efficient
                const newData = slicedData.map((newPost) => {
                    return {
                        description: newPost.description,
                        title: newPost.title,
                        imageURL: newPost.imageURL,
                        slug: newPost.slug,
                    };
                });
                const totalPages = Math.ceil(posts.length / Number(perPage));
                res.send({
                    totalPages: totalPages,
                    page: parseInt(page),
                    numberOfElements: posts.length,
                    perPage: parseInt(perPage),
                    results: newData,
                });
                return;
            })
            .catch((error) => {
                res.status(500).send(error);
                console.log(error);
            });
    }
};

export const PostBySlug = (req: Request, res: Response) => {
    const slug = req.params.slug;
    if (!slug) {
        res.status(401).send({
            message: "Please specify the slug",
        });
    }
    Post.findOne({ slug: slug })
        .then((post) => {
            if (!post) {
                res.status(404).send({
                    message: "Can't find specific post",
                });
                return;
            }
            res.send(post);
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
        });
};

export const GetPostsByTag = (req: Request, res: Response) => {
    const tag = req.query.tag as string;
    const page = req.query.page as string;
    const perPage = req.query.perPage as string;
    if (!tag) {
        res.status(401).send({
            message: "Please specify the tag",
        });
        return;
    }
    Post.find({ tags: tag })
        .then((posts) => {
            //Alghoritm to send data based on page and perPage params
            const slicedData = posts.slice(
                Number(page) * Number(perPage) - Number(perPage),
                Number(page) * Number(perPage),
            );
            //Sending only some parts of the post to be efficient
            const newData = slicedData.map((newPost) => {
                return {
                    description: newPost.description,
                    title: newPost.title,
                    imageURL: newPost.imageURL,
                    slug: newPost.slug,
                };
            });
            const totalPages = Math.ceil(posts.length / Number(perPage));
            res.send({
                totalPages: totalPages,
                page: parseInt(page),
                numberOfElements: posts.length,
                perPage: parseInt(perPage),
                results: newData,
            });
            return;
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
        });
};

export const GetPostsByCategory = (req: Request, res: Response) => {
    const category = req.query.category as string;
    const page = req.query.page as string;
    const perPage = req.query.perPage as string;
    if (!category) {
        res.status(401).send({
            message: "Please specify the category",
        });
        return;
    }
    if (!page || !perPage) {
        res.status(401).send({
            message: "Please specify the page and perPage params",
        });
        return;
    }
    Post.find({ category: category })
        .then((posts) => {
            //Alghoritm to send data based on page and perPage params
            const slicedData = posts.slice(
                Number(page) * Number(perPage) - Number(perPage),
                Number(page) * Number(perPage),
            );
            //Sending only some parts of the post to be efficient
            const newData = slicedData.map((newPost) => {
                return {
                    description: newPost.description,
                    title: newPost.title,
                    imageURL: newPost.imageURL,
                    slug: newPost.slug,
                };
            });
            const totalPages = Math.ceil(posts.length / Number(perPage));
            res.send({
                totalPages: totalPages,
                page: parseInt(page),
                numberOfElements: posts.length,
                perPage: parseInt(perPage),
                results: newData,
            });
            return;
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
        });
};
