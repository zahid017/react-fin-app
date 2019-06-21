import React from "react";
import TransactionWidget from "./TransactionWidget";
import InvoiceWidget from "./InvoiceWidget";
import StatusWidget from "./StatusWidget";
import { getData } from "../../../services/GetDataService";
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
    getData().then(data => this.setState({ data }));
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
