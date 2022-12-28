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
    name: string,
    email: string,
    status: string
}

export const UserEmptyState: User = {
    name: '',
    email: '',
    status: ''
}