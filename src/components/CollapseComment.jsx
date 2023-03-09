import React, { useState } from "react";
import { Badge, Collapse } from "react-bootstrap";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsHandThumbsUp, BsSkipEndFill } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";

import Comments from "./Comments";
import LikeButton from "./LikeButton";

const CollapseComment = (props) => {
  const [open, setOpen] = useState(false);

  const [counter, setCounter] = useState(null);
  function updateCounter(counter) {
    setCounter(counter);
  }

  return (
    <>
      <div className="d-flex justify-content-evenly text-secondary">
        <LikeButton background= {"#59a2ed"} colorText = "white" />
        {/* <div className="greyHover rounded-2 me-2 px-4 py-3">
          <BsHandThumbsUp className="fs-4 me-2" />
          Like
        </div> */}
        <div
          className="greyHover rounded-2 me-2 px-4 py-3 d-flex align-items-center"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <BiMessageRoundedDetail className="fs-4 me-2" />
          Comments
          <div style={{background:"#59a2ed", padding:"2px 6px"}} className="proVerySmall rounded-2 text-light ms-2">{counter}</div>
        </div>
        <div className="greyHover rounded-2 me-2 px-4 py-3">
          <MdOutlinePostAdd className="fs-4 me-2" />
          Repost
        </div>
        <div className="greyHover rounded-2 me-2 px-4 py-3">
          <BsSkipEndFill className="fs-4 me-2" />
          Send
        </div>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Comments singlePostId={props.singlePostId} updateCount={updateCounter} />
        </div>
      </Collapse>
    </>
  );
};

export default CollapseComment;
