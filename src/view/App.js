import React, { Component } from 'react'
import CnodeHeader from './layout/Header'
import CnodeFooter from './layout/Footer'

import RouterIndex from '../route/router'
export default class App extends Component {
    render() {
        return (<div className="cNodeWrap">
            <CnodeHeader />
            <main className="cNodeMain">
                <RouterIndex />
            </main>
            <CnodeFooter />
        </div>)
    }
}