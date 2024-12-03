import React from 'react';
import { FaInbox, FaInstagram, FaSquareFacebook, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className='footer__links--social'>
                    <ul className='footer__list--social'>
                        <li className='footer__link--social no-pointer'> <FaSquareFacebook className='footer__icon'/> </li>
                        <li className='footer__link--social no-pointer'> <FaInstagram className='footer__icon'/> </li>
                        <li className='footer__link--social no-pointer'> <FaSquareXTwitter className='footer__icon'/> </li>
                        <li className='footer__link--social no-pointer'> <FaYoutube className='footer__icon'/> </li>
                    </ul>
                </div>
                <div className='footer__links--nav'>
                    <ul className='footer__list--nav'>
                        <li className='footer__link--nav no-pointer'>Audio Description</li>
                        <li className='footer__link--nav no-pointer'>Investor Relations</li>
                        <li className='footer__link--nav no-pointer'>Privacy</li>
                        <li className='footer__link--nav no-pointer'>Contact Us</li>
                    </ul>
                    <ul className='footer__list--nav'>
                        <li className='footer__link--nav no-pointer'>Help Center</li>
                        <li className='footer__link--nav no-pointer'>Jobs</li>
                        <li className='footer__link--nav no-pointer'>Legal Notices</li>
                        <li className='footer__link--nav no-pointer'>Do Not Sell or Share My Personal Information</li>
                    </ul>
                    <ul className='footer__list--nav'>
                        <li className='footer__link--nav no-pointer'>Gift Cards</li>
                        <li className='footer__link--nav no-pointer'>Nexflix Shop</li>
                        <li className='footer__link--nav no-pointer'>Cookie Preferences</li>
                        <li className='footer__link--nav no-pointer'>Ad Choices</li>
                    </ul>
                    <ul className='footer__list--nav'>
                        <li className='footer__link--nav no-pointer'>Media Center</li>
                        <li className='footer__link--nav no-pointer'>Terms of Use</li>
                        <li className='footer__link--nav no-pointer'>Corporate Information</li>
                    </ul>
                </div>
                <div className='footer__copy'>
                    <h4>Copyright &copy; Riceflix</h4>
                    <h4>Made by Rice <FaInbox /></h4>
                </div>
            
            </div>
        </footer>
    );
}

export default Footer;
