import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import riceflix_logo from '../assests/RICEFLIX.png'
import backgroundImage from '../assests/netflix_signin-banner.jpg'
import { FaChevronRight } from 'react-icons/fa6';

function Home_Unlogged ( {setEmail_input ,setReg_form }){

   
    return (
        <>
            <div className='unlogged-user__banner--wrapper'>
                <figure className='unlogged-user__banner'>
                    <img src={backgroundImage} alt="" />
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
                    <div className=''>
                        <select className='nav__unlogged--button sec--btn'>
                            <option value="english" defaultValue={'english'} > English </option>
                            <option value="spanish"> Spanish </option>
                        </select>
                        <button className='nav__unlogged--button'
                        onClick={() => {setReg_form('login')}}>
                            <Link to={'/login'}>
                                Sign-In
                            </Link>
                        </button>
                    </div>
                </nav>
                <div className='unlogged-user__promo--wrapper'>
                    <figure className='unlogged-user__promo-img--wrapper'>
                        <img 
                        src={backgroundImage} 
                        className='unlogged-user__promo--img'
                        alt="" />
                    </figure>
                    <div className='unlogged-user__promo--info'>
                        <h2 className='unlogged-user__info--title'>Unlimited movies, Tv, shows, and more.</h2>
                        <p className='unlogged-user__info--sub-title'>Starts at $6.99. Cancel anytime.</p>
                    </div>
                </div>
                <div className='unlogged-user__join-now--wrapper'>
                    <p className='unlogged-user__join-now--para'>Ready to watch? Enter your email to create or restart membership.</p>
                    <div className='join-now__container'>
                        <div className='join-now__input--wrapper'>
                            <input 
                                type="email" 
                                name='email'
                                placeholder='Email address' 
                                onChange={(e) => setEmail_input(e.target.value)}
                                className='join-now__input' />
                        </div>
                        <button 
                            className='join-now__btn'
                            onClick={ () => {setReg_form('registration')}}
                            >
                                 <Link to={'/login'}>
                                    Join Now <FaChevronRight /> 
                                </Link>
                        </button>
                    </div>
                </div>
                    
                    
                   
                
            </div>

        </> 
    );
}

export default Home_Unlogged;
