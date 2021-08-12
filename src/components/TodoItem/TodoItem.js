import React from "react";
import { Button, List, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import myStyle from "./TodoItemStyle"

export default myStyle(class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "red",
      textDecoration: "line-through"
    };

    const { completed, id, title } = this.props.todo;
    const { classes } = this.props;

    return (
      <div className={classes.container}>
      <List className={classes.todoItem}>
        <Checkbox
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChange(id)}
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => this.props.deleteTodo(id)}
        >
          Delete
        </Button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </List>
    </div>
    );
  }
})
