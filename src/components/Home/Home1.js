import React from 'react'
import Style from './Home1.module.css'
import img1 from '../../Assets/h1_hero.jpg'

const Home1 = () => {
    return (
        <div className={Style.main } style={{backgroundImage:`url(${img1})`}} >
            <div className={Style.inmain }>
                <div className={Style.text} >
                    <div className={Style.inText} >
                        <h3>
                             COMMITTED SUCCESS
                        </h3>
                        <h1>
                            We help to grow your business
                        </h1>
                        <p>
                            Mollit anim laborum. DivCuis aute serunt. Mollit anim laborum. DivCuis aute serunt.Mollit anim laborum. DivCuis aute serunt.

                        </p>
                        <div className={Style.button} >  
                                <h2>OUR SERVICES</h2>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1
