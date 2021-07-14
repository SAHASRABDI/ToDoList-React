import React from "react";
import DeleteButton from "./DeleteButton";
function TaskList(props) {
  return (
    <div>
      <ul className="theList">
        {props.arrayData.map((data, index) => (
          <div key={index}>
            <div className="Wrapper">
              <li className="List-Wrapper">{data}</li>

              <DeleteButton
                identifier={index}
                onClick={() => props.onClick(index)}
              ></DeleteButton>
            </div>
            <br></br>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
