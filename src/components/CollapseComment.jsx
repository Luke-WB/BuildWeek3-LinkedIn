import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

import Comments from "./Comments";

function Example(props) {
  return (
    <>
      <Collapse in={props.open}>
        <div id="example-collapse-text">
          <Comments singlePostId={props.singlePostId} />
        </div>
      </Collapse>
    </>
  );
}

export default Example;
