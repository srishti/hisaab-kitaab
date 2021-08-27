import { CurrentUser, User } from "../../models/user";

export interface AuthContextData {
  accessToken: string | null;
  currentUser: CurrentUser | null;
  isAuthenticated: boolean;
  onSignup: (user: User) => void;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
}
