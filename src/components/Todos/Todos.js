import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import myStyle from "./TodosStyle";

export default myStyle(
  class Todos extends React.Component {
    render() {
      const { classes } = this.props;
      return (
        <div className={classes.container}>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChange={this.props.handleChange}
              deleteTodo={this.props.deleteTodo}
            />
          ))}
        </div>
      );
    }
  }
);
