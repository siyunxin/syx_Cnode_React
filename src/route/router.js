import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../view/home'
import Teach from '../view/teach'
import About from '../view/about'
import User from '../view/user'
export default class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/index" />}></Route>
                <Route path="/index" component={Home}></Route>
                <Route path="/teach" component={Teach}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/user" component={User}></Route>
            </Switch>
        )
    }
}