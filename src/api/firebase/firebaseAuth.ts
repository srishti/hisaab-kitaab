import "firebase/auth";
import { Firebase } from "./firebase";
import { Authentication } from "../auth/auth";
import { User } from "../../models/user";

export class FirebaseAuthentication implements Authentication {
  private _firebase;

  constructor() {
    this._firebase = Firebase.init();
  }

  async signup(
    user: User,
    successCallback?: ((data: any) => void) | undefined
  ) {
    try {
      const userCredentials = await this._firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      if (successCallback) {
        successCallback(userCredentials);
      }
    } catch (err) {
      // TODO: Handle error
      // const errorCode = err.code;
      // const errorMessage = err.message;
    }
  }

  async login(
    email: string,
    password: string,
    successCallback?: ((data: any) => void) | undefined
  ) {
    try {
      const userCredentials = await this._firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (successCallback) {
        successCallback(userCredentials);
      }
    } catch (err) {
      // TODO: Handle error
      // const errorCode = err.code;
      // const errorMessage = err.message;
    }
  }

  async sendEmailVerification(
    successCallback?: ((data: any) => void) | undefined
  ) {
    try {
      const userCredentials = await this._firebase
        .auth()
        .currentUser?.sendEmailVerification();
      if (successCallback) {
        successCallback(userCredentials);
      }
    } catch (err) {
      // TODO: Handle error
      // const errorCode = err.code;
      // const errorMessage = err.message;
    }
  }

  async sendPassword(
    email: string,
    successCallback?: ((data: any) => void) | undefined
  ) {
    try {
      const userCredentials = await this._firebase
        .auth()
        .sendPasswordResetEmail(email);
      if (successCallback) {
        successCallback(userCredentials);
      }
    } catch (err) {
      // TODO: Handle error
      // const errorCode = err.code;
      // const errorMessage = err.message;
    }
  }
}
