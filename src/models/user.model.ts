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
  
export const userInitialState: IUserSliceState = (() => {
    const data = JSON.parse(localStorage.getItem('user') ?? 'null')
    return {
        user: data,
        isLoading: false,
        isError: false
    }
})()