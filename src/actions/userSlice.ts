import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";
import { User } from "../schemas";

interface UserState {
    user: User;
}

const initialState: UserState = {
    user: {} as User,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export const useUser = (state: RootState) => state.user;

export const userReducer = userSlice.reducer;
