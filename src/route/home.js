import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HomeList from '../view/home/HomeList'
export default class HomeRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/index" exact render={() => (<Redirect to="index/all" />)}></Route>
                <Route path="/index/all" component={HomeList}></Route>
                <Route path="/index/good" component={HomeList}></Route>
                <Route path="/index/share" component={HomeList}></Route>
                <Route path="/index/job" component={HomeList}></Route>
                <Route path="/index/answer" component={HomeList}></Route>
                <Route path="/index/dev" component={HomeList}></Route>
            </Switch>
        )
    }
}