import * as React from 'react';
import './style.scss';
import Logo from '../../assets/nesine-logo.svg';

function Header() {
    return (
        <div className='header-wrapper'>
            <div className='header-left'>
                <img src={Logo} alt='nesine-logo' className='header-logo' />
            </div>


        </div>
    );
}

export default Header;