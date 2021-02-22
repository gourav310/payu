import React, { useState } from "react";
///edit like share delete bar
export default function App(props) {
  const [Liked, setLiked] = useState("Like");
  const likeOrUnlike = () => {
    if (Liked === "Like") {
      setLiked("Liked");
    } else {
      setLiked("Like");
    }
    props.like(Liked);
  };
  return (
    <div className="editreply">
      <div className="link" onClick={() => likeOrUnlike()}>
        ({props.likes}) {Liked}
      </div>
      <div className="link" onClick={props.reply}>
        Reply
      </div>
      <div className="link" onClick={props.deleteHandler}>
        Delete
      </div>
      <div className="link" onClick={props.edit}>
        Edit
      </div>
    </div>
  );
}
