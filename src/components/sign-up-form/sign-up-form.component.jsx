
import { useState, } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firbase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss"
const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:'',

}

const SignUpForm = () =>{
    
    const [formFields, setFormFields] =useState(defaultFormFields);
    const { displayName,email,password,confirmPassword}=formFields;


    

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }


    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (password !== confirmPassword){
            alert("paswords do not match");

            return;
        }
        try{
            const {user} =  await createAuthUserWithEmailAndPassword(email,password);

            await createUserDocumentFromAuth(user, { displayName}) 

            resetFormFields();
        }
       
        catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannont crete use ,email already in use');
            }
        }
    }



    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value})
    };
    return (
        <div className="sign-up-container">
            <h2>Don't Have an account</h2>
        <spam> Sign Up with your email and password</spam>
        <form onSubmit={handleSubmit}>
            <FormInput label="DisplayName" type ="text" required  onChange={handleChange} name = "displayName"  value={displayName}/>
            <FormInput label="Email" type ='email' required onChange={handleChange} name = 'email' value={email}/>
            <FormInput label="Password" type ='password' required onChange={handleChange}  name = 'password' value={password}/>
            <FormInput label="ConfirmPassword" type= "password" required onChange={handleChange}  name = 'confirmPassword' value={confirmPassword}/>
            <Button type = 'submit'>Sign Up</Button>
        </form>
        </div>
    );
};
export default SignUpForm