import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0VMtMVQeq-MFsK-GGZG_aFSqWYOD4RaQ",
    authDomain: "fb-clone-f38e3.firebaseapp.com",
    databaseURL: "https://fb-clone-f38e3.firebaseio.com",
    projectId: "fb-clone-f38e3",
    storageBucket: "fb-clone-f38e3.appspot.com",
    messagingSenderId: "931307823662",
    appId: "1:931307823662:web:8aee62795a81f8f64f75bf",
    measurementId: "G-6PLK7GB8WZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;