import React from "react";
import UserContext from "./UserContext";
import { user } from "../constants/UserContext";

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      user: user.userName,
      isAuth: true
    };
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
