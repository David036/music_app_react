import React, { Component, Fragment } from "react";
import "./inputStyles.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
export default class InputField extends Component {
  state = {
    activePage: 1,
    name: "",
    email: "",
    password: "",
  };
  userFunction = () => {
    this.props.setName({name:this.state.name})
  }
  coutFunction = (el) => {
    if (this.state.activePage === 3) {
      console.log("newpage");
    } else if (
      (el === "text" && this.state.name !== "") ||
      (el === "email" && this.state.email !== "") ||
      (el === "password" && this.state.password !== "")
    ) {
      this.setState({
        activePage: this.state.activePage + 1,
      });
    } else {
      alert("Empty!");
    }
  };
  activeFunction = (el) => {
    this.setState({
      activePage: el,
    });
  };
  typeFunction = (type, e) => {
    if (type === "text") {
      this.setState({
        name: e.target.value,
      });
    } else if (type === "email") {
      this.setState({
        email: e.target.value,
      });
    } else {
      this.setState({
        password: e.target.value,
      });
    }
    console.log(this.state.name, this.state.email, this.state.password);
  };
  render() {
    let btnArray = [1, 2, 3];
    let inputArray = [
      { name: "Name", type: "text", index: 1 },
      { name: "Email", type: "email", index: 2 },
      { name: "Password", type: "password", index: 3 },
    ];
    return (
      <div className="input-block">
        <div className="pagination">
          {btnArray.map((el) => {
            return (
              <button
                onClick={() => {
                  this.activeFunction(el);
                }}
                className={this.state.activePage === el ? "active-btn" : ""}
              >
                {el}
              </button>
            );
          })}
        </div>

        {inputArray
          .filter((element) => element.index === this.state.activePage)
          .map((el) => (
            <Fragment>
              <TextField
                value={
                  el.type === "text"
                    ? this.state.name
                    : el.type === "email"
                    ? this.state.email
                    : this.state.password
                }
                onChange={(e) => {
                  this.typeFunction(el.type, e);
                }}
                type={el.type}
                id="outlined-basic"
                label={el.name}
                variant="outlined"
              />
              {this.state.activePage === 3 ? (<NavLink onClick={this.userFunction} to={this.state.password !== ''? '/home':'/'}>Next</NavLink>):(<Button
                onClick={() => {
                  this.coutFunction(el.type);
                }}
                variant="contained"
              >
                Next
              </Button>)}
              

            </Fragment>
          ))}
      </div>
    );
  }
}
