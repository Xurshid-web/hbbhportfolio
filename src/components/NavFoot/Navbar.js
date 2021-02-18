import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
// import About from './About'
// import Contact from './Contact'
// import Gallery from './Gallery'
// import Home from './Home'
// import Services from './Services'

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        const scrallFunc = () => {
            if (window.scrollY > 400) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener('scroll', scrallFunc)

    })

    console.log(scroll);
    return (
       
            <div className={scroll ? `${style.navColor} ${style.transition}` : `${style.nav} ${style.transition}`}>
                <div className={style.navbar_brand}>
                    <h1>
                        HBBH
                    <small>.</small>
                    </h1>
                </div>
                <div className={style.list}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>                
                </div>
                <div className={style.buttonUs}>
                    <button>Contact Us</button>
                </div>
            </div>

    )
}

export default Navbar
