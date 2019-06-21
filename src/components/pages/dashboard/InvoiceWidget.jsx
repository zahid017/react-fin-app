import React from "react";
import Table from "../../table/Table";
const columns = [
  {
    key: "uniqueId",
    name: "ID"
  },
  {
    key: "clientName",
    name: "Client Name"
  },
  {
    key: "createdAt",
    name: "Created At"
  },
  {
    key: "amount",
    name: "Amount"
  },
  {
    key: "status",
    name: "Status"
  }
];
class InvoiceWidget extends React.Component {
  render() {
    return (
      <Table
        data={this.props.data && this.props.data.invoices}
        columns={columns}
        title="Invoices"
      ></Table>
    );
  }
}

export default InvoiceWidget;
