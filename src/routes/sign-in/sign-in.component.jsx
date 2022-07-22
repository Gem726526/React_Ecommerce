import { signInWithGooglePopup } from "../../utils/firebase/firbase.utils";

const SignIn = () =>{
    const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
        console.log(response);
    }
    return(
        <div>
            <h1>
                Sign In page
            </h1>
            <button onClick={logGoogleUser}> Sign in with Google Popoup</button>
        </div>
    )
}
export default SignIn;