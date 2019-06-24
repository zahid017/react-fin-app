import React from "react";
import "./table.css";
import { keyGenerator } from "@/utils/keyGenerator";

class Table extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.title && <h3 className="title">{this.props.title}</h3>}
        <table>
          <thead>
            <tr>
              {this.props.columns &&
                this.props.columns.map(item => (
                  <th key={keyGenerator()}>{item.name}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {this.props.data &&
              this.props.data.map(item => (
                <Row
                  key={keyGenerator()}
                  items={item}
                  columns={this.props.columns}
                />
              ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const Row = props => {
  return (
    <React.Fragment>
      <tr>
        {props.columns.map(item => {
          if (item.key === "action") {
            return <td key={keyGenerator()}>{item.render(props.items)}</td>;
          }
          return <td key={keyGenerator()}>{props.items[item.key]}</td>;
        })}
      </tr>
    </React.Fragment>
  );
};

export default Table;
