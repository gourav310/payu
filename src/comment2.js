import React, { useState } from "react";
import Edit from "./edit&reply";
import InputBox from "./inputBox";
// level2
export default function comment(props) {
  const [task, setTask] = useState(null);
  const [body0, setBody] = useState(props.body);
  const editHandler = () => {
    setTask("edit");
  };
  const setTask0 = task0 => {
    setBody(task0);
    setTask(null);
  };
  return (
    <li>
      <div
        className="col title0"
        style={{ padding: "10px", paddingBottom: "2px" }}
      >
        <h6>
          <img
            src={props.src}
            className=""
            height="20px"
            width="20px"
            alt="trinity-512px"
            border="0"
          />
          {props.name}
        </h6>
      </div>
      <div className="col title1"> {body0} </div>
      {task === null ? (
        <Edit
          deleteHandler={props.deleteHandler}
          edit={editHandler}
          like={liked => props.likeHandler(liked)}
          likes={props.likes}
          reply={props.replyHandler}
        />
      ) : (
        <InputBox setTask0={setTask0} />
      )}
    </li>
  );
}
