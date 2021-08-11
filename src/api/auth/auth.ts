import { User } from "../../models/user";

// TODO: Remove data of any type
export interface Authentication {
  login: (
    email: string,
    password: string,
    successCallback?: (data: any) => void
  ) => void;
  sendEmailVerification: (successCallback?: (data: any) => void) => void;
  sendPassword: (email: string, successCallback?: (data: any) => void) => void;
  signup: (user: User, successCallback?: (data: any) => void) => void;
}
