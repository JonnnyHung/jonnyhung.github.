import React from "react";
import { addTodo } from "../todolist/todo.actions";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() != "") {
      dispatch(addTodo(input.value.trim()));
    }
  };
  return (
    <React.Fragment>
      <input type="text" ref={(node) => (input = node)} />
      <button type="submit" onClick={onClick}>
        Edit
      </button>
      <button type="reset" onClick={onClick}>
        Remove
      </button>
    </React.Fragment>
  );
};

export default connect()(AddTodo);
