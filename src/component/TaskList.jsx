import React from "react";
import DeleteButton from "./DeleteButton";
function TaskList(props) {
  return (
    <div>
      <ul className="theList">
        {props.arrayData.map((data, index) => (
          <li key={index}>
            {data}

            <DeleteButton
              identifier={index}
              onClick={props.onClick}
            ></DeleteButton>

            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
