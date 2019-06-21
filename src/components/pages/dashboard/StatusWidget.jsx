import React from "react";
import "./status.css";

export default class StatusWidget extends React.Component {
  render() {
    let status = "Good";
    if (this.props.data) {
      if (
        this.props.data.totalAmount < this.props.data.threshold &&
        this.props.data.totalAmount > 0
      ) {
        status = "Moderate";
      } else if (this.props.data.totalAmount < 0) {
        status = "Poor";
      }
    }

    return (
      <div className={`status status-${status}`}>
        <h2>Financial Status</h2>
        <h1>{status}</h1>
      </div>
    );
  }
}
