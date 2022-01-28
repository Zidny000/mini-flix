
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCoQLROCeDEaVEjVhu5iM8o779BVsx4JvY",
  authDomain: "netflix-e9fca.firebaseapp.com",
  projectId: "netflix-e9fca",
  storageBucket: "netflix-e9fca.appspot.com",
  messagingSenderId: "426966623936",
  appId: "1:426966623936:web:0b3d1023de01a41ea72f25"
}
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default storage;
