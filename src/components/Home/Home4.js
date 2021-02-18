import React from 'react'
import Style from './Home4.module.css'
import img from '../../Assets/services1.jpg'
import img2 from '../../Assets/services2.jpg'
import img3 from '../../Assets/services3.jpg'
import img4 from '../../Assets/services4.jpg'

function Home4() {
    return (
        <div className={Style.parent}>
            <div className={Style.main} >
                <div className={Style.inMain} >
                    <div className={Style.title} >
                        <h3>
                            OUR PORTFOLIOS OF CASES
                        </h3>
                        <h1>
                            Featured Case Study

                        </h1>
                    </div>
                    <div className={Style.flexMain} >
                        <div className={Style.flex} >
                           <div className={Style.card} >
                                <div className={Style.img} style={{backgroundImage:`url(${img})`}}  ></div>
                                <div className={Style.inCard}>
                                   <div>
                                        <h3>
                                    Strategy planing
                                    </h3>
                                    <p>
                                    Within the construction industry as their overdraft
                                    </p>
                                   </div>
                                </div>
                            </div> 
                            <div  className={Style.card} >
                                 <div className={Style.img} style={{backgroundImage:`url(${img2})`}} ></div>
                                <div className={Style.inCard}>
                                    <div>
                                         <h3>
                                    Strategy planing
                                    </h3>
                                    <p>
                                    Within the construction industry as their overdraft
                                    </p>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        <div className={Style.flex} >
                           <div  className={Style.card} >
                                <div className={Style.img} style={{backgroundImage:`url(${img3})`}} ></div>
                                <div className={Style.inCard}>
                                    <div>
                                         <h3>
                                    Strategy planing
                                    </h3>
                                    <p>
                                    Within the construction industry as their overdraft
                                    </p>
                                    </div>
                                 </div>
                            </div> 
                            <div  className={Style.card} >
                                 <div className={Style.img} style={{backgroundImage:`url(${img4})`}} ></div>
                                <div className={Style.inCard}>
                                    <div>
                                         <h3>
                                    Strategy planing
                                    </h3>
                                    <p>
                                    Within the construction industry as their overdraft
                                    </p>
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

export default Home4
