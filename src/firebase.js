import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLQGcrMBQ0uCbrrS9JRGyovSTGbYU80H0",
  authDomain: "disney-clone-3f461.firebaseapp.com",
  projectId: "disney-clone-3f461",
  storageBucket: "disney-clone-3f461.appspot.com",
  messagingSenderId: "1045465833787",
  appId: "1:1045465833787:web:7168c3c1294952713fd71e",
  measurementId: "G-0FEVKH5F1T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
