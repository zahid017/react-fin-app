import React from "react";
import TransactionWidget from "./TransactionWidget";
import InvoiceWidget from "./InvoiceWidget";
import StatusWidget from "./StatusWidget";
import UserProvider from "@/contexts/UserProvider";

import "./dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <UserProvider>
        <>
          <div className="app-container">
            <div className="app-row">
              <div className="app-col-3">
                <div className="app-content">
                  <TransactionWidget />
                </div>
              </div>
              <div className="app-col-3">
                <div className="app-content">
                  <InvoiceWidget />
                </div>
              </div>
              <div className="app-col-3">
                <div className="app-content">
                  <StatusWidget />
                </div>
              </div>
            </div>
          </div>
        </>
      </UserProvider>
    );
  }
}

export default Dashboard;
