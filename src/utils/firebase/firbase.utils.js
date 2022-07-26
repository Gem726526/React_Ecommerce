import { initializeApp } from 'firebase/app';
import { getAuth ,  signInWithPopup , GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBGKpBiZgFhxalCX6pJluBrR8iaHu7wIVk",
    authDomain: "react-ecommerce-a1c39.firebaseapp.com",
    projectId: "react-ecommerce-a1c39",
    storageBucket: "react-ecommerce-a1c39.appspot.com",
    messagingSenderId: "145915520480",
    appId: "1:145915520480:web:b454970279edee57667785"
  };
  

  const firebaseapp = initializeApp(firebaseConfig);


  const googleprovider = new GoogleAuthProvider();
  googleprovider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);

  export const db = getFirestore();


 export const createUserDocumentFromAuth = async (userAuth , additionalInformation = {}) =>{
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()){
      const{displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc( userDocRef , {displayName, email, createdAt, ...additionalInformation});
      }
      catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userDocRef;
  }


  export const createAuthUserWithEmailAndPassword =async(email, password)=>{
    if(!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password)
  }
  export const signInAuthUserWithEmailAndPassword =async(email, password)=>{
    if(!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async () => await signOut(auth);
  export const onAuthStateChangedListener = (callback)=> 
  onAuthStateChanged(auth, callback )