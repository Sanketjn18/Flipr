import axios from "axios";
import React, { Component } from "react";
import "./StateCounter.css";
import DataTable from "../DataTable/DataTable";

class StateCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OOD: 0,
      DEX: 0,
      DEL: 0,
      INT: 0,
      NFI: 0,
      data: [],
      filteredData: [],
      class: "DEL",
    };
  }
  componentDidMount() {
    const body = {
      email: "sanketjain070@gmail.com",
    };
    const config = {
      headers: { Authorization: `Bearer tTU3gFVUdP` },
    };
    axios
      .post(
        "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
        body,
        config
      )
      .then((res) => {
        this.setState({ data: res.data }, () => this.handleFilter("DEL"));
        for (let i = 0; i < res.data.length; i++) {
          switch (res.data[i].current_status_code) {
            case "OOD":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  OOD: prevState.OOD + 1,
                };
              });
              break;
            case "DEL":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  DEL: prevState.DEL + 1,
                };
              });
              break;
            case "INT":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  INT: prevState.INT + 1,
                };
              });
              break;
            case "DEX":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  DEX: prevState.DEX + 1,
                };
              });
              break;
            case "NFI":
              this.setState((prevState) => {
                return {
                  ...prevState,
                  NFI: prevState.NFI + 1,
                };
              });
              break;
            default:
              break;
          }
        }
      });
  }
  handleFilter = (param) => {
    let tempData = [];
    tempData = this.state.data.filter((x) => {
      return x.current_status_code == param;
    });
    this.setState({ filteredData: tempData });
  };
  render() {
    const { OOD, DEL, INT, DEX, NFI } = this.state;
    return (
      <React.Fragment>
        <div className="counterBoard">
          <div
            className={
              this.state.class === "DEL" ? "counter_card selected" : "counter_card"
            }
            onClick={() => {
              this.handleFilter("DEL");
              this.setState({ class: "DEL" });
            }}
          >
            <span className="counterType">DEL</span>
            <span className="counterCount">{DEL}</span>
          </div>
          <div
            className={
              this.state.class === "INT" ? "counter_card selected" : "counter_card"
            }
            onClick={() => {
              this.handleFilter("INT");
              this.setState({ class: "INT" });
            }}
          >
            <span className="counterType">INT</span>
            <span className="counterCount">{INT}</span>
          </div>
          <div
               className={
                this.state.class === "OOD" ? "counter_card selected" : "counter_card"
              }
              onClick={() => {
                this.handleFilter("OOD");
                this.setState({ class: "OOD" });
              }}
          >
            <span className="counterType">OOD</span>
            <span className="counterCount">{OOD ? OOD : 0}</span>
          </div>
          <div
            className={
              this.state.class === "DEX" ? "counter_card selected" : "counter_card"
            }
            onClick={() => {
              this.handleFilter("DEX");
              this.setState({ class: "DEX" });
            }}
          >
            <span className="counterType">DEX</span>
            <span className="counterCount">{DEX}</span>
          </div>
          <div
              className={
                this.state.class === "NFI" ? "counter_card selected" : "counter_card"
              }
              onClick={() => {
                this.handleFilter("NFI");
                this.setState({ class: "NFI" });
              }}
          >
            <span className="counterType">NFI</span>
            <span className="counterCount">{NFI}</span>
          </div>
        </div>
        <DataTable data={this.state.filteredData} />
      </React.Fragment>
    );
  }
}

export default StateCounter;
