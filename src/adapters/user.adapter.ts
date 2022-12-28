import { ApiUser } from "../models";

export const createUseradapter = (user: any) => ({
    name: user.name,
    email: user.email,
    status: ""
})