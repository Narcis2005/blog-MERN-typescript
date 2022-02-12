import { Request, Response } from "express";
import { IGetUserAuthInfoRequest } from "../middleware/tokenCheck";
import Post from "../models/post";
import isURL from "../utils/isURL";
import { Comment } from "../models/comment";
export const Posts = (req: Request, res: Response) => {
    const page = req.query.page as string;
    const perPage = req.query.perPage as string;
    const search = req.query.search as string;
    if (page && perPage) {
        Post.find({
            ...(search && {
                $or: [
                    {
                        content: {
                            $regex: search,
                            $options: "i",
                        },
                    },
                    {
                        title: {
                            $regex: search,
                            $options: "i",
                        },
                    },
                ],
            }),
        })
            .sort("-createdAt")
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
            // https://stackoverflow.com/questions/10123953/how-to-sort-an-object-array-by-date-property
            // This sorts the comments
            post.comments.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
            // This sorts the replies
            post.comments.forEach((comment) => {
                comment.replies.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
            });
            // console.log(post.comments);
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
        .sort("-createdAt")
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
        .sort("-createdAt")
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
            res.send({ message: "Post published successfully", post: savedPost });
            return;
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
            return;
        });
};
export const AddComment = (req: IGetUserAuthInfoRequest, res: Response) => {
    const id = req.body.id as string;
    const content = req.body.content as string;
    if (!content) {
        res.status(401).send({ message: "You need to specify the content of the comment" });
        return;
    }
    if (!id) {
        res.status(401).send({ message: "You need to specify the id of the post" });
        return;
    }
    Post.updateOne(
        { _id: id },
        {
            $push: {
                comments: [
                    {
                        createdBy: {
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            userId: req.user.id,
                            username: req.user.username,
                            imageURL: req.user.imageURL,
                        },
                        content: content,
                        createdAt: new Date(),
                    },
                ],
            },
        },
    )
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((post) => {
            res.send({ message: "Comment added successfully" });
            return;
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
            return;
        });
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DeletePost = (req: IGetUserAuthInfoRequest, res: Response) => {
    const _id = req.body.id as string;
    if (!_id) {
        res.status(401).send({ message: "You need to specify the id of the post" });
        return;
    }
    Post.findById(_id)
        .then((post) => {
            if (!post) {
                res.status(404).send({ message: "The id does not match any post" });
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            if (!post.createdBy.userId.equals(req.user._id)) {
                res.status(403).send({ message: "You don't have permission to delete this post" });
                return;
            }
            post.remove()
                .then((data) => {
                    res.send({ data: data, message: "Post deleted successfully" });
                })
                .catch((error) => {
                    res.status(500).send(error);
                    console.log(error);
                    return;
                });
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
            return;
        });
};

export const DeleteComment = (req: IGetUserAuthInfoRequest, res: Response) => {
    const postId = req.body.postId as string;
    const commentId = req.body.commentId as string;
    const parentId = req.body.parentId as string;
    if (!postId) {
        res.status(401).send({ message: "You need to specify the id of the post" });
        return;
    }
    if (!commentId) {
        res.status(401).send({ message: "You need to specify the id of the comment" });
        return;
    }
    Post.findById(postId)
        .then((post) => {
            let foundComment;
            let index;
            //Find the comment and its index
            if (!parentId) {
                foundComment = post.comments.find((comment) => comment.id === commentId);
                index = post.comments.indexOf(foundComment);
            } else {
                foundComment = post.comments
                    .find((comment) => comment.id === parentId)
                    .replies.find((comment) => comment.id === commentId);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                index = post.comments.find((comment) => comment.id === parentId).replies.indexOf(foundComment);
            }

            //Edge cases
            if (!foundComment) {
                res.status(404).send({ message: "Comment does not exists" });
                return;
            }

            if (!foundComment.createdBy.userId === req.user.id) {
                res.status(403).send({ message: "You don't have permission to delete this post" });
                return;
            }

            //Changing the array for specific case
            if (!parentId) {
                post.comments.splice(index, 1);
            } else {
                post.comments.find((comment) => comment.id === parentId).replies.splice(index, 1);
            }
            //Save the whole post after the comment was deleted
            post.save()
                .then((data) => {
                    res.send({ data: data, message: "Comment deleted successfully" });
                    return;
                })
                .catch((error) => {
                    res.status(500).send(error);
                    console.log(error);
                    return;
                });
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
            return;
        });
};
export const UpdatePost = (req: IGetUserAuthInfoRequest, res: Response) => {
    const id = req.body.id as string;
    const newContent = req.body.content as string;
    if (!id) {
        res.status(401).send({ message: "You need to specify the id of the post" });
        return;
    }
    if (!newContent) {
        res.status(401).send({ message: "You need to specify the new content of the post" });
        return;
    }
    Post.findById(id)
        .then((post) => {
            if (!post) {
                res.status(404).send({ message: "No post found with this id" });
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            if (!post.createdBy.userId.equals(req.user.id)) {
                res.status(403).send({ message: "You don't have permission to update this post" });
                return;
            }
            post.content = newContent;
            post.save()
                .then((data) => {
                    res.send({ data: data, message: "Post updated successfully" });
                    return;
                })
                .catch((error) => {
                    res.status(500).send(error);
                    console.log(error);
                    return;
                });
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
            return;
        });
};
export const AddReply = (req: IGetUserAuthInfoRequest, res: Response) => {
    const postId = req.body.postId as string;
    const commentId = req.body.commentId as string;
    const content = req.body.content as string;
    if (!postId) {
        res.status(401).send({ message: "You need to specify the id of the post" });
        return;
    }
    if (!commentId) {
        res.status(401).send({ message: "You need to specify the id of the parent comment" });
        return;
    }
    if (!content) {
        res.status(401).send({ message: "You need to specify the content of the reply" });
        return;
    }
    Post.findById(postId)
        .then((post) => {
            if (!post) {
                res.status(404).send({ message: "No post with this id" });
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            const foundComment = post.comments.find((comment) => comment._id.equals(commentId));
            if (!foundComment) {
                res.status(404).send({ message: "No comment on specified post with this id" });
                return;
            }
            const index = post.comments.indexOf(foundComment);
            const newComment = new Comment({
                createdBy: {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    userId: req.user.id,
                    username: req.user.username,
                    imageURL: req.user.imageURL,
                },
                content: content,
                createdAt: new Date(),
            });
            post.comments[index].replies.push(newComment);
            post.save()
                .then((data) => {
                    res.send({ message: "Reply added successfully", data: data });
                    return;
                })
                .catch((error) => {
                    res.status(500).send(error);
                    console.log(error);
                    return;
                });
            return;
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log(error);
            return;
        });
};
