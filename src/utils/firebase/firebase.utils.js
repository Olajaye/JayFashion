import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth"


import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDVLuThoWELkZCAzDdAbNr8z_tGhU8xYYI",
  authDomain: "jayefashion-1d676.firebaseapp.com",
  projectId: "jayefashion-1d676",
  storageBucket: "jayefashion-1d676.appspot.com",
  messagingSenderId: "148763205460",
  appId: "1:148763205460:web:e545511fddb76053eb32c1"
};
initializeApp(firebaseConfig);

// Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}


// Database
export const database = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(database, collectionKey);
  const batch = writeBatch(database)

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit()
  console.log("done")
}

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(database, "categories")
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)


  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {

    const { title, items } = docSnapshot.data()

    acc[title.toLowerCase()] = items;

    return acc;
  }, {});

  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additional = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(database, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additional
      })
    } catch (error) {
      console.log("error createing the user,", error.message)
    }
  }
  return userDocRef
}


// SignIn
export const signinAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

// Sign out
export const signOutUser = () => signOut(auth)

export const onAuthStateChangedlistener = (callback) => onAuthStateChanged(auth, callback)