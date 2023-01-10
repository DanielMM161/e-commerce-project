export interface ApiUser {
    id: number
    email: string
    password: string
    name: string
    role: string
    avatar: string
    creationAt: string
    updatedAt: string
}

export interface User {
    id: number,
    email: string,
    password: string,
    name: string,
    role: string,
    avatar: string,
}

export interface IUserAuth {
    email: string
    password: string
}

export interface IUserRegister extends IUserAuth {
    name: string
    avatar?: string
}

interface IUserSliceState {
    user: User | null
    isLoading: boolean
    isError: boolean
}
  
export const userEmptyState: IUserSliceState = {
    user: null,
    isLoading: false,
    isError: false
}