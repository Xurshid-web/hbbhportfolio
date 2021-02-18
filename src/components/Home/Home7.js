import React from 'react'
import Style from './Home7.module.css'
import img from '../../Assets/team2.jpg'
import img1 from '../../Assets/team3.jpg'
import img2 from '../../Assets/team1.jpg'



function Home7() {
    return (
        <div>
            <div className={Style.main} >
                <div className={Style.inMain} >
                    <div className={Style.title} >
                        <h3>
                            OUR PROFESSIONAL MEMBERS
                        </h3>
                        <h1>
                            Our Team Mambers

                        </h1>
                    </div>
                    <div className={Style.flex} >
                        <div className={Style.card} >
                            <div className={Style.img} style={{backgroundImage:`url(${img})`}} ></div>
                            <div className={Style.cardText} >
                                <h1>
                                Ethan Welch
                                </h1>
                                <p>
                                    UX Designer

                                </p>
                            </div>

                        </div>
                        <div className={Style.card} >
                            <div className={Style.img} style={{backgroundImage:`url(${img1})`}} ></div>
                            <div className={Style.cardText} >
                                <h1>
                                Ethan Welch
                                </h1>
                                <p>
                                    UX Designer

                                </p>
                            </div>

                        </div>
                        <div className={Style.card} >
                            <div className={Style.img} style={{backgroundImage:`url(${img2})`}} ></div>
                            <div className={Style.cardText} >
                                <h1>
                                Ethan Welch
                                </h1>
                                <p>
                                    UX Designer

                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home7
