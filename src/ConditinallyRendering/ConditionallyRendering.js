import React, { Component } from 'react'
import Person from './../Person/Person';

export default class ConditionallyRendering extends Component {
    // PROPERTY CỦA CLASS
    state = {
        persons: [
            { name: 'Tú', age: 24 },
            { name: 'Trinh', age: 25 },
            { name: 'Ngân', age: 24 }
        ],
        otherState: 'some other value',
        showPerson: false //lưu cờ chạy vào state

    }

    // METHOD CỦA CLASS
    switchNameHandler = (name_para) => {
        console.log('switchNameHandler function chạy nè');
        //DON'T DO THIS: this.state.persons[0].name="Cẩm Tú";
        this.setState({
            persons: [
                { name: name_para, age: 24 },
                { name: 'Trinh', age: 25 },
                { name: 'Ngân', age: 24 }
            ]
        }); //setState chỉ override (ghi đè) lên những state cần ghi đè mà thôi, cái nào ko nhắc tới thì nó vẫn để đó
    };
    
    showHideHandler = () => {
        console.log("show hide function works");
        const check= this.state.showPerson;
        console.log('giá trị sau khi click nút', check);
        this.setState({ showPerson: !check }); //dấu ! là not operator đó, hay dùng khi check điều kiện so sánh
        console.log("để ý là nó không cần load lại hết trang nè, bằng chứng là còn nguyên đám log của console");
    };
    render() {
        return (
            <div>
        
                <h1>Rendering Content Conditionally</h1>
                <button onClick={this.showHideHandler}>ẨN/ HIỆN NỘI DUNG</button>

                {/* JSX nên là chỉ chạy được mấy code đơn giản thôi, nên ko check đk if như bình thường được */}
                {/* nên ta xài ternary operator- toán tử ba ngôi/ toán tử bậc ba */}
                { this.state.showPerson ? //true thì hiện, false thì hiện null
                    <div>
                        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={() => this.switchNameHandler('Cẩm Tú')}
                        > My hobbies: Watching movie </Person>
                        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                    </div>:null
                }
                
            </div>
        )
    }
}
