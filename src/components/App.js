import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './NavFoot/Navbar'
import NavbarMobile from './NavFoot/NavbarMobile'
import Footer from './NavFoot/Footer'
import Home1 from './Home/Home1'
import Home3 from './Home/Home3'
import Home7 from './Home/Home7'
import Home5 from './Home/Home5'
import Home6 from './Home/Home6'
import Home2 from './Home/Home2'
import Home4 from './Home/Home4'
import Home8 from './Home/Home8'
import Home9 from './Home/home9'

function App() {
    return (
        <div >
            <Router>
                    <Navbar/>
                    <NavbarMobile />
                    <Home1 />
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/about'>
                        <Home3 />
                        <Home7/>
                        <Home5/>
                        <Home6/>
                    </Route>
                    <Route exact path='/services'>
                        <Home2/>
                    </Route>
                    <Route exact path='/blog'>
                        <Home4/>
                        <Home5/>
                    </Route>
                    <Route exact path='/contact'>
                        <Home8/>
                        <Home9/>
                    </Route>
                </Switch>
                    <Footer/>
            </Router>
        </div>
    )
}

export default App
