import React, { Component } from 'react'
import { queryTopic } from '../../http/api'
import { List, Avatar, Divider } from 'antd'
export default class HomeList extends Component {
    constructor(arg) {
        super(arg)
        let path = this.props.location.pathname.split("/");
        this.state = {
            list: [],
            page: 1,
            limit: 20,
            tab: path[path.length - 1]
        }

    };
    componentWillReceiveProps(nextProps) {
        let path = nextProps.location.pathname.split("/"),
            tab = path[path.length - 1]

        this.updateList(tab, 1)
    };
    componentDidMount() {
        const { tab, page } = this.state;
        this.updateList(tab, page)
        /* const { tab, page, limit } = this.state;
        let data = {
            tab: tab,
            page: page,
            limit: limit,
        }
        queryTopic(data).then((res) => {
            this.setState({ list: res.data })
        }) */
    };

    updateList(tab, page) {
        console.log(tab)
        const { limit } = this.state;
        let data = {
            tab: tab,
            page: page,
            limit: limit,
        }
        queryTopic(data).then((res) => {
            this.setState({ list: res.data })
        })
    }
    render() {
        return (
            <List
                dataSource={this.state.list}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={
                                <Avatar src={item.author.avatar_url} />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={<span>{item.author.loginname}发布于{item.create_at.split('T')[0]}</span>}
                        />
                        <div>访问{item.visit_count} <Divider type='vertical' /> 评论{item.reply_count}</div>
                    </List.Item>
                )}
            />
        )
    }
}