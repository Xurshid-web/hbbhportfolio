import React from 'react'
import Style from './Home6.module.css'



function Home6() {
    return (
        <div>
            <div className={Style.main} >
                <div className={Style.inMain} >
                    <div className={Style.flex} >
                        <div className={Style.card} >
                            <div className={Style.inCard} >
                                <h1 >
                                8705
                                </h1>
                                <p>
                                Projects Completed

                                </p>

                            </div>
                        </div>
                        <div className={Style.card} >
                            <div className={Style.inCard} style={{backgroundColor:'#FF2143'}} >
                                <h1 style={{
                                    color:'#fff'
                                }} >
                                     480
                                </h1>
                                <p  style={{
                                    color:'#fff'
                                }}>
                                    Active Clients                                   
                                </p>

                            </div>
                        </div>
                        <div className={Style.card} >
                            <div className={Style.inCard} >
                                <h1 >
                                625
                                </h1>
                                <p>
                                Cups of Coffee

                                </p>

                            </div>
                        </div>
                        <div className={Style.card} >
                            <div className={Style.inCard} >
                                <h1 >
                                9774
                                </h1>
                                <p>
                                Happy Clients

                                </p>

                            </div>
                        </div>
                    </div>        
                </div>

            </div>
        </div>
    )
}

export default Home6
