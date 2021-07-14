import React from "react";
//import DeleteIcon from "@material-ui/icons/Delete";
function DeleteButton(props) {
  return (
    <div className="DeleteButton">
      <button id={props.identifier} onClick={props.onClick}>
        Delete
      </button>
    </div>
  );
}
export default DeleteButton;
