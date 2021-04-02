// Đây là cách viết state và setState khi dùng functional component
// File này dùng để so sánh với file App.js (dùng class)
import './App.css';
import React from 'react';
import Person from './Person/Person'
import {useState} from 'react'; //import để dùng được state trong functional component. 
//Cái nào liên quan đến react hook trong functional component đều có chữ use ở đầu


const appHook=(props_para)=>{
    //Cú pháp useState: 
    //const [state, setstate] = useState(initialState)
        //functional component dùng useState() function thay cho setState() method của class component react
        //useState() trả về 1 mảng (array) với duy nhất 2 element và LUÔN LUÔN LÀ 2 ELEMENT (2 PHẦN TỬ)
            //phần tử thứ 1 trả về là state ban đầu (hoặc state đã được update)
            //phần tử thứ 2 trả về luôn luôn là 1 function cho phép ta update (cập nhật state) đó, để mà react còn biết đường để re-render lại component
            
        //ta copy nguyên cái state bỏ vào useState() để khởi tạo state ban đầu, cái state hiện tại đang lưu ở dạng object, bỏ vô làm tham số
        //và chứa kết quả trong 1 biến
        //xong ta dùng destructuring (bóc tách phần tử), ghi cho code đẹp luôn
    const [statePersons, setStatePersons]= useState(
        {
            persons:[
                { name: 'Tú', age: 24},
                { name: 'Trinh', age: 25},
                { name: 'Ngân', age: 24 }
            ],
            // otherState: 'some other value' //cách 1
        }
    );
    console.log('State ban đầu:', statePersons);
    
    // Ta có thể gọi useState() nhiều lần, ứng với nhiều state con, để cho dễ quản lý, tránh cho phải mỗi lần setState thì state không liên quan bị mất
    const [stateOther, setStateOther] = useState('use other some value');
    console.log('State ban đầu:', stateOther);
    
    // Dưới này là function xử lý khi button được click
    const switchNameHandler=()=>{
        console.log('switchNameHandler function chạy nè');
        // khi mà switchNameHandler được gọi, thì nó gọi cái setStatePerson(), mà cái setStatePerson() nó liên kết với cái useState() bên trên
        setStatePersons({ 
            persons:[
                { name: 'Cẩm Tú Nguyễn Huỳnh', age: 24},
                { name: 'Trinh', age: 25},
                { name: 'Ngân', age: 24 }
            ],
            otherState: statePersons.otherState
        }); 
        console.log('Sau khi setState lúc click:', statePersons);
    };
    
    
    return (
        <div className="appHook">
              {/* DÙNG STATE ĐỂ LẤY VALUE */}
            <button onClick={switchNameHandler}>Click me</button>
            <Person name={statePersons.persons[0].name} age={statePersons.persons[0].age} /> 
            <Person name={statePersons.persons[1].name} age={statePersons.persons[1].age}> My hobbies: Watching movie </Person>
            <Person name={statePersons.persons[2].name} age={statePersons.persons[2].age}/>  
        </div>
    );

};

export default appHook; 

// state={
//     persons:[
//         { name: 'Tú', age: 24},
//         { name: 'Trinh', age: 25},
//         { name: 'Ngân', age: 24 }
//     ],
//     otherState: 'some other value'
// }

// switchNameHandler=()=>{
//     console.log('switchNameHandler function chạy nè');
//     //DON'T DO THIS: this.state.persons[0].name="Cẩm Tú";
    
//     this.setState({ 
//         persons:[
//         { name: 'Cẩm Tú Nguyễn Huỳnh', age: 24},
//         { name: 'Trinh', age: 25},
//         { name: 'Ngân', age: 24 }
//       ]}); 
    

// };
