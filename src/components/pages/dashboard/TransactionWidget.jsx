import React from "react";
import Table from "../../table/Table";
import { UserConsumer } from "@/contexts/UserProvider";
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
      <UserConsumer>
        {({ data }) => (
          <Table
            data={data && data.transactions}
            columns={columns}
            title="Transactions"
          ></Table>
        )}
      </UserConsumer>
    );
  }
}

export default TransactionWidget;
