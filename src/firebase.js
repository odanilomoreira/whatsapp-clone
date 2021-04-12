import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCG4Hl8Be_LPRrWCZxT6-Rh9LoI8VFclgg",
    authDomain: "whatsapp-clone-20fb6.firebaseapp.com",
    projectId: "whatsapp-clone-20fb6",
    storageBucket: "whatsapp-clone-20fb6.appspot.com",
    messagingSenderId: "526620225091",
    appId: "1:526620225091:web:9a12a6ebf6a96c2d742ef6",
    measurementId: "G-GVJ31WVP1C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthprovider()

  export { auth, provider }
  export default db