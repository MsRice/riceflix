import React, { useState } from 'react';
import riceflix_logo from '../assests/RICEFLIX.png'
import backgroundImage from '../assests/signin_background.jpg'
import { Link } from 'react-router-dom';
import {auth} from '../utils/init.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


function Registration({email_input , reg_form ,setUser , setReg_form}) {

    const [email , setEmail] = useState()
    const [pass , setPass] = useState()

    // console.log(reg_form)
    // console.log(user)
   

    const submit_regeistration = (event) => {
        event.preventDefault()
        console.log(reg_form)
        if(reg_form === 'registration'){
            register({email , pass})
        } else if(reg_form === 'login'){
            login({email , pass})
        }
    }

    function register(element){
        console.log(element.email)
        createUserWithEmailAndPassword(auth , email, pass)
            .then((user) => {
                setReg_form(true)
                setUser(user.user)
                
            })
            .catch((error) => {
                console.log(error);
                
            })
        }

        function login(){
            signInWithEmailAndPassword(auth , email , pass)
            .then((user)=>{
                setReg_form(true)
                setUser(user.user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log(errorCode, errorMessage)
        })

    
    } 

   
    return (
        <>
            <div className='unlogged-user__banner--wrapper'>
                <figure className='unlogged-login__banner'>
                    <img src={backgroundImage} className='unlogged-login__img' alt="" />
                </figure>     

                <nav className='unlogged-user__nav--wrapper'>
                <Link to={'/'}>

                    <div className=''>
                        <img 
                            src={riceflix_logo}
                            className='cursor-pointer'
                            alt="Riceflix Home"
                            />
                    </div>
                </Link>
                </nav>
                <div className='sign-in__container'>
                    <div className='sign-in__wrapper'>
                        { reg_form === 'registration' ? 
                            <h1 className='sign-in__title'>Registration</h1>:
                            <h1 className='sign-in__title'>Login</h1>

                        }
                        <form className='registration_form'>
                            <div className='sign-in__wrapper--main'>

                                <div className='sign-in__input--wrapper'>
                                    { email_input ? 
                                        <input 
                                        type="email" 
                                        name="email" 
                                        value = {email_input}
                                        placeholder='Email or mobile number' 
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='sign-in__input'/>
                                        
                                        :
                                   
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder='Email or mobile number' 
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='sign-in__input'/>
                                    }
                                </div>
                                <div className='sign-in__input--wrapper'>
                                    <input 
                                        type="text" 
                                        name='pass' 
                                        placeholder='Password' 
                                        onChange={(e) => setPass(e.target.value)}
                                        className='sign-in__input'/>
                                </div>
                                { reg_form === 'registration' ? 

                                    <button 
                                        type='submit' 
                                        onClick={submit_regeistration}
                                        className='sign-in__btn sign-in__btn--main'
                                        ><Link to={'/'}>
                                                Register
                                            </Link>
                                        
                                    </button> :
                                        <button 
                                            type='submit' 
                                            onClick={submit_regeistration}
                                            className='sign-in__btn sign-in__btn--main'
                                    ><Link to={'/'}>
                                            Sign In
                                    </Link>
                                        </button>
                                }
                                <p className='or'>OR</p>
        
                                <button className='sign-in__btn no-pointer'>Use a Sign-in Code</button>
                                <button className='sign-in__btn sign-in__btn--forgot no-pointer'>Forgot Password?</button>
                                <div className='sign-in__remember no-pointer'>
                                    <input type="checkbox" defaultChecked />
                                    <label> Remember me</label>
                                </div>
                                <p>
                                This page is protected by Google reCAPTCHA to ensure you're not a bot. 

                                The information collected by Google reCAPTCHA is subject to the Google <a href='https://policies.google.com/privacy' target='_blank'>Privacy Policy</a>  and <a href='https://policies.google.com/terms' target='_blank'>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className='footer footer__registration'>
                    <div className='footer__container'>
                        <p className='footer__links--social'>Questions? Call 1-844-505-2993</p>
                    
                    <div className='footer__links--nav'>
                        <ul className='footer__list--nav no-pointer'>
                            <li className='footer__link--nav'>FAQ</li>
                            <li className='footer__link--nav'>Privacy</li>
                            <li className='footer__link--nav'>Ad CHoices</li>
                        </ul> 
                        <ul className='footer__list--nav no-pointer'>
                          
                            <li className='footer__link--nav'>Cookie Preferences</li>
                            <li className='footer__link--nav'>Help Center</li>
                        </ul> 
                        <ul className='footer__list--nav no-pointer'>
                            <li className='footer__link--nav'>Netflix Shop</li>
                            <li className='footer__link--nav'>Cooporate Information</li>
                        </ul> 
                        <ul className='footer__list--nav no-pointer'>
                            <li className='footer__link--nav'>Term of Use</li>
                            <li className='footer__link--nav'>Do Not Sellor Share My Personal Information</li>
                        </ul> 
                       
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Registration;
