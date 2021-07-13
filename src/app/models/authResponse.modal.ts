import { User } from "./user.modal";

export interface AuthResponse {
    httpStatusCode: number;
    message: string;
    token: string;
    user: User;
}