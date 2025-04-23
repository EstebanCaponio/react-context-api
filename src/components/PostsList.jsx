import { Link } from "react-router-dom";
import { useList } from "../contexts/ListContext";

export default function PostsList() {

    const { posts } = useList();

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