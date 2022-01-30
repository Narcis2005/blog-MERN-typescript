import { Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "../middleware/tokenCheck";
import Post from "../models/post";
import isURL from "../utils/isURL";

export const Posts = (req: Request, res: Response) => {
    const page = req.query.page as string;
    const perPage = req.query.perPage as string;
    const search = req.query.search as string;
    if (page && perPage) {
        Post.find({  
                ...(search && {$or: [ 
                    {content: {
                        $regex: search,
                        $options: "i"
                        }
                    },
                    {title:{
                        $regex: search,
                        $options: "i"
                        } }
                ]    
             })
        }
            ).sort('-createdAt')
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
    Post.find({ tags: tag }).sort('-createdAt')
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
    Post.find({ category: category }).sort('-createdAt')
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

export const AddPost = (req: IGetUserAuthInfoRequest, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const {
        title,
        imageURL,
        content,
        tags,
        category,
    }: { title: string; imageURL: string; content: string; tags: string[]; category: string } = req.body;
    if (!title) {
        res.status(401).send({ message: "You need to type a title" });
        return;
    }
    if (!imageURL) {
        res.status(401).send({ message: "You need to specify an image URL" });
        return;
    }
    if (!content) {
        res.status(401).send({ message: "Your post requires content" });
        return;
    }
    if (!category) {
        res.status(401).send({ message: "Your post should be in a category" });
        return;
    }
    if (title.length < 3 || title.length > 50) {
        res.status(401).send({ message: "Title length should be between 3 and 50 characters" });
        return;
    }
    if (!isURL(imageURL)) {
        res.status(401).send({ message: "Image URL is not a valid URL" });
        return;
    }
    if (content.length < 15 || content.length > 1000) {
        res.status(401).send({ message: "Content length should be between 15 and 1000 characters" });
        return;
    }
    if (tags.length < 1 || tags.length > 6) {
        res.status(401).send({ message: "You need to specify between 1 and 6 tags" });
        return;
    }
    const post = new Post();
    post.title = title;
    post.content = content;
    post.tags = [...tags]; //So that it doesn't refference memory address (even though I think it's ok in this case)
    post.imageURL = imageURL;
    post.category = category;
    post.slug = title.replaceAll(" ", "-").toLowerCase();
    post.description = content.slice(0, 40);
    post.createdBy = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        userId: req.user.id,
        username: req.user.username,
    };
    post.save()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((savedPost) => {
            res.send({ message: "Post published succesfully", post: savedPost });
            return;
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
            return;
        });
};
