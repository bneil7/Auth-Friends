import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendList extends React.Component {
    state = {
        getFriends: []
      };
    
      componentDidMount() {
        this.getData();
      }
    
      getData = () => {
        axiosWithAuth()
          .get("/friends")
          .then(res => {
            this.setState({
              getFriends: res.data
            });
          })
          .catch(err => console.log(err));
      };
    
      formatData = () => {
        const formattedData = [];
        // console.log(this.state.getFriends);
        this.state.getFriends.forEach((friend, index, arr) => {
          if (friend) {
            formattedData.push({
            id: friend.id,
            name: friend.name,
            age: friend.age,
            email: friend.email
            });
          }
        });
        return formattedData;
      };
    
    render(){
        const getFriends = this.formatData();
        return (
            <div>
                {getFriends.map(friend => 
                <ul key={friend.id}>
                    <li>name: {friend.name}</li>
                    <li>age: {friend.age}</li>
                    <li>email: {friend.email}</li> 
                </ul>
                )} 
            </div>
        )}
}

export default FriendList;