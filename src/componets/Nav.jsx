import React from 'react';
import riceflix_logo from '../assests/RICEFLIX.png'

const Nav = () => {
    return (
        <nav className='nav'>
            <div>
                <img 
                    src={riceflix_logo}
                    className='logo_img cursor-pointer'
                    alt="Riceflix Home"
                />
            </div>
            <div>
                
            </div>
        </nav>
    );
}

export default Nav;
