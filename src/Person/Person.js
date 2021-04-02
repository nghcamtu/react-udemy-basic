// import React from 'react'

// export default function Person() {
//     return (
//         <div>
            
//         </div>
//     )
// }

import './Person.css'; //nhờ Webpack mới chèn CSS vào file JS như vầy được

import React from 'react';
const person= (props_para)=>{ //có thể viết hoa chữ đầu, là Person
    return (
        <div className="Person">
            {/* CHƯA DÙNG PROPS  */}
                {/* <p>I'm a Person and I'm {Math.floor(Math.random()*10)} years old. </p> */}
                
            {/* CHỈ DÙNG PROPS ĐỂ TRUYỀN DATA TỪ COMPONENT NÀY SANG COMPONENT KHÁC*/}
            {/* <p>I'm {props_para.name} and I'm { props_para.age} years old.</p>
                <p>{props_para.children}</p>  */}
                {/* chấm tới children để lấy content (con) của thẻ HTML custom (hay còn gọi là component) đó*/}
             
             {/* DÙNG STATE ĐỂ LẤY VALUE */}
            <p onClick={props_para.click}>I'm {props_para.name} and I'm { props_para.age} years old.</p>
            <p>{props_para.children}</p> 
            
            <p>-----------</p>
        </div>
    )
};
export default person;

// props là để truyền data, set data và pass bên ngoài component (outside component)
// state thì quản lý (manage) bên trong component (inside component)
    // state property có thể bị thay đổi (change), và khi nó thay đổi thì dẫn đến React re-render (render lại) DOM 
        //hoặc update DOM