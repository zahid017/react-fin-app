import React, { useState } from "react";
import Table from "../../table/Table";
import { UserConsumer } from "@/contexts/UserProvider";
import { Modal, Button, Form } from "react-bootstrap";

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
  },
  {
    key: "action",
    name: "Action",
    render: item => {
      return (
        <UserConsumer>
          {({ updateInvoices }) => {
            return <BsModal updateInvoices={updateInvoices} item={item} />;
          }}
        </UserConsumer>
      );
    }
  }
];
class InvoiceWidget extends React.Component {
  render() {
    return (
      <UserConsumer>
        {({ data }) => {
          return (
            <Table
              data={data && data.invoices}
              columns={columns}
              title="Invoices"
              editable={true}
            ></Table>
          );
        }}
      </UserConsumer>
    );
  }
}

const BsModal = props => {
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState({
    clientName: props.item.clientName,
    amount: props.item.amount,
    status: props.item.status,
    uniqueId: props.item.uniqueId,
    createdAt: props.item.createdAt
  });

  const showModal = () => {
    setShow(!show);
  };
  const handleInputChange = e => {
    setFormValue(
      Object.assign({}, formValue, {
        [e.target.name]: e.target.value
      })
    );
  };

  const formSubmit = e => {
    e.preventDefault();
    props.updateInvoices(formValue);
  };

  return (
    <>
      <span
        onClick={showModal}
        style={{
          textDecoration: "underline",
          color: "blue",
          cursor: "pointer"
        }}
      >
        Edit
      </span>

      <Modal show={show} onHide={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formSubmit}>
            <Form.Group controlId="formCientName">
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                type="text"
                name="clientName"
                value={formValue.clientName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={formValue.amount}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InvoiceWidget;
