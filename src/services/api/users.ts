import { User } from "@/types";
import { clientApi } from "./config";

const getUserById = async (
    userId: number
): Promise<User> => {
    const { data } = await clientApi.get<User>(
        `users/${userId}`
    )
    return data;
}

export const usersApi = {
    getUserById
}
