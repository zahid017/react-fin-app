import React from "react";
import Table from "../../table/Table";
const columns = [
  {
    key: "uniqueId",
    name: "ID"
  },
  {
    key: "description",
    name: "Descripttion"
  },
  {
    key: "transactionDate",
    name: "Date"
  },
  {
    key: "transactionType",
    name: "Type"
  },
  {
    key: "amount",
    name: "Amount"
  }
];

class TransactionWidget extends React.Component {
  render() {
    return (
      <Table
        data={this.props.data && this.props.data.transactions}
        columns={columns}
        title="Transactions"
      ></Table>
    );
  }
}

export default TransactionWidget;
