export interface User {
    id: number,
    email: string,
    password: string,
    name: string,
    role: string,
    avatar: string,
    creationAt: string
}

export interface IUpdateUser {
    id: number
    email: string
    fullName: string
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