import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { userRef } from 'react';

const config = {
    apiKey: "AIzaSyBX5SbMr7HySQsLn0znJW7iluFXP3xyRag",
    authDomain: "crwn-db-817e3.firebaseapp.com",
    databaseURL: "https://crwn-db-817e3.firebaseio.com",
    projectId: "crwn-db-817e3",
    storageBucket: "crwn-db-817e3.appspot.com",
    messagingSenderId: "1087050624112",
    appId: "1:1087050624112:web:01b76819e9b188761118b5"
}
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creatin user', error.message);
        }
    }
    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;