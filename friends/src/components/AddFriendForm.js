import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriendForm extends React.Component {
    state = {
        newFriend: {
          name: "",
          age: "",
          email: ""
        }
      };
    
      handleChange = e => {
        this.setState({
          newFriend: {
            ...this.state.newFriend,
            [e.target.name]: e.target.value
          }
        });
      };
    
      addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
          .post("http://localhost:5000/api/friends", this.state.newFriend)
          .then(res => {
            this.setState({friends: res.data})
          })
          .catch(err => console.log(err));
      };
    
      render() {
        return (
          <div>
            <form onSubmit={this.addFriend}>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.newFriend.name}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="age"
                placeholder="age"
                value={this.state.newFriend.age}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                value={this.state.newFriend.email}
                onChange={this.handleChange}
              />
              <button>Add Friend</button>
            </form>
          </div>
        );
      }
}

export default AddFriendForm;