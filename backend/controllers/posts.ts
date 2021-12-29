import { Request, response, Response } from "express";
import Post from "../models/post";

export const Posts = async (req:Request, res:Response) => {
    const page = req.query.page as string;
    const perPage = req.query.perPage as string;
    if (page && perPage) {
        //Alghoritm to send data absed on page and perPage params
        Post.find()
            .then(posts => {
                const newData = posts.slice(Number(page) * Number(perPage) - Number(perPage), Number(page) * Number(perPage));
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
            .catch(error => {
                res.status(500).send(error)
            })

    }
      
}

export const PostBySlug = async (req:Request, res:Response) => {
    const slug = req.params.slug;
    Post.findOne({slug: slug})
        .then(post => {
            if (!post) {
                res.status(404).send({
                    message: "Can't find specific post"
                })
                return;
            }
            res.send(post);
        })
        .catch(error => {
            res.status(500).send(error);
            console.log(error)
        })
}

