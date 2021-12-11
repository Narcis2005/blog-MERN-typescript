import express, {Request, Response, Application} from 'express';
import cors from 'cors';

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use(cors())

const posts = [
    {
        title: "Primul titlu",
        img: "https://images.unsplash.com/photo-1638309024386-64fbf065305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        descriere: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam! Eaque vitae nemo culpa natus vero sequi reprehenderit ducimus, obcaecati a necessitatibus, velit numquam possimus! Fugit tempore, velit cupiditate nobis earum eius provident enim ea, suscipit dolor fugiat atque expedita recusandae aperiam optio ipsam reiciendis odit architecto ad. Provident iste nesciunt numquam vero fuga voluptas vitae dolorem sunt temporibus a, ea eligendi obcaecati optio, porro voluptatibus quaerat harum. Ipsa, beatae officia minima facere omnis alias vero labore eligendi doloremque aliquam nam ipsum consequuntur ducimus fuga perspiciatis eius. Cupiditate reiciendis ea itaque, odio a, reprehenderit officia ex mollitia voluptatum nobis id."
    },
    {
        title: "Al doilea titlu",
        img: "https://images.unsplash.com/photo-1638190654278-1f6f7b742914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        descriere: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, a?"
    },
    {
        title: "Al treilea titlu",
        img: "https://images.unsplash.com/photo-1638210574685-e9d0ad824f6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        descriere: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, a?"
    },
    {
        title: "Primul titlu",
        img: "https://images.unsplash.com/photo-1638309024386-64fbf065305f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        descriere: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam! Eaque vitae nemo culpa natus vero sequi reprehenderit ducimus, obcaecati a necessitatibus, velit numquam possimus! Fugit tempore, velit cupiditate nobis earum eius provident enim ea, suscipit dolor fugiat atque expedita recusandae aperiam optio ipsam reiciendis odit architecto ad. Provident iste nesciunt numquam vero fuga voluptas vitae dolorem sunt temporibus a, ea eligendi obcaecati optio, porro voluptatibus quaerat harum. Ipsa, beatae officia minima facere omnis alias vero labore eligendi doloremque aliquam nam ipsum consequuntur ducimus fuga perspiciatis eius. Cupiditate reiciendis ea itaque, odio a, reprehenderit officia ex mollitia voluptatum nobis id."
    },
    {
        title: "Al doilea titlu",
        img: "https://images.unsplash.com/photo-1638190654278-1f6f7b742914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        descriere: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, a?"
    },
    {
        title: "Al treilea titlu",
        img: "https://images.unsplash.com/photo-1638210574685-e9d0ad824f6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        descriere: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, a?"
    }
]
app.get("/post/posts", (req:Request, res:Response) => {
    const numberOfPosts= req.query.numberofposts as string;
    if(numberOfPosts) {
        res.send(posts.slice(0, parseInt(numberOfPosts)));
        return;
    }   
    res.send(posts);

})
app.get("/api/posts", async (req:Request, res:Response) => {
    res.send(posts);
})
app.get("/api/post/:slug", async (req:Request, res:Response) => {
    const slug = req.params.slug;
    const postToSend = posts.find(post => post.title.replaceAll(" ", "-").toLowerCase() === slug);
    if (!postToSend) {
        res.status(404).send({
            message: "Can't find specific post"
        })
        return;
    }
    res.send(postToSend);
})
//Creating port variable from env variable or setting it mannualy

const PORT = process.env.PORT || 5000;


//Listening on the PORT variable and then console logging the port

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})