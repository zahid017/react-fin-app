import React from "react";
import "./status.css";
import { UserConsumer } from "@/contexts/UserProvider";

export default class StatusWidget extends React.Component {
  render() {
    return (
      <UserConsumer>
        {({ data }) => {
          return (
            <div className={`status status-${data.status}`}>
              <h2>Financial Status</h2>
              <h1>{data.status}</h1>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
