import React from "react";
import TransactionWidget from "./TransactionWidget";
import InvoiceWidget from "./InvoiceWidget";
import StatusWidget from "./StatusWidget";
import "./dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    return fetch("/userData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
        this.setState({ data: resData });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="content">
              <TransactionWidget data={this.state.data[0]} />
            </div>
          </div>
          <div className="col-3">
            <div className="content">
              <InvoiceWidget data={this.state.data[0]} />
            </div>
          </div>
          <div className="col-3">
            <div className="content">
              <StatusWidget data={this.state.data[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
