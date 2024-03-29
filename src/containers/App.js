import React from "react";
import Header from "../components/common/Header/Header";
import AddTodo from "../components/AddTodo/AddTodo";
import Todos from "../components/Todos/Todos";
import Footer from "../components/common/Footer/Footer";
import { v4 as uuidv4 } from "uuid";
import TodoCount from "../components/TodoCount/TodoCount";
import myStyle from "./AppStyle";


export default myStyle(
 class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <TodoCount  todosProp={this.state.todos}/>
        <Todos
          todos={this.state.todos}
          handleChange={this.handleChange}
          deleteTodo={this.deleteTodo}
        />
        <Footer />
      </div>
    );
  }
}
)