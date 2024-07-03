import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function PostPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);
    const { postSlug } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
                const data = await res.json();
                if (!res.ok) {
                    setError(true);
                    setLoading(false);
                    return
                }
                if (res.ok) {
                    setPost(data.posts[0]);
                    setLoading(false);
                    setError(false);
                }

            } catch (error) {
                console.log(error);
                setError(true);
                setLoading(false);
            }
        }
        fetchPost()

    }, [postSlug])
    console.log(post)
    return (
        <div>PostPage</div>
    )
}

export default PostPage