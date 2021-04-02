import Radium from 'radium';
import './../Person/Person.css'; //nhờ Webpack mới chèn CSS vào file JS như vầy được
import PropTypes from 'prop-types';

import React from 'react';
const OutputingData= (props_para)=>{ //có thể viết hoa chữ đầu, là Person
    const iptStyles={
        border: '2px solid blue',
        backgroundColor: 'khaki',
    };
    
     //SET MEDIA QUERY BÀNG CÁCH DÙNG RADIUM, thu nhỏ màn hình để xem kết quả
    const mediaQ={
        '@media (max-width: 500px)':{
            backgroundColor: 'yellow',
        }
    };
    
    //COMPONENT LIFE CYCLE
    console.log('<Person></Person> của [OutputingData.js] render nè ')
    
    
    return (
        <div className="Person" style={mediaQ}>
            <p>Click vào phần tử muốn xóa</p>
            <p onClick={props_para.click}>I'm {props_para.name} and I'm { props_para.age} years old.</p> 
            
            <input type="text" onChange={props_para.changed} value={props_para.currentUserName}
            style={iptStyles}
            />
            <p>-----------</p>
        </div>
    )
};

// VÍ DỤ CHO PHẦN PROPTYPES ĐỂ QUẢN LÝ KIỂU DỮ LIỆU CỦA STATE
OutputingData.propTypes={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    currentUserName: PropTypes.string
    
};





export default Radium(OutputingData);