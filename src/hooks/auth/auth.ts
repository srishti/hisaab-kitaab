import { CurrentUser, User } from "../../models/user";

export interface AuthContextData {
  currentUser?: CurrentUser;
  isLoggedIn: boolean;
  onSignup: (user: User) => void;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
}
