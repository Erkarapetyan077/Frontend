import axios from "axios";
import type { User } from "./userSilce";

export const getUsers = async () => {
    const response = await axios.get<User[]>("http://localhost:4000/users")
    return response.data
}

export const removeUser = async (id: number) => {
    const response = await axios.delete(`http://localhost:4000/users/${id}`)
    return response.data
}