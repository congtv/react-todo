import React, { MouseEventHandler } from "react";
import PropTypes from "prop-types";

type TodoProps = {
  //
  id: string;
  content: string;
};

const onSelect = (e: any) => {
  e.currentTarget.style.backgroundColor = "green";
};

const Todo = (props: TodoProps) => {
  return (
    <div className="p-4 bd-highlight" style={{border: "2px solid red", padding:"0" , margin: "5px 5px 0px 0px",borderRadius: "5px"}} onClick={(e) => onSelect(e)}>
      <div style={{width:"100%", height:"100%"}}>
        <span className="todo__date__range" style={{fontSize: "9px"}}>10/02/2022 ~ 11/02/2022</span>
        <p className="todo__content">{props.content}</p>
        <input type="checkbox" className="form-check-input" />
      </div>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

export default Todo;
