import { RoleUser } from "./constants.interface";

export interface UserType {
    email?: string;
    fullName1?: string;
    role?: RoleUser;
    createdAt?: string;
    password?: string;
}