import React, { useState} from 'react';
import style from './Navbar.module.css'

import {RiMenu3Fill} from 'react-icons/ri'
import {VscChromeClose} from 'react-icons/vsc'
import { Link } from 'react-router-dom';

function NavbarPhone() {
    const [click, setClick] = useState(false)
    return (
        <div className={style.mainPhone}>
            <div className={style.visible}>
                <div className={style.containerPhone}>
                    <Link to='/'>
                        HBBH<span>.</span>
                    </Link>
                    {click 
                        ? <VscChromeClose onClick={() => setClick(false)}/> 
                        :<RiMenu3Fill onClick={() => setClick(true)}/> 
                    }
                </div>
            </div>
            {
                click &&
                <div className={style.invisible}>
                    <div className={style.clickedMenu}>
                        <Link to='/' onClick={() => setClick(false)}>
                            Home
                        </Link>
                        <Link to='/about' onClick={() => setClick(false)}>
                            About
                        </Link>
                        <Link to='/services' onClick={() => setClick(false)}>
                            Services
                        </Link>
                        <Link to='/blog' onClick={() => setClick(false)}>
                        Blog
                        </Link>
                        <Link to='/contact' onClick={() => setClick(false)}>
                        Contact
                        </Link>
                    </div>
                </div>

            }
        </div>
    )
}

export default NavbarPhone
