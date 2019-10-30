import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Users from './users'
import createAccount from './CreateAccount'
import Notfound from './notfound'
import login from "./login"
import header from "./componentes/header"

const routing = ( 
<Router>
    <div>
        <ul>
            <li >
                <NavLink exact activeClassName = "active" to = "/">Home</NavLink> 
            </li> 
            <li>
                <NavLink activeClassName = "active" to = "/users/:id" >Users</NavLink> 
            </li> 
            <li>
                <NavLink activeClassName = "active" to = "/createAccount" >createAccount</NavLink> 
            </li > 
        </ul>
            <hr / >
            <Switch>
                <Route exact path = "/"component = { App }/> 
                <Route  path = "/users"component = { Users }/> 
                <Route path = "/createAccount"component = { createAccount }/> 
                <Route path="/users/:id" component={Users} />
                <Route path = "/login"component = {login}></Route>
            
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