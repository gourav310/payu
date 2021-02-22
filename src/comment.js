import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import InputBox from "./inputBox";
import Edit from "./edit&reply";
import data from "./data1.json";
import Comment1 from "./comment1";
//used to render comments with simnple data

///level0
export default function comment(props) {
  const [nestedData, setNested] = useState([]);
  // const [d, setD] = useState(0);
  const [task, setTask] = useState(null);
  const [body0, setBody] = useState(props.body);
  const editHandler = () => {
    setTask("edit");
  };
  const setTask0 = task0 => {
    setBody(task0);
    setTask(null);
  };
  const doReply = text => {
    return;
  };
  useEffect(() => {
    console.log("aaa");
    const d = data.filter(
      item => item.postId - props.postId > 0 && item.postId - props.postId < 1
    );
    setNested(d);
    console.log(props.postId, data[0].postId);
    console.log(d);
  }, [props.d]);
  //like handler for level1 (2)
  const likeHandler = (postId, liked) => {
    if (liked === "Liked") {
      const a = nestedData.map(item => {
        // console.log(item);
        if (item.postId === postId) {
          item.likes--;
        }
        return item;
      });
      setNested(a);
      return;
    }
    const a = nestedData.map(item => {
      // console.log(item);
      if (item.postId === postId) {
        item.likes++;
      }
      return item;
    });
    // console.log(a);
    setNested(a);
    console.log(nestedData);
  };
  //delete handler
  const deleteHandler = idx => {
    console.log(idx);
    let a = [...nestedData];
    a.splice(idx, 1);
    //  console.log(a);
    setNested([...a]);
    // console.log(nestedData);
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
      {/* <InputBox /> */}
      {task === null ? (
        <Edit
          deleteHandler={props.deleteHandler}
          edit={editHandler}
          likes={props.likes}
          like={liked => props.likeHandler(props.postId, liked)}
          reply={props.replyHandler}
        />
      ) : (
        <InputBox setTask0={setTask0} />
      )}
      <ol>
        {console.log(nestedData)}
        {nestedData.map((item, idx) => (
          <Comment1
            likes={item.likes}
            key={idx}
            likeHandler={likeHandler}
            deleteHandler={() => deleteHandler(idx)}
            postId={item.postId}
            src={item.src}
            doReply={doReply}
            body={item.comment}
            name={item.name}
            replies={item.replies}
          />
        ))}
      </ol>
    </li>
  );
}
