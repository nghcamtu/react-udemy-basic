import React from 'react'; //import react bởi vì đang viết react mà, cái return nó trả về là  JSX (React.createElement sản sinh ra)


const userInput=function(props_para){
    const iptStyles={
        border: '2px solid blue',
        backgroundColor: 'yellow',
    };
    return(
        <div>
            <input type="text" onChange={props_para.changed} value={props_para.currentUserName}
            style={iptStyles}
            />
        </div>
    );

};
export default userInput;