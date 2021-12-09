import React, { Component } from 'react'
import Child from './child';
import ChildFnc from './childFnc';
import ChildrenComponent from './children';

export default class Communication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Cybersoft",
            age: 4,
        };
    }

    handleChangeInfo = () => {
        this.setState({
            username: "Duy",
            age: 18,
        });
        // console.log(123);
    }

    reset = (username, age) => {
        //Hàm reset nhận lại data từ component child
        console.log(username, age);
        this.setState({
            // username: username,
            // age: age,
            //Nếu key value trùng nhau thì viết lại như vậy:
            username, age,
        });
    }

    render() {
        const { username, age } = this.state; //Bóc tách trong đối tượng state, khỏi cần viết this.state.username...
        return (
            <div>
                <h3>Communication</h3>
                <p>
                    Username: {username} - Age: {age}
                </p>
                <button className='btn btn-success' onClick={this.handleChangeInfo}>
                    Change Info
                </button>
                <hr />
                <Child username={username} age={age} resetInfo={this.reset} />
                <hr />
                <ChildFnc username={username} age={age} />
                <hr />
                <ChildrenComponent>
                    <p>Username</p>
                    <div>Duy</div>
                    <h3>Hello</h3>
                </ChildrenComponent>

            </div>
        )
    }
}
