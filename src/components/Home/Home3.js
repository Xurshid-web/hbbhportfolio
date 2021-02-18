import React from 'react'
import Style from './Home3.module.css'
import img from '../../Assets/section_bg02.webp'
import img1 from '../../Assets/about.jpg'

function Home3() {
    return (
        <div 
            className={Style.main} 
            style={{backgroundImage:`url(${img})`}}>
            <div className={Style.inMain}>
                <div className={Style.flex} >
                    <div 
                        className={Style.img}
                        style={{backgroundImage:`url(${img1})`}} ></div>
                    <div className={Style.text} >
                       <div>
                            <h3>
                                OUR TOP SERVICES
                            </h3>
                            <h1>
                                Our Best Services
                            </h1>
                       </div>
                        <div>
                            <p>
                                Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess cillum dolore egru lofrre dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.
                            </p>
                        </div>
                        <p>
                            Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt moll.
                        </p>
                        <div className={Style.button} >  
                                <h2>MORE ABOUT US</h2>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home3
