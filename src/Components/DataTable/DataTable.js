import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./DataTable.css"
import Timeline from "../Timeline/Timeline"

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : this.props.data,
        selectedData:[]
    }
  }
  handlePass = (awbno) => {
    let filterData = this.props.data.filter((data) => {
      return data.awbno == awbno;
    });
    this.setState({selectedData:filterData});
  };
  render() {
    //   console.log(this.props.data)
    return (
      <React.Fragment>
        <Table  bordered hover responsive>
          <thead>
            <tr>
              <th>AWB NUMBER</th>
              <th>TRANSPORTER</th>
              <th>SOURCE</th>
              <th>DESTINATION</th>
              <th>BRAND</th>
              <th>START DATE</th>
              <th>ETD</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data && this.props.data.map((data,i) => (
              <tr key={i} onClick={()=>this.handlePass(data.awbno)}>
                <td>{data.awbno}</td>
                <td>{data.carrier}</td>
                <td>{data.from}</td>
                <td>{data.to}</td>
                <td>{data.carrier}</td>
                <td>{data.pickup_date && data.pickup_date.substring(0, 10)}</td>
                <td>
                  {data.extra_fields && data.extra_fields.expected_delivery_date.substring(0, 10)}
                </td>
                <td>{data.current_status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Timeline data={this.state.selectedData[0]}/>
      </React.Fragment>
    );
  }
}

export default DataTable;
