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
                    {reportList.map(item => {
                        return (
                            <ListItem id={item.id} userId={item.UserId} content={item.content} status={item.rescueState} time={item.createdAt}/>
                        )
                    })}
                </Card>
            </div>
        );
    };
};

export default List;