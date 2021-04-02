import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import React, { Component } from 'react'

export default class Assignment extends Component {
//PROPERTY:

    state={
        userName: 'Kiseki',
        
    }

userNameChangeHandler=(event)=>{
    this.setState(
        {userName: event.target.value,} //do function này nó chứa nhiều cái dưới dạng object mà, do ta có lưu state là object nữa, nên argument là object
    );

};


// METHOD:
    render() {
        return (
            <div>
                <h1>Assignment- Bài tập</h1>
                <UserInput changed={this.userNameChangeHandler} currentUserName={this.state.userName}/>
                <UserOutput userName="Tú" />  
                <UserOutput userName={this.state.userName}/>
                <UserOutput userName={this.state.userName}/>  
            </div>
        )
    }
}
