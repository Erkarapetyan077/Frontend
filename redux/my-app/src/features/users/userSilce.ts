import { type PayloadAction } from "@reduxjs/toolkit";
import { getUsers, removeUser } from "./api";
import { createAppSlice } from "../../app/createAppSlice";

export type User = {
    id: number
    name: string
    surname: string
    salary: number
    gender: string
}

type State = {
    list: User[]
}


const initialState: State = { list: [] }

export const userSlice = createAppSlice({
    name: "users",
    initialState,
    reducers: create => ({
        getAllUsers: create.asyncThunk(async () => {
            const users = await getUsers();
            return users
        }, {
            fulfilled: (state, action: PayloadAction<User[]>) => {
                state.list = action.payload
            }
        }),
        deleteUser: create.asyncThunk<User, number>(removeUser, {
            fulfilled: (state, action: PayloadAction<User>) => {
                state.list = state.list.filter(user => user.id !== action.payload.id)
            }
        })
    }),

})

export const { getAllUsers, deleteUser } = userSlice.actions