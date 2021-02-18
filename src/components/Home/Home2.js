import React from 'react'
import Style from './Home2.module.css'

function Home2() {
    return (
        <div className={Style.parent} >
            <div className={Style.main} >
                <div className={Style.inMain} >
                    <div className={Style.title} >
                        <h3>
                            OUR TOP SERVICES
                        </h3>
                        <h1>
                        OUR BEST SERVICES
                        </h1>
                    </div>
                    <div className={Style.flex} >
                        <div className={Style.card} >
                            <div className={Style.inCard}>
                               <div>
                                    <div className={Style.icon} >

                                    </div>
                                    <div className={Style.text} >
                                        <a href="/"> Strategy Planning </a>
                                        <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                                    </div>
                               </div>

                            </div>
                            
                        </div>
                        <div className={Style.card} >
                            <div className={Style.inCard}>
                               <div>
                                    <div className={Style.icon} >

                                    </div>
                                    <div className={Style.text} >
                                        <a href="/"> Insurance Service</a>
                                        <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                                    </div>
                               </div>

                            </div>
                        </div>
                        <div className={Style.card} >
                            <div className={Style.inCard}>
                                <div>
                                    <div className={Style.icon} >

                                    </div>
                                    <div className={Style.text} >
                                        <a href="/"> Audit & Evaluation </a>
                                        <p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home2
