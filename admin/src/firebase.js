import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoQLROCeDEaVEjVhu5iM8o779BVsx4JvY",
  authDomain: "netflix-e9fca.firebaseapp.com",
  projectId: "netflix-e9fca",
  storageBucket: "netflix-e9fca.appspot.com",
  messagingSenderId: "426966623936",
  appId: "1:426966623936:web:0b3d1023de01a41ea72f25"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
