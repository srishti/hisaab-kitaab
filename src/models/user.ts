export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CurrentUser extends Partial<User> {
  uid: string;
  email: string;
  accessToken: string;
  displayName?: string;
  emailVerified?: boolean;
  isNewUser?: boolean;
  phoneNumber?: string;
  photoUrl?: string;
  providerId?: string;
  refreshToken?: string;
}
