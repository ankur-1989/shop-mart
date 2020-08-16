import * as firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCUY4DrZ-l6H2se8YuKU7t1Jm6Ox1RoG88",
  authDomain: process.env.SHOPMART_FIREBASE_DOMAIN,
  databaseURL: process.env.SHOPMART_FIREBASE_DATABASE,
  projectId: process.env.SHOPMART_FIREBASE_PROJECT_ID,
  storageBucket: process.env.SHOPMART_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.SHOPMART_FIREBASE_SENDER_ID,
})

export default app
