export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CurrentUser extends Partial<User> {
  displayName?: string;
  email: string;
  emailVerified?: boolean;
  isNewUser?: boolean;
  phoneNumber?: string;
  photoUrl?: string;
  providerId?: string;
  refreshToken?: string;
  uid: string;
}
