import React, { Component } from 'react';
import axios from 'axios';
import './DispatchBtn.css';
import { inject, observer } from 'mobx-react';

// const DispatchBtn = ({ id, status }) => (
//     <div className="dispatchBtn">
//         {status === 0 ?
//             <button onClick={() => dispatchBtn(id)} className="enable">출동</button> : <button className="disable">출동완료</button>
//         }
//     </div>
// );

@inject("report")
@observer
class DispatchBtn extends Component {
    changeState = (id) => {
        this.props.report.changeState(id);
    }

    render() {
        const { id, status } = this.props;
        return (
            <div className="dispatchBtn">
                {status === 0 ?
                    <button onClick={() => this.changeState(id)} className="enable">출동</button> : <button className="disable">출동완료</button>
                }
            </div>
        );
    };
};

export default DispatchBtn;