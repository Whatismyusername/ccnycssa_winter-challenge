import React, { useState } from 'react'
import { auth } from '../firebase'

import logo from '../Images/Logo/ccny.png'

const SignIn = (props) => {
    // const [isSignedIn, setIsSignedIn] = useState(false);
    // const [admin, setAdmin] = useState('');
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const signIn = (e) => {
        e.preventDefault();
        const { name, email, password } = user;
        
        if(name.length < 3) {
            alert('Please Enter Your Name');
        } else {
            auth.signInWithEmailAndPassword(email, password)
            .then(() => props.getAdmin(name))
            .catch(() => alert('Invalid Email/Password Combination'));
        }
        
    }

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return(
        <div id="signIn">
            <div id="signInDiv">
                <h3 style={{display: 'flex', alignItems: 'center'}}>
                    <img src={logo} alt="logo" style={{height:'40px', width:'40px'}}></img>
                    <span style={{whiteSpace:'pre'}}> Admin Sign In</span>
                </h3>
                <hr/>
                <form>
                    <input 
                        name="name" 
                        id="name" 
                        placeholder="Name"
                        autoComplete="off"
                        value={user.name}
                        onChange={onInputChange} /> <br/>

                    <input 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        autoComplete="off"
                        value={user.email} 
                        onChange={onInputChange} /> <br/>

                    <input 
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        autoComplete="off"
                        type="password" 
                        value={user.password} 
                        onChange={onInputChange} /> <br/>

                    <button onClick={signIn}>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn