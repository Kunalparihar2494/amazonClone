import React, { useState } from "react";
import "./Login.css";
import logo from "./assets/img/loginLogo.png";
import { Link,useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase';

function Login() {
   const history = useHistory();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then( auth => {
          history.push('/');
        })
        .catch(error => alert(error.message));
   }

   const register = e => {
     e.preventDefault();
    console.log('email-',email,'-pass-',password)
    auth.createUserWithEmailAndPassword(email,password)
     .then((auth) => {      
       if(auth){
         history.push('/');
       }
     })
     .catch(error => alert(error.message))
}

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" alt="Logo" src={logo} />
      </Link>
      <div className='login__container'>
       <h1>Sign-in</h1>
       <form>
           <h5>Email</h5>
           <input type='text' value={email} onChange= {
             e=> setEmail(e.target.value) } />

           <h5>Password</h5>
           <input type='password' value={password} onChange= {
             e=> setPassword(e.target.value) } />

           <button onClick={signIn} className='login__signInButton'>
               Sign In
           </button>

       </form>
         <p>
         If you use the website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer to prevent unauthorised access to your account. You agree to accept responsibility for all activities that occur under your account or password
         </p>
       <button onClick={register} className='login__registerButton'>
           Create your amazon account
       </button>
      </div>
    </div>
  );
}

export default Login;
