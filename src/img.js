import React from "react";

export default function img(props) {
  const classname =
    props.selectedIdx === props.idx ? "highlight rounded-circle" : "img";
  return (
    <div
      className="rounded-circle "
      onClick={() => props.selected(props.idx)}
      id={props.idx + 1}
    >
      <img
        src={props.src}
        className={classname}
        alt="trinity-512px"
        border="0"
      />
    </div>
  );
}
