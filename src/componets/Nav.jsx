import React from 'react';
import riceflix_logo from '../assests/RICEFLIX.png'
import user_img from '../assests/userlogo.png'
import { MagnifyingGlassIcon , BellIcon, BarsArrowDownIcon, ChevronDownIcon} from '@heroicons/react/20/solid'
import { RiAccountCircleLine } from 'react-icons/ri';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { LuScanFace } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/init'




const Nav = ({ user , setUser , setReg_form}) => {
    function dropdown_open(){
        document.body.classList += ' menu__open'
    }
    function dropdown_close(){
        document.body.classList.remove('menu__open')

    }
    function account_open(){
        document.body.classList += ' acct__open'
    }
    function account_close(){
        document.body.classList.remove('acct__open')

    }
    function logout(){
        console.log(user.email)
        signOut(auth)
        setUser(false)
        setReg_form(false)
  
  
    }
    return (
        <nav className='nav'>
            <div className='nav__header'>
            <Link to={'/'}>
                <div className=''>

                    <img 
                        src={riceflix_logo}
                        className='logo__img cursor-pointer'
                        alt="Riceflix Home"
                        />
                </div>
            </Link>
                <ul className="nav__links">
                    <li className="nav__link no-pointer">Home</li>
                    <li className="nav__link no-pointer">TV Shows</li>
                    <li className="nav__link no-pointer">Movies</li>
                    <li className="nav__link no-pointer">New & Popular</li>
                    <li className="nav__link no-pointer">My List</li>
                </ul>
                <div onMouseOver={dropdown_open} onMouseOut={dropdown_close}>
                    <div className='nav__browser cursor-pointer'>
                        <p className='nav__browse'>Browse</p>
                        <ChevronDownIcon className='nav__icon nav__browse'/>
                    </div>
                    <div className='nav__dropdown'>
                        <ul className="nav__dropdown--links">
                            <li className="nav__dropdown--link no-pointer">Home</li>
                            <li className="nav__dropdown--link no-pointer">TV Shows</li>
                            <li className="nav__dropdown--link no-pointer">Movies</li>
                            <li className="nav__dropdown--link no-pointer">New & Popular</li>
                            <li className="nav__dropdown--link no-pointer">My List</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className='nav__secondary'>
                <div className='nav__icons'>
                    <MagnifyingGlassIcon className='nav__icon cursor-pointer'/>
                    <p className='nav__kids cursor-pointer'>Kids</p>
                    <BellIcon className='nav__icon cursor-pointer'/>
                </div>
                <div className='acct__wrapper'
                onMouseOver={account_open}
                    onMouseOut={account_close}>

                    <img 
                    src={user_img} 
                    
                    className='user__img cursor-pointer'
                    alt="" />
                    <div className='acct__dropdown'>
                        <ul className="acct__dropdown--links">
                            <li className="acct__dropdown--link cursor-pointer">
                                <div className='dropdown__item'>
                                    <RiAccountCircleLine className='dropdown__icon'/>
                                    <p className='dropdown__title'>{user.email}</p>
                                </div>
                            </li>
                            <li className="acct__dropdown--link cursor-pointer">
                                <div className='dropdown__item no-pointer'>
                                    <LuScanFace className='dropdown__icon'/>
                                    <p className='dropdown__title'>Transfer Profile</p>
                                </div>
                            </li>
                            <li className="acct__dropdown--link cursor-pointer">
                                <div className='dropdown__item no-pointer'>
                                    <FaRegCircleQuestion className='dropdown__icon'/>
                                    <p className='dropdown__title'>Help Center</p>
                                </div>
                            </li>
                            <li className="acct__dropdown--link dropdown__signout cursor-pointer" onClick={logout}>
                                <Link to={'/'}>
                                    Sign Out Riceflix
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
