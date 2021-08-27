import { User } from "../../models/user";

// TODO: Remove data of any type
export interface Authentication {
  signup: (user: User, successCallback?: (data: any) => void) => void;
  login: (
    email: string,
    password: string,
    successCallback?: (data: any) => void
  ) => void;
  logout: (successCallback?: () => void) => void;
}
