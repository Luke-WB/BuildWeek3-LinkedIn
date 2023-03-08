import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";

const LikeButton = ({ background, colorText }) => {
  let bg = "";
  let cl = "";
  const [likeSwitch, setLikeSwitch] = useState(false);
  if (likeSwitch) {
    bg = background;
    cl = colorText;
  }

  return (
    <div
      onClick={() => setLikeSwitch(!likeSwitch)}
      className="greyHover rounded-2 me-2 px-4 py-3"
      style={{ backgroundColor: bg, color: cl }}
    >
      <BsHandThumbsUp className="fs-4 me-2 reverseChar" />
      Like
    </div>
  );
};

export default LikeButton;
