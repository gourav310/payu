import React, { useState } from "react";
import { Button } from "reactstrap";

export default function inputBox(props) {
  const [text, setText] = useState("");
  return (
    <div style={{ paddingTop: "5px" }}>
      <input className="inputBox" onChange={e => setText(e.target.value)} />
      {console.log(text)}
      <Button
        color="none inputButton"
        placeholder="Write a reply"
        className="btn-outline-primary"
        onClick={() => props.setTask0(text)}
        disabled={text.trim() === ""}
      >
        Post
      </Button>
    </div>
  );
}
