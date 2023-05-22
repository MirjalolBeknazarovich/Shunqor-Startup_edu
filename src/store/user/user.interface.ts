import { UserType } from "src/interface/user.interface";

export interface UserIntialStateType {
    user: UserType | null;
    isLoading: boolean;
}

export interface AuthTokens {
    refreshToken: string;
    accessToken: string;
}

export interface AuthUserResponse extends AuthTokens {
    user: UserType;
}

export interface InterfaceEmailAndPassword {
    password: string;
    email: string;
}