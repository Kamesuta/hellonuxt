import firebase from 'firebase'

if (!firebase.apps.length) {
 firebase.initializeApp({
    apiKey: "AIzaSyDlIh0jPS9KS4YiHfYxW7Ab2eYqChzvniw",
    authDomain: "nuxttest-bd8e7.firebaseapp.com",
    databaseURL: "https://nuxttest-bd8e7.firebaseio.com",
    projectId: "nuxttest-bd8e7",
    storageBucket: "nuxttest-bd8e7.appspot.com",
    messagingSenderId: "515785069372",
    appId: "1:515785069372:web:070619f19a2d44f5440439"
 })
}
export default firebase