import React, { Component } from "react";
import { Fab, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

class AddTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    if (!this.state.title) {
      return;
    }
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <React.Fragment>
        <Typography
          style={{
            position: "absolute",
            left: "44%",
            margin: "auto",
            color: "#3f51b5",
          }}
          variant="h1"
        >
          Todos
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "row",
          }}
        >
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Add Todo..."
              value={this.state.title}
              onChange={this.onChange}
              autoComplete="off"
              style={{
                width: "300px",
                padding: "10px",
                borderRadius: "50px",
                margin: "5px",
                outline: "0",
                marginTop: "200px",
              }}
            />
            <Fab type="submit" value="Submit" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default AddTodo;
