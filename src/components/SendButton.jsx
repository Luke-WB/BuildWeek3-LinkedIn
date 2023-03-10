import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const SendButton = ({ fetchPostComments, check }) => {
  let cl =
    "greyHover rounded-2 px-2 py-3 proGreyDark d-flex align-items-center";
  const [likeSwitch, setLikeSwitch] = useState(false);
  if (likeSwitch) {
    cl += " sendButton";
  }

  return (
    <div
      className={cl}
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        fetchPostComments();
        check();
        setLikeSwitch(!likeSwitch);
      }}
    >
      <span className="me-1">
        <FaTelegramPlane />
      </span>
      Send
    </div>
  );
};

export default SendButton;
