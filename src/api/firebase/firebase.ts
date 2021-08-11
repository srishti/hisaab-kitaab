import firebase from "firebase/app";

interface FirebaseConfig {
  apiKey: string;
  appId: string;
  authDomain: string;
  databaseURL?: string;
  measurementId: string;
  messagingSenderId: string;
  projectId: string;
  storageBucket: string;
}

export class Firebase {
  private _config: FirebaseConfig;

  private static _instance: Firebase;

  private constructor() {
    this._config = {
      apiKey: "AIzaSyA-uB4y9Po07B8x1GIpIU3r31s_3WcuT48",
      appId: "1:26488694375:web:3391f2ed4ce2b598e256c2",
      authDomain: "hisaab-kitaab-832bd.firebaseapp.com",
      measurementId: "G-T9PTRKKZG5",
      messagingSenderId: "26488694375",
      projectId: "hisaab-kitaab-832bd",
      storageBucket: "hisaab-kitaab-832bd.appspot.com",
    };
  }

  private static getInstance(): Firebase {
    return this._instance || (this._instance = new Firebase());
  }

  public static init(): firebase.app.App {
    const firebaseInstance = Firebase.getInstance();
    if (!firebase.apps.length) {
      return firebase.initializeApp(firebaseInstance._config); // initialize new app if it does not exist
    } else {
      return firebase.app(); // use existing app if already initialized
    }
  }
}
