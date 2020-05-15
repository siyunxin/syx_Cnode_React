import React, { Component } from 'react'
import { Layout, Row, Col, Menu, Dropdown, Button } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import { NavLink, Link } from 'react-router-dom'
import './index.css'
const MenuList = [
    {
        name: '首页',
        key: 'index',
        link: '/'
    },
    {
        name: '教程',
        key: 'teach',
        link: '/teach'
    },
    {
        name: '关于',
        key: 'about',
        link: '/about'
    },
    {
        name: '登录',
        key: 'user',
        link: '/user'
    }
]

const CollposeMenu = (
    <Menu>
        {MenuList.map((menu) => {
            return (
                <Menu.Item key={menu.key}>
                    <Link to={menu.link}>{menu.name}</Link>
                </Menu.Item>
            )
        })}
    </Menu>
)
export default class CnodeHeader extends Component {
    render() {
        return (
            <Layout.Header theme="light" className="cnodeHeader">
                <Row className="headerRow">
                    <Col md={6} xs={24}>
                        <h1 className="logo">SYX_CNODE</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Menu mode="horizontal" className="cnodeMenu">
                            <Menu.Item>
                                <NavLink to="/">首页</NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <NavLink to="/teach">教程</NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <NavLink to="/about">关于</NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <NavLink to="/user">登录</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Row className="collposeMenu">
                        <Col md={0} xs={24}>
                            <Dropdown overlay={CollposeMenu} placement="bottomCenter" trigger={['hover']}>
                                <Button icon={<MenuUnfoldOutlined />}></Button>
                            </Dropdown>
                        </Col>
                    </Row>
                </Row>
            </Layout.Header>
        )
    }
}