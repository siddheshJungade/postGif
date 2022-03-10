import React,   { useReducer } from "react";
import AppReducer from "./AppReducer";

const initialPostState = {
    posts: [],
}

export const PostContext = React.createContext()



const AppContext = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialPostState)

    const addPost = (post) => {
        dispatch({
            type: 'ADD_POST',
            payLoad: post,
        })
    }

    return (
        <PostContext.Provider value={{ ...state, addPost }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default AppContext;