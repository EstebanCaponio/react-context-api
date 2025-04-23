import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ListContext = createContext();

function ListProvider({ children }) {
    const [posts, setPosts] = useState([]);

    function getPosts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                alert(err)
            })
    };

    useEffect(getPosts, []);

    return (
        <ListContext.Provider value={{ posts }}>
            {children}
        </ListContext.Provider>
    );
}

function useList() {
    const context = useContext(ListContext);
    return context;
}

export { ListProvider, useList };