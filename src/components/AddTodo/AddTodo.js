import React, { Component } from "react";
import { Input, Typography, Fab } from '@material-ui/core';
import myStyle from "./AddTodoStyle"
import AddIcon from '@material-ui/icons/Add';

export default myStyle(class AddTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    if(Input.value.length < 1) {
      return;
    }
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
      <Typography className={classes.text} variant="h1">Todos</Typography>
      <form className={classes.formControler} onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
          className={classes.input}
        />
          <Fab type="submit" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
    </form>
    </div>
    );
  }
})
