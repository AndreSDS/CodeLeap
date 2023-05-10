import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";
import { PostResponse } from "../schemas";
import { orderByDate } from "../helpers/utils";

interface PostState {
    posts: Array<PostResponse>;
    currentPost: PostResponse | null;
}

const initialState: PostState = {
    posts: [],
    currentPost: null,
};

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<PostResponse[]>) => {
            state.posts = orderByDate(action.payload);
        },
        addPost: (state, action: PayloadAction<PostResponse>) => {
            state.posts.push(action.payload);
        },
        editPost: (state, action: PayloadAction<PostResponse>) => {
            const postListUpdated: PostResponse[] = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    post = action.payload;
                }
                return post;
            });
            state.posts = postListUpdated;
        },
        removePost: (state, action: PayloadAction<number>) => {
            const postListUpdated: PostResponse[] = state.posts.filter(
                (post) => post.id !== action.payload
            );
            state.posts = postListUpdated;
        }
    },
});

export const { setPosts, addPost, editPost, removePost } = postSlice.actions;
export const usePosts = (state: RootState) => state.posts;
export const postsReducer = postSlice.reducer;
