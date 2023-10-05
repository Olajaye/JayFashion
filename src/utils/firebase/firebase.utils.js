import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth"
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVLuThoWELkZCAzDdAbNr8z_tGhU8xYYI",
  authDomain: "jayefashion-1d676.firebaseapp.com",
  projectId: "jayefashion-1d676",
  storageBucket: "jayefashion-1d676.appspot.com",
  messagingSenderId: "148763205460",
  appId: "1:148763205460:web:e545511fddb76053eb32c1"
};
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(database, "users", userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt
      })
    } catch (error) {
      console.log("error createing the user,", error.message)
    }
  }

  return userDocRef
}