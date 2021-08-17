import React, {useState} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import All from './companents/All'
import Breakfast from './companents/Breakfast'
import Lunch from './companents/Lunch'
import Shakes from './companents/Shakes'
import dataMenu from './companents/dataMenu'



const App = () => {
   const [allMenu, setAllMenu] = useState(dataMenu)
    return (
        <div className="App">
            <div className="container">
                <h1>Our Menu</h1>
                <div className="underline"></div>
                <ul>
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/breakfast">Breakfast</Link></li>
                    <li><Link to="/lunch">Lunch</Link></li>
                    <li><Link to="/shakes">Shakes</Link></li>
                </ul>
                    <Switch>
                        <Route exact path="/">
                            <All allMenu={allMenu}/>
                        </Route>
                        <Route path="/breakfast">
                            <Breakfast allMenu={allMenu}/>
                        </Route>
                        <Route path="/lunch">
                            <Lunch allMenu={allMenu}/>
                        </Route>
                        <Route path="/shakes">
                            <Shakes allMenu={allMenu}/>
                        </Route>
                    </Switch>
            </div>
        </div>
            
    )
}

export default App
