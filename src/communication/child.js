import React, { Component } from 'react'

export default class Child extends Component {

    handleResetInfo = () =>{
        const username = "Cybersoft";
        const age ="4"
        // console.log(username, age);
        this.props.resetInfo(username, age);
    }

    render() {
        // const propsUserName = this.props.username;
        // console.log(propsUserName);
        // console.log(this.props);
        const {username, age} = this.props
        // console.log(username);
        
        return (
            <div>
                <h3>Child Component</h3>
                <p>Username: {username} - Age: {age}</p>
                <button className='btn btn-danger' onClick={this.handleResetInfo} >
                   Reset Info
                </button>
            </div>
        );
    }
}
