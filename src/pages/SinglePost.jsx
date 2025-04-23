import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function SinglePost() {
    const { id } = useParams();
    const currentId = parseInt(id);

    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hasNextPost, setHasNextPost] = useState(false);

    function searchPostId() {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data);
                setLoading(false);
                checkNextPost(currentId + 1);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setPost(null);
                setHasNextPost(false);
            });
    }

    useEffect(searchPostId, [id]);

    const checkNextPost = (postId) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(() => {
                setHasNextPost(true);
            })
            .catch(() => {
                setHasNextPost(false);
            });
    };

    useEffect(() => {
        if (post) {
            checkNextPost(currentId + 1);
        } else {
            setHasNextPost(false);
        }
    }, [currentId, post]);

    if (loading) {
        return <div className="loading">caricamento...</div>
    }

    if (!post) {
        return <div>Post non trovato.</div>
    }

    return (
        <>
            <div className="blog-post-card">
                <h3 className="post-card-title">{post.title}</h3>
                <div className="post-card-body">
                    <p className="post-card-text">{post.body}</p>
                    <hr className="post-card-separator" />
                </div>
                <div className="post-card-actions">
                    <button className="btn-prev" onClick={() => navigate(`/blog/${currentId - 1}`)} disabled={currentId <= 1}>
                        INDIETRO
                    </button>
                    <button className="btn-next" onClick={() => navigate(`/blog/${currentId + 1}`)} disabled={!hasNextPost}>
                        AVANTI
                    </button>
                </div>
            </div>
        </>
    )
}