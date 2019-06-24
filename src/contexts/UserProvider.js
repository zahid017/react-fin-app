import React from "react";
import { user } from "../constants/UserContext";

import { getData } from "../services/GetDataService";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      user: user.userName,
      isAuth: true,
      data: {
        transaction: [],
        invoices: [],
        totalAmount: 0.0,
        threshold: 0.0,
        name: "",
        status: null
      }
    };
    this.getData = this.getData.bind(this);
    this.updateInvoices = this.updateInvoices.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  getData() {
    getData().then(rawData => {
      const data = rawData[0];
      let status = this.updateStatus(data.totalAmount, data.threshold);
      this.setState({
        data: {
          transactions: data.transactions,
          invoices: data.invoices,
          totalAmount: data.totalAmount,
          threshold: data.threshold,
          name: data.name,
          status: status
        }
      });
    });
  }

  updateStatus(totalAmount, threshold) {
    if (totalAmount < threshold && totalAmount > 0) {
      return "Moderate";
    }
    if (totalAmount < 0) {
      return "Poor";
    }
    return "Good";
  }

  componentDidMount() {
    this.getData();
  }

  updateInvoices(transData) {
    if (
      this.state.data.invoices.filter(
        item => item.uniqueId === transData.uniqueId
      ).length
    ) {
      // copy invoice array for update
      let invoices = [...this.state.data.invoices];

      this.state.data.invoices.forEach((item, index) => {
        if (item.uniqueId === transData.uniqueId) {
          invoices[index] = transData;
        }
      });
      // copy transactions array and update total amount
      let totalAmount = 0;
      let transactions = [...this.state.data.transactions];
      this.state.data.transactions.forEach((item, index) => {
        if (item.uniqueId === transData.uniqueId) {
          transactions[index].amount = transData.amount;
        }

        if (item.transactionType === "C") {
          totalAmount += item.amount ^ 0;
        }

        if (item.transactionType === "D") {
          totalAmount -= item.amount ^ 0;
        }
      });

      //update status
      let status = this.updateStatus(totalAmount, this.state.data.threshold);

      this.setState(prevState => ({
        data: {
          invoices: invoices,
          transactions: transactions,
          totalAmount: totalAmount,
          threshold: prevState.data.threshold,
          name: prevState.data.name,
          status: status
        }
      }));
    }
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          isAuth: this.state.isAuth,
          data: this.state.data,
          updateInvoices: this.updateInvoices
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
