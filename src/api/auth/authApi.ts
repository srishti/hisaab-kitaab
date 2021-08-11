import { Authentication } from "./auth";
import { FirebaseAuthentication } from "../firebase/firebaseAuth";
import { User } from "../../models/user";

export class AuthAPI {
  private _methods: Authentication;

  constructor() {
    this._methods = new FirebaseAuthentication();
  }

  signup(user: User, successCallback?: ((data: any) => void) | undefined) {
    this._methods.signup(user, successCallback);
  }

  login(
    email: string,
    password: string,
    successCallback?: ((data: any) => void) | undefined
  ) {
    this._methods.login(email, password, successCallback);
  }

  sendEmailVerification(successCallback?: ((data: any) => void) | undefined) {
    this._methods.sendEmailVerification(successCallback);
  }

  sendPassword(
    email: string,
    successCallback?: ((data: any) => void) | undefined
  ) {
    this._methods.sendPassword(email, successCallback);
  }
}
