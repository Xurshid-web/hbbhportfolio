import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {FaFacebookF} from 'react-icons/fa'
import style from './Footer.module.css'
import instagram1 from '../../Assets/services1.jpg'
import instagram2 from '../../Assets/services1.jpg'
import instagram3 from '../../Assets/services1.jpg'
import instagram4 from '../../Assets/services1.jpg'
import instagram5 from '../../Assets/services1.jpg'
import instagram6 from '../../Assets/services1.jpg'

const Footer = () => {
    return (
        <footer>
            <div className={style.footer}>
                <div className={style.container}>
                    <div className={style.box}>
                        <h1>
                            Consulting
                    <small>.</small>
                        </h1>
                        <p>Grabbing the concsumer’s attention isn’t enough you have to keep that attention for at least a.</p>
                        <h3>
                            +564
                    <small>7885 3222</small>
                        </h3>
                        <p>youremail@gmail.com</p>
                    </div>
                    <div className={style.box2}>
                        <h4>
                            USEFUL LINKS
                    </h4>
                        <h5>New York</h5>
                        <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
                        <h5>
                            Japan
                    </h5>
                        <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
                    </div>
                </div>
            <div className={style.footer_bottom}>
                <p>Copyright ©2021 All rights reserved | This template is made with <AiFillHeart /> by XBBX </p>
                <div className={style.icons}>
                    <div>
                        <FaTelegramPlane />
                    </div>
                    <div>
                        <SiInstagram />
                    </div>
                    <div>
                        <FaFacebookF />
                    </div>
                </div>
            </div>
            </div>
        </footer>

    )
}

export default Footer
