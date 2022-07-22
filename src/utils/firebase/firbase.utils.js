import { initializeApp } from 'firebase/app';
import { getAuth , signInWithRedirect , signInWithPopup , GoogleAuthProvider } from 'firebase/auth'
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


  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
  export const db = getFirestore();


 export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()){
      const{displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc( userDocRef , {displayName, email, createdAt});
      }
      catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userDocRef;
  }
