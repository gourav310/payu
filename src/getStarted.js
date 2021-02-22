import React, { useState } from "react";
import Img from "./img.js";
import { InputGroup, Input, Button } from "reactstrap";

export default function start(props) {
  const [selectedIdx, setIdx] = useState(1);
  const [name, setName] = useState("");
  const selected = selIdx => {
    setIdx(Number(selIdx));
  };

  const links = [
    "https://i.ibb.co/gmdQnxT/batman-512px.png",
    "https://i.ibb.co/T8Td4vb/trinity-512px.png",
    "https://i.ibb.co/sw7jfrp/cristiano-ronaldo-512px.png",
    "https://i.ibb.co/jW6YSTw/dave-grohl-512px.png",
    "https://i.ibb.co/xJ6jcH2/girl-in-ballcap-512px.png",
    "https://i.ibb.co/YjSsQ6w/indian-woman-512px.png"
  ];
  const passDataToParent = () => {
    const link = links[selectedIdx - 1];
    // const name=name;
    props.sendData(link, name);
  };
  return (
    <>
      <div className="container frontPage">
        <h3 className="row avatar">Select Avatar</h3>
        <div
          className="row"
          style={{ paddingLeft: "10px", paddingTop: "30px" }}
        >
          {links.map((link, idx) => (
            <Img
              key={idx}
              selected={selected}
              selectedIdx={selectedIdx}
              idx={idx + 1}
              src={link}
            />
          ))}
        </div>
        <InputGroup
          className="row frontPage nameCol"
          style={{ paddingTop: "50px" }}
        >
          <Input
            name="name"
            onChange={e => setName(e.target.value)}
            className="col-6"
            placeholder="Enter your name"
          />
          <br />
          <Button
            color=" btn-outline-primary"
            onClick={passDataToParent}
            disabled={name.trim() === ""}
          >
            Get Started
          </Button>
        </InputGroup>
      </div>
    </>
  );
}
