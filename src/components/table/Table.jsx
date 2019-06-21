import React from "react";
import "./table.css";

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
                  <th key={item.name}>{item.name}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {this.props.data &&
              this.props.data.map(item => (
                <Row
                  key={item.uniqueId}
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
  console.log(props);
  return (
    <React.Fragment>
      <tr>
        {props.columns.map(item => (
          <td key={item.key}>{props.items[item.key]}</td>
        ))}
      </tr>
    </React.Fragment>
  );
};

export default Table;
