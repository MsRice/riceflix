import React from 'react';
import riceflix_logo from '../assests/RICEFLIX.png'
import user_img from '../assests/userlogo.png'
import { MagnifyingGlassIcon , BellIcon, BarsArrowDownIcon, ChevronDownIcon} from '@heroicons/react/20/solid'


const Nav = () => {
    function dropdown_open(){
        document.body.classList += ' menu__open'
    }
    function dropdown_close(){
        document.body.classList.remove('menu__open')

    }
    return (
        <nav className='nav'>
            <div className='nav__header'>
                <img 
                    src={riceflix_logo}
                    className='logo__img cursor-pointer'
                    alt="Riceflix Home"
                />
                <ul className="nav__links">
                    <li className="nav__link">Home</li>
                    <li className="nav__link">TV Shows</li>
                    <li className="nav__link">Movies</li>
                    <li className="nav__link">New & Popular</li>
                    <li className="nav__link">My List</li>
                </ul>
                <div onMouseOver={dropdown_open} onMouseOut={dropdown_close}>
                    <div className='nav__browser cursor-pointer'>
                        <p className='nav__browse'>Browse</p>
                        <ChevronDownIcon className='nav__icon nav__browse'/>
                    </div>
                    <div className='nav__dropdown'>
                        <ul className="nav__dropdown--links">
                            <li className="nav__dropdown--link cursor-pointer">Home</li>
                            <li className="nav__dropdown--link cursor-pointer">TV Shows</li>
                            <li className="nav__dropdown--link cursor-pointer">Movies</li>
                            <li className="nav__dropdown--link cursor-pointer">New & Popular</li>
                            <li className="nav__dropdown--link cursor-pointer">My List</li>
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
                <img 
                    src={user_img} 
                    className='user__img cursor-pointer'
                    alt="" />
            </div>
        </nav>
    );
}

export default Nav;
