export interface IUser {
    _id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
}

export interface LoginPayload {
    username: string;
    password: string;
}

export interface RegisterPayload {
    name: string;
    email: string;
    username: string;
    password: string;
}
