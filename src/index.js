import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Users from './users'
import createAccount from './createAccount'
import Notfound from './notfound'

const routing = ( 
<Router>
    <div>
        <ul>
            <li >
                <NavLink exact activeClassName = "active" to = "/">Home</NavLink> 
            </li> 
            <li>
                <NavLink activeClassName = "active" to = "/users" >Users</NavLink> 
            </li> 
            <li>
                <NavLink activeClassName = "active" to = "/createAccount" >createAccount</NavLink> 
            </li > 
        </ul>
            <hr / >
            <Switch>
                <Route exact path = "/"component = { App }/> 
                <Route exact path = "/users"component = { Users }/> 
                <Route path = "/createAccount"component = { createAccount }/> 
                <Route component = { Notfound }/> 
            </Switch> 
        </div> 
</Router>
)

ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();