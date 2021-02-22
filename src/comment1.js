import React, { useState, useEffect } from "react";
import Comment2 from "./comment2";
import InputBox from "./inputBox";
import Edit from "./edit&reply";
//level1
export default function comment(props) {
  const [level2, setLevel2] = useState(props.replies);
  const [task, setTask] = useState(null);
  const [body0, setBody] = useState(props.body);
  const editHandler = () => {
    setTask("edit");
  };
  const setTask0 = task0 => {
    setBody(task0);
    setTask(null);
  };
  //like handler or cmnts at level1(level2)
  useEffect(() => {
    setLevel2(props.replies);
  }, [props.replies]);
  const likeHandler = (postId, liked) => {
    if (liked === "Liked") {
      const a = level2.map(item => {
        // console.log(item);
        if (item.postId === postId) {
          item.likes--;
        }
        return item;
      });
      setLevel2(a);
      return;
    }
    const a = level2.map(item => {
      // console.log(item);
      if (item.postId === postId) {
        item.likes++;
      }
      return item;
    });
    // console.log(a);
    setLevel2(a);
  };
  const deleteHandler = idx => {
    console.log(idx);
    let a = [...level2];
    a.splice(idx, 1);
    setLevel2(a);
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
          like={liked => props.likeHandler(props.postId, liked)}
          likes={props.likes}
          reply={props.replyHandler}
        />
      ) : (
        <InputBox setTask0={setTask0} />
      )}
      {/*<InputBox /> */}
      <ul>
        {level2.map((item, idx) => (
          <Comment2
            key={idx}
            src={item.src}
            deleteHandler={() => deleteHandler(idx)}
            likeHandler={liked => likeHandler(item.postId, liked)}
            postId={item.postId}
            body={item.comment}
            name={item.name}
            likes={item.likes}
          />
        ))}
      </ul>
    </li>
  );
}
