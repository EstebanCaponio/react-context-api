import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useList } from "../contexts/ListContext";

export default function PostsList() {

    // // parte nel contect fino a useeffect
    // const [posts, setPosts] = useState([]);

    // function getPosts() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             setPosts(res.data)
    //         })
    // };

    const { posts } = useList();

    // useEffect(getPosts, []);

    return (
        <>
            <div className="posts-grid">
                {posts.map(post =>
                    <div key={post.id} className="post-container">
                        <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>)}
            </div>
        </>
    )
}