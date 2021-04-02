import React from 'react';

import Radium from 'radium';
import Person from './OutputingData';
import { Component } from 'react';
import './SettingClassNameDynamically/SettingClassNameDynamically.css';


class OutputingList extends Component {
    // PROPERTY CỦA CLASS
    state = {
        persons: [
            { id: 'abcdf', name: 'Tú', age: 24 },
            { id: 'xinchao', name: 'Trinh', age: 25 },
            { id: '23s', name: 'Ngân', age: 24 }
        ],
        otherState: 'some other value',
        showPerson: false //lưu cờ chạy vào state

    }

    // METHOD CỦA CLASS

    showHideHandler = () => {
        console.log("show hide function works");
        const check = this.state.showPerson;
        console.log('giá trị sau khi click nút', check);
        this.setState({ showPerson: !check }); //dấu ! là not operator đó, hay dùng khi check điều kiện so sánh
        console.log("để ý là nó không cần load lại hết trang nè, bằng chứng là còn nguyên đám log của console");
    };

    deletePersonHandler = (personIndex_para) => {
        console.log("Delete person nào bị click, chạy nè");
        
        //BAD PRACTICE, dễ gây lỗi, do phép gán (=) với object thì sẽ dính tới tham chiếu, reference
        // const allPersonBeforeDelete = this.state.persons; 
        // allPersonBeforeDelete.splice(personIndex_para, 1); 
        
        //CÁCH TỐT NHẤT LÀ TẠO 1 BẢN COPY CỦA OBJECT CẦN XỬ LÝ, XONG XỬ LÝ TRÊN NÓ
        //Cách 2.1: dùng slice với ko có tham số
        // const allPersonBeforeDelete = this.state.persons.slice(); 
        // allPersonBeforeDelete.splice(personIndex_para, 1); 

        //Cách 2.2: dùng spread của ES6, 
            //đầu tiên tạo 1 biến array rỗng
            //xong dùng spread operator duyệt tách từng phần tử trong ra, lưu vô biến đ
            const allPersonBeforeDelete = [...this.state.persons]; 
            allPersonBeforeDelete.splice(personIndex_para, 1); 
        
        
        this.setState({ persons: allPersonBeforeDelete });
    };
    
    userNameChangeHandler=(event, id)=>{
        const personIndex= this.state.persons.findIndex((person_para)=>{
            return person_para.id=== id;
        });
        
        const personCopied= {...this.state.persons[personIndex] };
        personCopied.name= event.target.value;
        
        const persons= [...this.state.persons] //biến mới nha
        persons[personIndex]= personCopied;
        
        
        this.setState(
            // {userName: event.target.value,} //do function này nó chứa nhiều cái dưới dạng object mà, do ta có lưu state là object nữa, nên argument là object
            {persons: persons}
        );
    
    };
    
    render() {
        //COMPONENT LIFE CYCLE
        console.log('[Outputing List.js] rendering...');
        
        const styledButton={
            backgroundColor: 'green',
            padding: '1rem',
            color: 'white',
            fontWeight: 'bold',
            border: '2px solid #ccc',
            // RADIUM LÀ ĐỂ CSS INTERNAL, INLINE THÔI, mà inline với internal css thì ko có xài pseudo, media query các kiểu được, nên ta mới xài RADIUM lib
            // DO XÀI RADIUM NÊN LÀ XÀI ĐƯỢC CÁC MEDIA QUERY VỚI CÁC PSEUDO ELEMENT, PSEUDO CLASS INLINE TRONG REACT
            ':hover': { //hình như là lưu ở đây như lưu json, nên nhớ check lại chỗ này
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }
        
        let personUI = null;
        if (this.state.showPerson) {
            personUI = ( //phần này là JSX sau khi render() function return về, nên có cặp ()
                <div>
                    {
                        this.state.persons.map((value_para, index_para) => {
                            return <Person 
                                    name={value_para.name} 
                                    age={value_para.age} 
                                    click={()=>this.deletePersonHandler(index_para)} 
                                    key={value_para.id} //có key thì nó nhạy hơn, React nó phân biệt được cái item nào cần xóa, ở đây ko xài index_para làm key, do key thì ko giúp react lắm, tại nó toàn phải load lại index sau mỗi lần update 
                                    
                                    changed={(event)=>this.userNameChangeHandler(event, value_para.id)}
                                    currentUserName={this.state.name}
                                    />
                        })
                        /* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                            <Person
                                name={this.state.persons[1].name}
                                age={this.state.persons[1].age}
                                click={() => this.switchNameHandler('Cẩm Tú')}
                            > My hobbies: Watching movie </Person>
                            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */
                    }
                </div>
            );
            styledButton.backgroundColor= 'red'; //khi render thì nút có màu đỏ
            //dùng radium xong rồi thì ghi đè lại value ở chỗ này, do đang set hover khi nút có màu đỏ
            styledButton[':hover']={
                backgroundColor: 'salmon',
                color: 'black'
            };
        }
        
        // SETTING CLASS NAME DYNAMICALLY
        // CÁCH 1:
        // let classesNameList= ['red', 'bold'].join(' '); 
        // CÁCH 2: 
            let classesNameList=[];
            if(this.state.persons.length<=2){
                classesNameList.push('red'); //kết quả trả về sẽ là classesNameList=['red']
            }
            if(this.state.persons.length<=1){
                classesNameList.push('bold'); //kết quả trả về sẽ là classesNameList=['red', 'bold']
            }
                
        return (
            <div>
                <hr />
                <h1>Outputing List using map()</h1>
                {/* <p className={classesNameList} >Dòng này sẽ đỏ và in đậm nếu xóa hết phần tử trong state</p> */}
                <p className={classesNameList.join(" ")} >Dòng này sẽ đỏ và in đậm nếu xóa còn 1 phần tử trong state</p>
                <button onClick={this.showHideHandler}  style={styledButton}>ẨN/ HIỆN NỘI DUNG</button>

                {/* JSX nên là chỉ chạy được mấy code đơn giản thôi, nên ko check đk if như bình thường được */}
                {/* nên ta xài ternary operator- toán tử ba ngôi/ toán tử bậc ba */}

                {/* C2: */}
                {personUI}
                
                {/* <OutputingData changed={this.userNameChangeHandler} currentUserName={this.state.userName}/> */}


            </div>
        );
    }
};
export default Radium(OutputingList);