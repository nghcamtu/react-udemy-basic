import React from 'react';
import './UserOutput.css';

const userOutput=(props_para)=>{
    return (
        <div className="UserOutput">
            <p>Username: {props_para.userName}</p>
            <p>I'll be overwritten</p>
        </div>
    );
};
export default userOutput;