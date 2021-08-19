import React from "react";
import useStyle from "./TodoCountStyle";
import { Typography } from "@material-ui/core";



const TodoCount = (props) => {
    
    const classes = useStyle();

    const completedTodos = props.todosProp.filter( todoObject => {
        return todoObject.completed === true;
    });
    
    return (
        <div className={classes.countCountainer}>
      <Typography className={classes.textCount}>
        {completedTodos.length}/{props.todosProp.length} Todos erledigt
      </Typography>
        </div>
    );
  };
  
  export default TodoCount;