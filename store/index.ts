import { createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore, combineReducers } from "redux";
import { comments, CommentState } from "./comments";
import { post, PostState } from "./post";


export interface State {
    post: PostState,
    comments: CommentState
}

const combinedReducer = combineReducers({ post, comments })
const makeStore: MakeStore<State> = () => createStore(combinedReducer)

export const store = createWrapper<State>(
    makeStore,
    { debug: true }
)
