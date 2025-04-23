import PostsList from "../components/PostsList";
import { useList } from "../contexts/ListContext";

export default function ListaDeiPost() {

    // const { posts } = useList();

    return (
        <>
            <PostsList />
            {/* {posts} */}
        </>
    )
}