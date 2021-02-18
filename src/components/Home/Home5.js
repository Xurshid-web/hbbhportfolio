import React, {useState} from 'react'
import Style from './Home5.module.css'
import bg from '../../Assets/section_bg04.jpg'
import acc from '../../Assets/acc.webp.jpg'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'

function Home5() {
    const [one, setOne] = useState(true)
    const [two, setTwo] = useState(false)

    const back = () => {
        setOne(!one)
        setTwo(!two)
    }

    const next = () => {
        setOne(!one)
        setTwo(!two)
    }


    return (
        <div>
            <div className={Style.main} style={{backgroundImage:`url(${bg})`}} >
                <div className={Style.inMain} >
                    <div className={Style.svg} onClick={back} >
                        <AiFillCaretLeft/>
                    </div>
                    {
                       one&&
                        <div className={Style.text1} style={{width:`${one && "100%" }`}} >
                            <div className={Style.inText}>
                                <div className={Style.mark} >
                                    !!
                                </div>
                                <p>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra.Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.s
                                    
                                </p>
                            </div>
                            <div className={Style.acc} >
                                <div className={Style.img} style={{backgroundImage:`url(${acc})`}} ></div>
                                <div className={Style.accText} >
                                    <h2>
                                        Jessya Inn
                                    </h2>
                                    <p>
                                        Chif Photographer
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                     {
                       two&&
                        <div className={Style.text2} style={{width:`${two && "100%" }`}} >
                            <div className={Style.inText}>
                                <div className={Style.mark} >
                                    !!
                                </div>
                                <p>
                                    Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnua Quis ipsum suspendisse ultrices gra.Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.s
                                    
                                </p>
                            </div>
                            <div className={Style.acc} >
                                <div className={Style.img} style={{backgroundImage:`url(${acc})`}} ></div>
                                <div className={Style.accText} >
                                    <h2>
                                        Jessya Inn
                                    </h2>
                                    <p>
                                        Chif Photographer
                                    </p>
                                </div>
                            </div>
                        </div>
                    }

                    <div className={Style.svg} onClick={next} >
                        <AiFillCaretRight/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home5
