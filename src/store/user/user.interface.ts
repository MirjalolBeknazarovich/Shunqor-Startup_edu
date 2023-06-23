import { UserType } from "src/interface/user.interface";

export interface UserIntialStateType {
    user: UserType | null;
    isLoading: boolean;
    error: string | null | unknown;
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

export interface InterfaceEmailAndOtp { 
    email: string, 
    otpVerification: string 
}