import React, { useState, useEffect, useRef } from "react";
import TaskList from "./TaskList";
function ToDo() {
  const [TaskArray, setTaskArray] = useState([]);
  const [Task, setTask] = useState("");
  const inputRef = useRef(null);
  //so that the cursor stays at the text earea even after refresh
  useEffect(() => {
    inputRef.current.focus();
  });

  function Change(letters) {
    setTask(letters.target.value);
  }
  function Submit() {
    var tempTask = TaskArray;
    if (Task) {
      setTaskArray([...tempTask, Task]);
    }
    setTask("");
  }
  function Delete(index) {
    // console.log(index.target.id);
    //var ind = index.target.id;

    // var temp = 0;
    // var tempList = Array(TaskArray.length - 1);

    // for (let i = 0; i < TaskArray.length; i += 1) {
    //   if (i === index) {
    //     continue;
    //   } else {
    //     tempList[temp] = TaskArray[i];
    //     temp += 1;
    //   }
    // }
    var tempList = [...TaskArray];
    tempList.splice(index, 1);

    tempList = [...tempList];
    console.log(tempList);
    setTaskArray(tempList);
  }
  return (
    <div>
      <div className="InputPart">
        <h1>TO DO LIST</h1>
        {TaskArray.length === 0 ? (
          <div>
            <h2 style={{ color: "white" }}>You have no task to do</h2>
            <h2>WANT TO ADD A TASK??</h2>
          </div>
        ) : (
          <h2>WANT TO ADD A ANOTHER TASK??</h2>
        )}

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
            ref={inputRef}
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

          <br></br>
        </div>
      </div>
      <div className="BorderDefine">
        <TaskList arrayData={TaskArray} onClick={Delete}></TaskList>
      </div>
    </div>
  );
}
export default ToDo;
