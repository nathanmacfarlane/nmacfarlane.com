import firebase from "firebase"
import "@firebase/firestore"
import ReduxSagaFirebase from "redux-saga-firebase"

var config = {
  apiKey: "AIzaSyCdlgwiN4ayoAp1A28B6Ul_BNoonrvS-Nw",
  authDomain: "nmacfarlane-8c39a.firebaseapp.com",
  databaseURL: "https://nmacfarlane-8c39a.firebaseio.com",
  projectId: "nmacfarlane-8c39a",
  storageBucket: "",
  messagingSenderId: "356576403100"
}

class Firestore {
  public static reduxSagaFirebase: ReduxSagaFirebase
  constructor() {
    const myFirebaseApp = firebase.initializeApp(config)
    Firestore.reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)
  }
}

export default Firestore
