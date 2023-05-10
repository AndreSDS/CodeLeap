import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../actions/postSlice";
import { userReducer } from "../actions/userSlice";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export const useStoreDispatch: () => StoreDispatch = useDispatch;

