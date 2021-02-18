import React from 'react'
import Style from './Home8.module.css'
import img from '../../Assets/section_bg03.jpg'

function Home8() {
    return (
        <div>
            <div className={Style.main} style={{backgroundImage:`url(${img})`}} >
                <div className={Style.inMain} >
                    <div className={Style.text} >
                        <p>
                        Are you Searching <br/>
                        For a First-Class Consultant?
                        </p>
                    </div>
                    <div className={Style.button} >  
                        <h2>MORE ABOUT US</h2>
                        <div></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home8
