import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
function DeleteButton(props) {
  return (
    <div>
      <DeleteIcon id={props.identifier} onClick={props.onClick}></DeleteIcon>
    </div>
  );
}
export default DeleteButton;
