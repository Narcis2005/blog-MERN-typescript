import { props } from "../../pages/Blog";
import Post from "../Post";
import { BlogContainer } from "./BlogContainerComponents";

const BlogComponent = ({data}: {data:props}) => {
    return (
        <BlogContainer>
            {data.map((element, key) => 
                (<Post img={element.img}
                 title={element.title}
                  descriere={element.descriere}
                  key={key}/>))}
         </BlogContainer>
    )
}

export default BlogComponent;