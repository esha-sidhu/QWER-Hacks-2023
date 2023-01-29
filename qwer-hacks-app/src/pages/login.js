import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {author, googleProvider} from '../firebase.js';
import {signInWithPopup} from 'firebase/auth';
import '../styles/main.css';
import '../styles/login.css';

function LogIn()
{
    
    function googleLogIn()
    {
        signInWithPopup(author, googleProvider).then(
            function afterLogIn()
            {
                window.location.assign("/settings");
            }
        )
    }

    return (

        <div className='login'>
            <br></br><br></br><br></br><br></br>
            <div className='padding'></div>
            <div className='loginBlock'>
                <div className='titleBear'>
                    <span className='delta'>
                        Commie Garden
                    </span>
                </div>
                <br></br>
                <div className='instr2'>

                </div>
                <br></br>
                <div id="container">
                    <button onClick={googleLogIn} className='signInButton'>Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;