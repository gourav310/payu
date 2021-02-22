import React, { useState } from "react";
import data from "./data0.json";
import Comment from "./comment";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
const User = props => {
  return (
    <>
      <div className="user">
        <h3>
          Hello, {props.userName}
          <img
            src={props.link}
            className=""
            height="30px"
            alt="trinity-512px"
            border="0"
          />
        </h3>
      </div>
    </>
  );
};
export default function AllComments(props) {
  const [newComment, setComment] = useState("");
  const [d, setD] = useState(0);
  const [arr, setArr] = useState(data);
  const postComment = () => {
    let n = arr.length;
    const obj = {
      name: props.userName,
      postId: arr[n - 1].postId + 1,
      time: Date.parse(new Date()),
      src: props.link,
      likes: 0,
      comment: newComment
    };
    console.log(obj);
    const a = [...arr];
    a.push(obj);
    setArr(a);
    setComment("");
  };
  const deleteHandler = idx => {
    let a = [...arr];
    a.splice(idx, 1);
    setArr(a);
    setD(d + 1);
  };
  const likeHandler = (postId, liked) => {
    // console.log(postId,liked);
    if (liked === "Liked") {
      const a = arr.map(item => {
        // console.log(item);
        if (item.postId === postId) {
          item.likes--;
        }
        return item;
      });
      setArr(a);
      return;
    }
    const a = arr.map(item => {
      // console.log(item);
      if (item.postId === postId) {
        item.likes++;
      }
      return item;
    });
    // console.log(a);
    setArr(a);
  };
  return (
    <div>
      <User {...props} />
      <div className="container">
        <div className="row">
          <InputGroup>
            <Input
              onChange={e => setComment(e.target.value)}
              placeholder="Write a comment..."
              value={newComment}
            />
            <InputGroupAddon addonType="append">
              <Button
                color="none"
                onClick={postComment}
                disabled={newComment.trim() === ""}
                className="btn-outline-primary"
              >
                Post
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="row" style={{ paddingTop: "10px" }}>
          <ul>
            {arr.map((item, idx) => (
              <Comment
                d={d}
                key={idx}
                postId={item.postId}
                src={item.src}
                likeHandler={likeHandler}
                body={item.comment}
                deleteHandler={() => deleteHandler(idx)}
                name={item.name}
                likes={item.likes}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
