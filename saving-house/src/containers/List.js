import React, { Component } from 'react';
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react';
import Card from './Card';
import ListItem from './ListItem';
import './List.css';

@inject("report")
@observer
class List extends Component {
    UNSAFE_componentWillMount() {
        this.props.report.getReport();
    }

    render() {
        let reportList = [];
        reportList = toJS(this.props.report.report);
        return (
            <div>
                <Card className="report">
                    <div className="menu">
                        <div className="f">
                            <p className="id">No</p>
                            <p className="userId">ID</p>
                            <p className="content">Content</p>
                        </div>
                        <div className="s">
                            <p className="time">Time</p>
                            <p className="status">Status</p>
                        </div>
                    </div>
                    {reportList.map(item => {
                        return (
                            <ListItem id={item.id} userId={item.UserId} content={item.content} status={item.rescueState} time={item.createdAt} />
                        )
                    })}
                </Card>
            </div>
        );
    };
};

export default List;