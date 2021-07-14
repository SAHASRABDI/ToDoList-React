import React, { useState } from "react";
import TaskList from "./TaskList";
function ToDo() {
  const [TaskArray, setTaskArray] = useState([]);
  const [Task, setTask] = useState("");

  function Change(letters) {
    setTask(letters.target.value);

    console.log(letters.target.value);
  }
  function Submit() {
    var tempTask = TaskArray;
    if (Task) {
      tempTask = [...tempTask, Task];
      setTaskArray(tempTask);
    }

    setTask("");

    console.log("after addition of element array" + tempTask);
  }
  function Delete(index) {
    console.log("index to be deleted" + index.target.id);
    var ind = index.target.id;
    // var tempList = [...TaskArray];
    var temp = 0;
    var tempList = Array(TaskArray.length - 1);

    for (let i = 0; i < TaskArray.length; i += 1) {
      if (i === ind) {
        continue;
      } else {
        tempList[temp] = TaskArray[i];
        temp += 1;
      }
    }
    //console.log("value to be deleted" + tempList.splice(ind, 1));
    console.log("array after deletion" + tempList);
    setTaskArray(tempList);
  }
  return (
    <div className="App">
      <div className="InputPart">
        <h1>TO DO LIST</h1>
        <h2>WANT TO ADD A TASK??</h2>
        <div className="alignment">
          <textarea
            type="text"
            id="task"
            cols="40"
            rows="5"
            name="task"
            placeholder="TYPE HERE"
            onChange={Change}
            value={Task}
          />
          <div>
            <button
              type="submit"
              style={{ margin: "5px" }}
              value="Submit"
              onClick={Submit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <TaskList arrayData={TaskArray} onClick={Delete}></TaskList>
    </div>
  );
}
export default ToDo;
