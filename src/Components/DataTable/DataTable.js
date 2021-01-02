import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./DataTable.css"
import Timeline from "../Timeline/Timeline"

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : this.props.data,
        selectedData:[],
        selectedItem:0,
    }
  }
  handlePass = (awbno) => {
    let filterData = this.props.data.filter((data) => {
      return data.awbno == awbno;
    });
    this.setState({selectedData:filterData});
  };
  selectedItem = (i) => {
    this.setState({selectedItem:i})
  }
  render() {
    return (
      <React.Fragment>
        <Table    responsive>
          <thead>
            <tr>
              <th className="awb">AWB NUMBER</th>
              <th>TRANSPORTER</th>
              <th className="source">SOURCE</th>
              <th className="destination">DESTINATION</th>
              <th>BRAND</th>
              <th className="startdate">START DATE</th>
              <th className="enddate">ETD</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data && this.props.data.map((data,i) => (
              <tr key={i} onClick={() => {
                this.handlePass(data.awbno);
                this.selectedItem(i);
              }}
              className={this.state.selectedItem === i ? "active" : ""}>
                <td>{data.awbno}</td>
                <td>{data.carrier}</td>
                <td>{data.from}</td>
                <td>{data.to}</td>
                <td>{data.carrier}</td>
                <td>{data.pickup_date && data.pickup_date.substring(0, 10)}</td>
                <td>
                  {data.extra_fields && data.extra_fields.expected_delivery_date.substring(0, 10)}
                </td>
                <td style={{color:"green"}}>{data.current_status}</td>
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
