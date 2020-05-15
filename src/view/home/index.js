import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'
import HomeRoute from '../../route/home'
const partList = [
    {
        name: '全部',
        key: 'all',
        link: '/index/all',
    },
    {
        name: '精华',
        key: 'good',
        link: '/index/good'
    },
    {
        name: '分享',
        key: 'share',
        link: '/index/share'
    },
    {
        name: '招聘',
        key: 'job',
        link: '/index/job'
    },
    {
        name: '问答',
        key: 'answer',
        link: '/index/answer'
    },
    {
        name: "测试",
        key: 'dev',
        link: "/index/dev"
    }
]
export default class CnodeIndex extends Component {
    render() {
        return (
            <Row className="mainWrap">
                <Col md={5} xs={24}>
                    <nav className="navWrap">
                        {
                            partList.map((item) => {
                                return (
                                    <NavLink key={item.key} to={item.link}>
                                        {item.name}
                                    </NavLink>
                                )
                            })
                        }
                    </nav>
                </Col>
                <Col className="listWrap" md={19} xs={24}>
                    <HomeRoute />
                </Col>
            </Row>
        )
    }
} 