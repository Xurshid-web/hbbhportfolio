import React from 'react'
import Style from './Home9.module.css'
import img1 from '../../Assets/home_blog1.jpg'
import img2 from '../../Assets/home_blog2.jpg'

function home9() {
    return (
        <div>
            <div className={Style.main} >
                <div className={Style.inMain} >
                    <div className={Style.title} >
                        <h3>
                        RECENT NEWS OF US
                        </h3>
                        <h1>
                        Our Recent Blog
                        </h1>

                    </div>
                    <div className={Style.flex} >
                        <div className={Style.card} >
                            <div className={Style.img} style={{backgroundImage:`url(${img1})`}} >
                                <p>
                                By Admin - February 10, 2021
                                </p>
                            </div>
                            <div className={Style.text} >
                               <div>
                                    <p >
                                    16 Easy Ideas to Use in Everyday

                                    </p>
                                    <p>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra.

                                    </p>
                                    <p>
                                    Read More

                                    </p>
                               </div>
                            </div>
                        </div>  
                        <div className={Style.card} >
                            <div className={Style.img} style={{backgroundImage:`url(${img2})`}} >
                                <p>
                                By Admin - February 10, 2021
                                </p>
                            </div>
                            <div className={Style.text} >
                                <div>
                                <p >
                                    16 Easy Ideas to Use in Everyday

                                    </p>
                                    <p>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra.

                                    </p>
                                    <p>
                                    Read More

                                    </p>
                                </div>
                            </div>
                        </div>  

                    </div>
                </div>
            </div>
        </div>
    )
}

export default home9
