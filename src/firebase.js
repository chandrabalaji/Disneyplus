import { initializeApp } from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBeikUUN70myZfHnqwE0KPiJ7eoKH0AvVI",
    authDomain: "disneyplus-clone-347e3.firebaseapp.com",
    projectId: "disneyplus-clone-347e3",
    storageBucket: "disneyplus-clone-347e3.appspot.com",
    messagingSenderId: "590353584045",
    appId: "1:590353584045:web:b590b20c72803e1acf1b24",
    measurementId: "G-QCBZM9QJDV"
  };


const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const  db = getFirestore(firebaseApp)
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp)

export {auth, provider,storage}
export default db
