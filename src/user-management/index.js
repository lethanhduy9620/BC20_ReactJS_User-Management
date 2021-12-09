import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json"

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userList: data,
    };
  }

  _findIndex = (id) => {
    return this.state.userList.findIndex((user) => {
      return id === user.id;
    });
  }

  handleUserDelete = (userID) => {
    let userList = [...this.state.userList]
    let index = this._findIndex(userID);
    userList.splice(index, 1);
    this.setState({ userList });
  }

  render() {
    const { userList } = this.state;
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users userList={userList} userDelete={this.handleUserDelete} />
        <Modal />
      </div>
    );
  }
}

export default Home;
