import { useContext } from "react";
import { PostContext } from "../Context/AppContext";
import Post from "./Post";

const Posts = () => {
    const {posts} = useContext(PostContext)    
    return (
        <div className="container"> 
            {posts.map((item,id) => <Post key={id} data={item} />)}
        </div>
    )
}


export default Posts;