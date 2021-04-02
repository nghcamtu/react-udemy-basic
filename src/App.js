import React, { Component } from 'react';
import './App.css'; //nhờ Webpack mới chèn CSS vào file JS như vầy được
import Assignment from './Assignment/Assignment';
import BestwayConditionalRendering from './ConditinallyRendering/BestwayConditionalRendering';
import ConditionallyRendering from './ConditinallyRendering/ConditionallyRendering';
import OutputingList from './OutputingList/OutputingList';
import Radium, { StyleRoot } from 'radium';

import Person from './Person/Person';
import StyleComp from './StyleComp/StyleComp';
import ViDuVeHOC from './ViDuVeHOC/ViDuVeHOC';
import DungPropType from './DungPropTypes/DungPropTypes';
import DungRef from './DungRef/DungRef';
import DungContextAPI from './DungContextAPI/DungContextAPI';


class App extends Component {
  //COMPONENT LIFECYCLE
  constructor(props_para) {
    super(props_para); //để kế thừa các property và method của class khác, thì cần có super() method
    // this.state={}; //cũng ở đây
    // this.newProperty
    console.log('[App.js] constructor nè');
  }


  // PROPERTY CỦA CLASS
  state = { //state là 1 special property của class component, ở ReactJS 16.8 trở đi thì state cũng có thể được dùng ở functional component qua cách import 
    persons: [
      { name: 'Tú', age: 24 },
      { name: 'Trinh', age: 25 },
      { name: 'Ngân', age: 24 }
    ],
    otherState: 'some other value'
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

  //COMPONENT LIFECYCLE
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps nè, đang nhận props là: ', props);
    return state;
  };

  //COMPONENT LIFECYCLE
  //ComponentDidMount chạy sau khi render() chạy xong
  componentDidMount() {
    console.log('[App.js] componentDidMount nè');
  };




  render() {
    //COMPONENT LIFECYCLE
    console.log('[App.js] render() nè');


    return (
      <StyleRoot>
        <div className="App">
          <h1>Xin chào</h1>
          <p>Chạy nè</p>
          {/* <Person></Person> */}

          {/* CHỈ DÙNG PROPS ĐỂ TRUYỀN DATA TỪ COMPONENT NÀY SANG COMPONENT KHÁC*/}
          {/* <Person name="Tú" age="24"/> 
        <Person name="Trinh" age="25">My hobbies: Watching movie </Person>
        <Person name="Ngân" age="24"/>  */}

          {/* DÙNG STATE ĐỂ LẤY VALUE */}
          <button onClick={this.switchNameHandler.bind(this, 'AAA')}>Click me</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler('Cẩm Tú')}
          > My hobbies: Watching movie </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

          {/* ==================================================================== */}
          {/* ASSIGNMENT- BÀI TẬP */}
          <hr />

          <Assignment />
          {/* ==================================================================== */}
          {/* RENDERING CONTENT CONDITIONALLY - render content theo điều kiện*/}
          <hr />
          <ConditionallyRendering />
          <BestwayConditionalRendering />

          {/* ==================================================================== */}
          {/* OUTPUTING LIST */}
          <OutputingList />

          {/* ==================================================================== */}
          {/* DÙNG STYLED COMPONENT ĐỂ CSS */}
          <StyleComp />

          {/* ==================================================================== */}
          {/* DÙNG STYLED COMPONENT ĐỂ CSS */}

          {/* ==================================================================== */}
          {/* VÍ DỤ VỀ HIGHER ORDER COMPONENT */}
          <ViDuVeHOC/>
          
          {/* ==================================================================== */}
          {/* VÍ DỤ VỀ PROPTYPES */}
          <DungPropType/>
          
          {/* ==================================================================== */}
          {/* VÍ DỤ VỀ REF- REFERENCE */}
          <DungRef/>
          
          {/* ==================================================================== */}
          {/* VÍ DỤ VỀ CONTEXT -useContext */}
          <DungContextAPI/>
        </div>
      </StyleRoot> //này là của Radium để css media query, keyframe các kiểu



    );
  }
}

export default App;
