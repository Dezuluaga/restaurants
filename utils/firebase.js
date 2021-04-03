import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgNYJLUSivXHXkEfYFQUN4xL2TRPF4ROA",
    authDomain: "restaurants-26bcf.firebaseapp.com",
    projectId: "restaurants-26bcf",
    storageBucket: "restaurants-26bcf.appspot.com",
    messagingSenderId: "564658388412",
    appId: "1:564658388412:web:0d7a68117141b16d907fb9"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)